import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { mockCartItems } from "../data/mockData";

const CartPage = () => {
  const navigate = useNavigate();
  const taxRate = 0.08;
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    // Use mock data instead of API call
    setPizzas(mockCartItems);
  }, []);

  const handleUpdateQuantity = (pizzaId, quantityChange) => {
    setPizzas((prevPizzas) =>
      prevPizzas.map((pizza) => {
        if (pizza.id === pizzaId) {
          const newQuantity = Math.max(0, pizza.quantity + quantityChange);
          if (newQuantity === 0) {
            // Remove pizza if quantity becomes 0
            return null;
          }
          return { ...pizza, quantity: newQuantity };
        }
        return pizza;
      }).filter(Boolean) // Remove null values
    );
  };

  const calculateTotal = () => {
    const subtotal = pizzas.reduce((total, pizza) => {
      return total + pizza.price * (pizza.quantity || 1); // Default quantity to 1 if not set
    }, 0);
    const tax = subtotal * taxRate;
    return (subtotal + tax).toFixed(2);
  };

  const handleAddMorePizzas = () => {
    navigate("/build-pizza");
  };

  const handleRemovePizza = (pizzaId) => {
    setPizzas(pizzas.filter((pizza) => pizza.id !== pizzaId));
    console.log(`Removed pizza with ID: ${pizzaId}`);
  };

  const initialState = {
    pizzas: [],
  };

  return (
    <div className="container bg-grey-100 mx-auto px-4 py-8">
      <h1 className="text-4xl text-yellow-600 font-semibold ml-24 mt-16 mb-5">
        Your Cart
      </h1>
      {pizzas.length === 0 ? (
        <div className="text-center mt-10">
          <p className="text-xl font-semibold mb-4 font-'Neue Montreal'">
            Your cart is empty.
          </p>
          <button
            onClick={handleAddMorePizzas}
            className="px-8 py-3 text-lg rounded border border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-black focus:outline-none transition-colors duration-300 "
          >
            Add More Pizzas
          </button>
        </div>
      ) : (
        <div className="flex flex-col">
          {pizzas.map((pizza) => (
            <div
              key={pizza.id}
              className="flex flex-col md:flex-row justify-between items-center mb-8 p-10 rounded-lg"
            >
              <div className="flex items-center space-x-6 mb-4 md:mb-0">
                <img
                  src={pizza.image}
                  alt={pizza.name}
                  className="w-32 h-32 object-cover" // Increased size for better visibility
                />
                <div>
                  <p className="text-xl font-medium font-'Neue Montreal'">
                    {pizza.name}
                  </p>{" "}
                  <p className="text-md text-gray-600 mt-1 font-'Neue Montreal'">
                    Toppings:{" "}
                    {[
                      pizza.dough,
                      pizza.cheese,
                      pizza.drizzle,
                      pizza.meat,
                      pizza.veggies,
                      pizza.sauce,
                    ]
                      .filter(Boolean)
                      .join(", ")}{" "}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => handleUpdateQuantity(pizza.id, -1)}
                  disabled={pizza.quantity <= 1}
                  className="text-xl px-4 py-2 rounded-full bg-white text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
                >
                  -
                </button>
                <span className="text-lg font-medium">{pizza.quantity}</span>
                <button
                  onClick={() => handleUpdateQuantity(pizza.id, 1)}
                  className="text-xl px-4 py-2 rounded-full bg-white text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
                >
                  +
                </button>
              </div>
              <span className="text-lg font-medium mb-4 md:mb-0">
                ${(pizza.price * pizza.quantity).toFixed(2)}
              </span>
              <button
                onClick={() => handleRemovePizza(pizza.id)}
                className="text-lg font-semibold text-gray-600 bg-transparent hover:text-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-6 p-4 rounded-lg bg-white">
            <div className="text-right justify-between text-lg font-medium text-gray-800 space-y-4">
              <p>
                Total (excluding tax): $
                {(calculateTotal() / (1 + taxRate)).toFixed(2)}
              </p>
              <p>
                Tax: $
                {((calculateTotal() * taxRate) / (1 + taxRate)).toFixed(2)}
              </p>
              <p>Total (including tax): ${calculateTotal()}</p>
            </div>
            <div className="flex justify-end space-x-4 mt-4">
              {" "}
              {/* Align buttons to the right and add top margin */}
              <button
                onClick={handleAddMorePizzas}
                className="px-12 py-3 rounded border border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-black focus:outline-none"
              >
                Add More Pizzas
              </button>
              <button className="px-12 py-3 rounded bg-yellow-500 text-black hover:bg-yellow-600 focus:outline-none">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
