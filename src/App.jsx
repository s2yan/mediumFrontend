import PostCard from "./components/PostCard";
import { useState, useEffect } from "react";
import { UserContextProvider } from "./Contexts/UserContextProvider";
import UserPosts from "./pages/UserPosts";

function App() {
  const [posts, setPosts] = useState([]);
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("http://localhost:8000/api/v1/post/posts");
        const resData = await res.json();
        const allPosts = resData.data;
        setPosts(allPosts);
      } catch (error) {
        console.log("Error fetching posts", error);
        setPosts([]);
      }
    }

    //fetchPosts();
    async function fetchUserData() {
      try {
        const res = await fetch("http://localhost:8000/api/v1/user/getUser");
        const resData = res.json();
        setUserDetails(resData.data);
        console.log("User data : ", userDetails);
      } catch (error) {
        console.log("Error fetching user data", error);
        setUserDetails([]);
      }
    }

    //fetchUserData();
    console.log(import.meta.env.VITE_UNSPLASH_ACCESS_KEY);
  }, []);

  return (
      <div className="container mx-auto px-4">
	<UserPosts />
      </div>
  );
}

export default App;
