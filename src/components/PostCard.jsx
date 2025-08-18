import { useState, useEffect } from "react";

export default function PostCard({ post }) {
  const [profilePicture, setProfilePicture] = useState(null);
  const [username, setUsername] = useState("");

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
      <div className="p-4">
        <div className="mb-2">
          <h2 className="text-xl font-bold text-gray-900">{post.title}</h2>
        </div>
        <div>
          <p className="text-gray-700 text-sm">{post.content}</p>
        </div>
      </div>
    </div>
  );
}

