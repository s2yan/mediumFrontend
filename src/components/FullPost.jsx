import React from "react";
import { useContext } from "react";
import PostIdContext from "../Contexts/PostIdContext";
import PostContext from "../Contexts/PostContext";


export default function FullPost(){

    const { postId } = useContext(PostIdContext)
    const { posts } = useContext(PostContext)

    const postDetails = posts.find((post) => post._id === postId);
    
    return (
        <div>
           <div>
            <h1 dangerouslySetInnerHTML={{ __html: postDetails.title}}/>
           </div>
           <div>
            <p dangerouslySetInnerHTML={{ __html: postDetails.content}}/>
           </div>
        </div>
    )
}