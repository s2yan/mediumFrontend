import React from "react";

export default function PostCard({ post }){
    return(
	<>
	    <div>
		<div>
		    <img src="#" alt="User profile pic" />
		    <h2> { post.owner } </h2> 	
		</div>
		<div>
		    <div>
			<h2> { post.title } </h2>
		    </div>
		    <div>
			<p> { post.content } </p>
		    </div>
		</div>
	    </div>
	</>
    )
}
