import PostIdContext from "./PostIdContext";
import { React, useState } from "react";

const PostIdContextProvider = ({ children }) => {

    const [ postId, setPostId ] = useState(null)

    return (
        <PostIdContext.Provider value={{ postId, setPostId }}>
            {children}
        </PostIdContext.Provider>
    )
}

export { PostIdContextProvider }