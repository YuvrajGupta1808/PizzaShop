import React from "react";
import { useNavigate } from "react-router-dom";

// Import images
import Margherita from "../images/1.webp";
import Pepperoni from "../images/2.webp";
import Vegetarian from "../images/3.webp";
import Hawaiian from "../images/4.webp";
import MeatLovers from "../images/5.webp";
import BBQChicken from "../images/6.webp";

// Example array of pizzas
const pizzas = [
  {
    name: "Margherita",
    image: Margherita,
    price: "13.99",
    description:
      "A timeless blend of rich tomato sauce, fresh mozzarella, and fragrant basil. Simple, fresh, and utterly delicious.",
  },
  {
    name: "Pepperoni",
    image: Pepperoni,
    price: "13.99",
    description:
      "Packed with pepperoni slices and a perfect blend of mozzarella and parmesan cheeses for a spicy kick with every bite.",
  },
  {
    name: "Vegetarian",
    image: Vegetarian,
    price: "13.99",
    description:
      "A garden feast on a pizza, with bell peppers, olives, onions, sliced tomatoes, and mushrooms, all atop a bed of stretchy mozzarella.",
  },
  {
    name: "Hawaiian",
    image: Hawaiian,
    price: "13.99",
    description:
      "A sweet and savory combination of juicy pineapple chunks and ham, smothered with loads of mozzarella cheese.",
  },
  {
    name: "Meat Lovers",
    image: MeatLovers,
    price: "13.99",
    description:
      "Hearty layers of sausage, pepperoni, bacon, and ham, creating the ultimate feast for meat aficionados.",
  },
  {
    name: "BBQ Chicken",
    image: BBQChicken,
    price: "13.99",
    description:
      "Succulent pieces of chicken smothered in smoky BBQ sauce, topped with caramelized onions and a mix of cheddar and mozzarella cheeses.",
  },
];

const FeaturedPizzas = () => {
  const navigate = useNavigate();

  const handleOrderNow = (pizzaName) => {
    navigate(`/order/${pizzaName.toLowerCase()}`);
  };

  return (
    <div className="container bg-grey-100 mx-auto px-4 py-8">
      <h2 className="text-4xl text-yellow-600 font-semibold ml-24 mt-16 -mb-5 font-'Founders Grotesk'">
        Featured Pizza
      </h2>
      <div className="container bg-grey-100 px-4 py-8">
        <div className="flex justify-center items-center flex-wrap p-4 gap-2">
          {pizzas.map((pizza, index) => (
            <div key={index} className="w-full md:w-1/3 lg:w-[34vh]  p-1">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={pizza.image}
                    alt={pizza.name}
                    className="w-full h-64 object-cover"
                    style={{ height: "20rem" }}
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-75 p-4">
                    <h3 className="text-lg font-semibold">
                      {pizza.name}
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="font-semibold text-yellow-600 font-'Neue Montreal'">
                        ${pizza.price}
                      </span>
                    </h3>
                    <p className="text-sm">{pizza.description}</p>
                    <button
                      className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition-colors duration-300 mt-3"
                      onClick={() =>
                        navigate(`/order/${pizza.name.toLowerCase()}`)
                      }
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPizzas;
