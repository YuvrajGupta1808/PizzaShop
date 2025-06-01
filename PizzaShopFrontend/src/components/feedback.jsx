import React, { useState } from "react";

const FeedbackForm = () => {
  // State for feedback details
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle change in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(feedback);
    // TODO: Add your submission logic here (e.g., API call)
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white text-black py-8 px-6 md:px-8 rounded-lg shadow-xl max-w-lg w-full mt-12 mx-4">
        <h1 className="text-3xl text-yellow-500 font-bold text-center mb-8">
          Share Your Feedback
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={feedback.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={feedback.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={feedback.message}
              onChange={handleChange}
              required
              rows="10"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black py-3 rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition-colors duration-300"
          >
            Send Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
