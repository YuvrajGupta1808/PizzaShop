import React, { useState } from "react";

const ReservationForm = () => {
  // State for reservation details
  const [reservation, setReservation] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: 1,
  });

  // Handle change in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservation({ ...reservation, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(reservation);
    // TODO: Add your submission logic here (e.g., API call)
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white text-black py-8 px-6 md:px-8 rounded-lg shadow-xl max-w-lg w-full mt-12 mx-4">
        <h1 className="text-3xl text-yellow-500 font-bold text-center mb-8">
          Make a Reservation at Pizza Point
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={reservation.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={reservation.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-semibold mb-2">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={reservation.date}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>
          <div>
            <label htmlFor="time" className="block text-sm font-semibold mb-2">
              Time
            </label>
            <input
              type="time"
              id="time"
              name="time"
              value={reservation.time}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>
          <div>
            <label
              htmlFor="guests"
              className="block text-sm font-semibold mb-2"
            >
              Number of Guests
            </label>
            <input
              type="number"
              id="guests"
              name="guests"
              value={reservation.guests}
              onChange={handleChange}
              required
              min="1"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black py-3 rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition-colors duration-300"
          >
            Book Table
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReservationForm;
