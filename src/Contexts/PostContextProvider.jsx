import PostContext from "./PostContext";
import React, { useState } from "react";

const PostContextProvider = ({ children }) => {
    
    const [ posts, setPosts ] = useState([])

    return (
	<PostContext.Provider value ={ {posts , setPosts} } >
	    { children }
	</PostContext.Provider>
    )
}

export { PostContextProvider }
