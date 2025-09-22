import { NavLink } from "react-router-dom";
import { useContext, useEffect } from "react";
import UserContext from "../Contexts/UserContext";

export default function Header() {

  const { loggedUser } = useContext(UserContext)
  useEffect(() => {
    console.log("user status: ", loggedUser)
  },[loggedUser])

  return (
    <header className="sticky z-50 top-0 bg-[#1e1e1e]">
      <nav className="flex justify-between items-center px-6 py-4">
        <div>
          <h1 className="text-3xl font-bold text-orange-500">PenPost</h1>
        </div>
        <ul className="flex flex-row items-center gap-8 text-white">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "text-orange-400" : "text-white"} hover:text-orange-400 transition-colors duration-200`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${isActive ? "text-orange-400" : "text-white"} hover:text-orange-400 transition-colors duration-200`
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${isActive ? "text-orange-400" : "text-white"} hover:text-orange-400 transition-colors duration-200`
              }
            >
              Contact Us 
            </NavLink>
          </li>
          { !loggedUser && 
          <>
          <li>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                `${isActive ? "text-orange-400" : "text-white"} hover:text-orange-400 transition-colors duration-200`
              }
            >
              Sign Up
            </NavLink>
          </li>
          <li className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg">
            <NavLink
              to="/signin"
              className={({ isActive }) =>
                `${isActive ? "text-black" : "text-white"} transition-colors duration-200 font-bold`
              }
            >
              LogIn
            </NavLink>
          </li>
          </>
          }
          {
            loggedUser && (
              <li> 
                <NavLink
                to="/createPost"
                className={({ isActive }) => 
                  `${isActive ? "text-orange:400": "text-white"} hover:text-orange-400 transition-colors duration-200`
                }
                >
                  Write
                </NavLink>
              </li>
            )
          }
        </ul>
      </nav>
    </header>
  );
}

