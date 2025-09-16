import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock login - just store user data and navigate
    const mockUser = {
      id: 1,
      username: credentials.username,
      email: credentials.username + "@example.com"
    };
    localStorage.setItem("token", "mock-token-123");
    localStorage.setItem("user", JSON.stringify(mockUser));
    console.log("Mock login successful!", mockUser);
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white py-8 px-6 md:px-8 rounded-lg shadow-xl w-full max-w-md">
        <h1 className="text-3xl text-yellow-500 font-bold text-center mb-6">
          Login
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm text-gray-600">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              onChange={handleChange}
              value={credentials.username}
              className="w-full p-3 border rounded focus:outline-none focus:border-yellow-500"
              placeholder="Enter your username"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              value={credentials.password}
              className="w-full p-3 border rounded focus:outline-none focus:border-yellow-500"
              placeholder="Enter your password"
              required
            />
          </div>
          {loginError && (
            <p className="text-red-500 text-sm text-center">{loginError}</p>
          )}
          <div className="space-y-4">
            <button
              type="submit"
              className="w-full py-3 rounded bg-yellow-500 text-black hover:bg-yellow-600 focus:outline-none"
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => navigate("/signup")} // Replace with your signup route
              className="w-full py-3 rounded border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black focus:outline-none"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
