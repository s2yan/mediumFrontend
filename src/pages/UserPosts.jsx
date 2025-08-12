import React, { useContext , useEffect } from "react";
import PostContext from "../Contexts/PostContext";
import PostCard from "../components/PostCard";

export default function UserPosts(){

    const { posts , setPosts } = useContext(PostContext)

    useEffect(() => {
	const fetchPosts = async () => {
	    try{
		const res = await fetch("http://localhost:8000/api/v1/post/posts")
		const resData = await res.json()
		
		console.log(resData.data)
		setPosts(resData.data)
	    }catch(error){ 
		console.log("Error fetching userData: ", error)
	    }
	};

	fetchPosts()
	console.log(posts)
    }, []) 

    return(
	<>
	    { posts.map( (post) =>  ( <PostCard key={post._id} post={ post } />)) }
	</>
    )
}
