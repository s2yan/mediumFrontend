import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import UserContext from "../Contexts/UserContext";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const { loggedUser, setLoggedUser } = useContext(UserContext);

  const onLoginFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/user/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      const token = response.data.data.accessToken;
      document.cookie = `accessToken=${token}; path=/; sameSite=Lax`;
      setLoggedUser((prev) => !prev);

      console.log("User logged in successfully", response.data);
    } catch (error) {
      console.log("Error logging user", error.response?.data || error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <form
        onSubmit={onLoginFormSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Sign In
        </h2>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 text-sm text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="you@example.com"
            required
          />
        </div>

        {/* Password */}
        <div className="flex flex-col relative">
          <label htmlFor="password" className="mb-1 text-sm text-gray-700">
            Password
          </label>
          <input
            id="password"
            type={passwordType}
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Your password"
            autoComplete="current-password"
            required
          />
          <button
            type="button"
            onMouseDown={() => setPasswordType("text")}
            onMouseUp={() => setPasswordType("password")}
            className="absolute right-3 top-9 text-gray-500 hover:text-orange-500"
          >
            {passwordType === "password" ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
}
