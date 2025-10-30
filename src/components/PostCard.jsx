import { useState, useEffect } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { FaComment } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import PostIdContext from "../Contexts/PostIdContext";

export default function PostCard({ post, setPosts }) {
  const [profilePicture, setProfilePicture] = useState(null);
  const [username, setUsername] = useState("");
  const [ like, setLike ] = useState(false);
  const [ likeCount, setLikeCount ] = useState(0)

  const { setPostId } = useContext( PostIdContext )

  const handleOutlineLikeButtonClick = async () => {
    setLike(true)
    //console.log("Outine like clicked")
    try{
      const response = await fetch(`http://localhost:8000/api/v1/post/updateLike/${post._id}`,{
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        }
      })
      const responseData = await response.json()
      setLikeCount(responseData.data.likes.length)

    }catch(error){
      console.log("Something went wrong while updating the like:", error);
    }

  }

  const handleFillLikeButtonClick = async () => {
    setLike(false)
    //console.log("Fill like clicked")
    try{
      const response = await fetch(`http://localhost:8000/api/v1/post/removeLike/${post._id}`,{
        method: 'PUT',
        credentials: 'include',
        headers: {
          "Content-Type" : "applcation/json"
        }
      })

      const responseData = await response.json()
      setLikeCount(responseData.data.likes.length);

    }catch(error){
      console.log("Something went wrong while removing the like: " + error)
    }
  }

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const res = await fetch(`http://localhost:8000/api/v1/user/getUser/${post.owner}`);
        const resData = await res.json();
        setProfilePicture(resData.data.profileImage);
        setUsername(resData.data.firstname);
      } catch (error) {
        console.log("Something went wrong while fetching the user details", error);
      }
    };

    fetchUserDetails();
  }, []);

  const navigate = useNavigate()

  const handleOnPostClick = () =>{
    setPostId(post._id)
    navigate(`/post/${post._id}`)
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
      {/* User Info */}
      <div className="flex items-center p-4 border-b border-gray-100">
        <img
          src={profilePicture}
          alt="User profile pic"
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <h2 className="text-lg font-semibold text-gray-800">{username}</h2>
      </div>

      {/* Post Content */}
      <div className="p-4" onClick={ handleOnPostClick }>
        <div className="mb-2">
          <h2 className="text-xl font-bold text-gray-900" dangerouslySetInnerHTML={{ __html: post.title}} />
        </div>
        <div>
          <p className="text-gray-700 text-sm" dangerouslySetInnerHTML={{ __html : post.content.slice(0,100) }} />
        </div>
      </div>

      {/* like and comment section */}
      <div className="p-4 flex items-center">
        <div className="p-2 mx-4 flex gap-x-2 items-center">
          <span>{ likeCount }</span>
          { like === false ? <AiOutlineLike onClick={ ()=> handleOutlineLikeButtonClick() }/> : <AiFillLike onClick={ () => handleFillLikeButtonClick()} /> }
        </div>

        <div className="p-2 mx-4">
          <FaComment />
        </div>
      </div>
    </div>
  );
}

