import React, { useState } from "react";
import UserContext from "./UserContext";

export const UserContextProvider = ({ children }) => {


    const [ loggedUser, setLoggedUser ] = useState(false)
    const [ users, setUsers ] = useState(null)

    return (
	<UserContext.Provider value={ {loggedUser, setLoggedUser, users, setUsers } }>
	    { children }
	</UserContext.Provider>
    )
}


