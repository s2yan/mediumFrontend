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

function App() {
  const [posts, setPosts] = useState([]);
  const [userDetails, setUserDetails] = useState([]);

  const { loggedUser } = useContext(UserContext);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("http://localhost:8000/api/v1/post/posts");
        const resData = await res.json();
        setPosts(resData.data);
      } catch (error) {
        console.log("Error fetching posts", error);
        setPosts([]);
      }
    }

    async function fetchUserData() {
      try {
        const res = await fetch("http://localhost:8000/api/v1/user/getUser");
        const resData = await res.json();
        setUserDetails(resData.data);
        console.log("User data : ", resData.data);
      } catch (error) {
        console.log("Error fetching user data", error);
        setUserDetails([]);
      }
    }

    // Uncomment these when backend is ready
    // fetchPosts();
    // fetchUserData();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
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
