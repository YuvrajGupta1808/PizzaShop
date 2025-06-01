import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [signupError, setSignupError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: credentials.username,
          email: credentials.email,
          password: credentials.password,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Registered successfully!", data);
        navigate("/login"); // Navigate to login page upon successful registration
      } else {
        console.log("Registration failed!", data.message);
        setSignupError(data.message || "Invalid registration information");
      }
    } catch (error) {
      console.error("Registration error:", error);
      setSignupError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white py-8 px-6 md:px-8 rounded-lg shadow-xl w-full max-w-md">
        <h1 className="text-3xl text-yellow-500 font-bold text-center mb-6">
          Sign Up
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
              placeholder="Choose a username"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              value={credentials.email}
              className="w-full p-3 border rounded focus:outline-none focus:border-yellow-500"
              placeholder="Enter your email"
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
              placeholder="Create a password"
              required
            />
          </div>
          {signupError && (
            <p className="text-red-500 text-sm text-center">{signupError}</p>
          )}
          <div className="space-y-4">
            <button
              type="submit"
              className="w-full py-3 rounded bg-yellow-500 text-black hover:bg-yellow-600 focus:outline-none"
            >
              Sign Up
            </button>
            <button
              type="button"
              onClick={() => navigate("/login")} // Replace with your login route
              className="w-full py-3 rounded border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black focus:outline-none"
            >
              Already have an account? Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
