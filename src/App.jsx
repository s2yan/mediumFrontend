import { useState, useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./pages/Singup";
import Signin from "./pages/Singin";
import Editor from "./pages/Editor";
import UserContext from "./Contexts/UserContext.js";
import { Navigate } from "react-router-dom";
import UserPosts from "./pages/UserPosts.jsx";
import { LandingPage } from "./pages/LandingPage.jsx";

function App() {
  const [posts, setPosts] = useState([]);
  const [userDetails, setUserDetails] = useState([]);

  const { loggedUser, setLoggedUser } = useContext(UserContext);

  useEffect(() => {
    const checkUserSession = async() => {
      
      try{
      const response = await fetch("http://localhost:8000/api/v1/user/getUser", {
        credentials: "include"
      })

      const resData = await response.json()
      console.log(resData.data)
      setLoggedUser(true)
    
    }catch(error){
      console.log("Error fetching user session details : ", error)
      setLoggedUser(false)
    }
  }

  checkUserSession()
  }, []);

  return (
    <div className="container mx-auto px-4">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={ loggedUser ? <UserPosts /> : <LandingPage /> }/>
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="signin" element= {
              loggedUser ? <Navigate to="/"/> : <Signin />
            }/>
            <Route path="signup" element={
              loggedUser ? <Navigate to="/" /> : <Signup />
            }/>
            <Route path="createPost" element={
              loggedUser ? <Editor /> : <Navigate to="/"/>
            }/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
