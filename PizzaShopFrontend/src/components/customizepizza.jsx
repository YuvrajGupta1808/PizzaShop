import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "./cartcontext";

// Assume images are stored in a directory structure similar to the initial pizza image
import pizzaImage from "../images/personal.png";

import cauliflowerDoughImage from "../images/dough/cauliflower.png";
import classicDoughImage from "../images/dough/classic.png";
import glutenFreeDoughImage from "../images/dough/gluten.png";
import highRiseDoughImage from "../images/dough/highrise.png";

import freshmozeralla from "../images/cheese/fresh.png";
import parmasen from "../images/cheese/parmesan.png";
import shredded from "../images/cheese/shred.png";
import vegan from "../images/cheese/vegan.png";
import nocheese from "../images/sauce/nosauce.png";

import bbqsauce from "../images/drizzle/BBQSauce.png";
import oliveoil from "../images/drizzle/OliveOil.png";
import pesto from "../images/drizzle/PestoDrizzle.png";
import ranch from "../images/drizzle/RanchDrizzle.png";

import bacon from "../images/meat/bacon.png";
import grillchicken from "../images/meat/grillchicken.png";
import italian from "../images/meat/italian.png";
import pepperoni from "../images/meat/pepperoni.png";
import ham from "../images/meat/smokedham.png";
import veganmeat from "../images/meat/veganmeat.png";

import Artichoke from "../images/veggies/Artichoke.png";
import BananaPeppers from "../images/veggies/BananaPeppers.png";
import Basil from "../images/veggies/Basil.png";
import BlackOlives from "../images/veggies/BlackOlives.png";
import Garlic from "../images/veggies/Garlic.png";
import GreenPeppers from "../images/veggies/GreenPeppers.png";
import Jalapenos from "../images/veggies/jalapenos.png";
import Mushroom from "../images/veggies/Mushrooms.png";
import Tomato from "../images/veggies/Tomato.png";

import GarlicPesto from "../images/sauce/garlicpesto.png";
import NoSauce from "../images/sauce/nosauce.png";
import RedSauce from "../images/sauce/redsauce.png";
import SpicyRed from "../images/sauce/spicyred.png";
import White from "../images/sauce/white.png";

const CustomizePizza = () => {
  const navigate = useNavigate(); // Add this line
  const [cart, dispatch] = useCart();
  const [toppingType, setToppingType] = useState("createpizza");
  const location = useLocation();
  const [quantity, setQuantity] = useState(1); // For managing pizza quantity before adding to cart

  useEffect(() => {
    const path = location.pathname;
    if (path.includes("onetopping")) {
      setToppingType("onetopping");
    } else if (path.includes("twotoppings")) {
      setToppingType("twotoppings");
    } else {
      setToppingType("createpizza");
    }
  }, [location]);
  const [selectedDough, setSelectedDough] = useState("");
  const [selectedCheese, setSelectedCheese] = useState([]);
  const [selectedDrizzle, setSelectedDrizzle] = useState("");
  const [selectedMeat, setSelectedMeat] = useState([]);
  const [selectedVeggies, setSelectedVeggies] = useState([]);
  const [selectedSauce, setSelectedSauce] = useState("");
  const [selectedSeasonings, setSelectedSeasonings] = useState([]);
  const [specialInstructions, setSpecialInstructions] = useState("");
  const [pizzaName, setPizzaName] = useState("");

  const cheeseOptions = [
    { name: "Shred Mozeralla", image: shredded },
    { name: "Fresh Mozeralla", image: freshmozeralla },
    { name: "Vegan", image: vegan },
    { name: "Parmesan", image: parmasen },
    { name: "No Cheese", image: nocheese },
  ];
  const doughOptions = [
    { name: "Classic", image: classicDoughImage },
    { name: "Gluten Free", image: glutenFreeDoughImage },
    { name: "Cauliflower", image: cauliflowerDoughImage },
    { name: "High Rise", image: highRiseDoughImage },
  ];
  const drizzleOptions = [
    { name: "Olive Oil", image: oliveoil },
    { name: "BBQ Sauce", image: bbqsauce },
    { name: "Pesto Drizzle", image: pesto },
    { name: "Ranch Drizzle", image: ranch },
  ];
  const meatOptions = [
    { name: "Bacon", image: bacon },
    { name: "Grilled Chicken", image: grillchicken },
    { name: "Italian Sausage", image: italian },
    { name: "Pepperoni", image: pepperoni },
    { name: "Smoked Ham", image: ham },
    { name: "Vegan", image: veganmeat },
  ];
  const veggiesOptions = [
    { name: "Artichoke", image: Artichoke },
    { name: "Banana Peppers", image: BananaPeppers },
    { name: "Basil", image: Basil },
    { name: "Black Olives", image: BlackOlives },
    { name: "Garlic", image: Garlic },
    { name: "Green Peppers", image: GreenPeppers },
    { name: "Jalapenos", image: Jalapenos },
    { name: "Mushroom", image: Mushroom },
    { name: "Tomato", image: Tomato },
  ];

  const sauceOptions = [
    { name: "Red Sauce", image: RedSauce },
    { name: "Spicy Red", image: SpicyRed },
    { name: "White Sauce", image: White },
    { name: "Garlic Pesto", image: GarlicPesto },
    { name: "No Sauce", image: NoSauce },
  ];

  const seasoningsOptions = ["Salt", "Oregano", "Chili Flakes"];

  const basePrice = 6.98;
  const meatPrice = 4.0;
  const veggiesPrice = 3.0;

  const calculatePrice = (meatArray, veggiesArray) => {
    return (
      basePrice +
      meatArray.length * meatPrice +
      veggiesArray.length * veggiesPrice
    );
  };

  const createPizza = async (pizzaDetails) => {
    try {
      const response = await fetch("http://localhost:5173/pizzas/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pizzaDetails),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (response.ok) {
        return data.pizzaId;
      } else {
        throw new Error(data.message || "Failed to create pizza.");
      }
    } catch (error) {
      console.error("Error creating pizza:", error);
    }
  };

  const addToCart = async () => {
    const price = calculatePrice(selectedMeat, selectedVeggies);

    const pizzaDetails = {
      name: pizzaName,
      image: pizzaImage,
      dough: selectedDough,
      cheese: selectedCheese,
      meat: selectedMeat,
      veggies: selectedVeggies,
      sauce: selectedSauce,
      specialInstructions: specialInstructions,
      price: price,
    };

    const pizzaId = await createPizza(pizzaDetails);
    if (!pizzaId) return;

    try {
      const response = await fetch("http://localhost:5173/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getAuthToken()}`,
        },
        body: JSON.stringify({ pizzaId, quantity: 1 }),
      });
      const data = await response.json();
      if (response.ok) {
        if (isLoggedIn()) {
          navigate("/cart");
        } else {
          navigate("/login");
        }
      } else {
        throw new Error(data.message || "Failed to add pizza to cart.");
      }
    } catch (error) {
      console.error("Error adding pizza to cart:", error);
    }
  };

  const handleSelection = (event, category, option) => {
    event.preventDefault();
    const updateSelection = (prev, option) => {
      const exists = prev.includes(option);
      if (exists) {
        return prev.filter((item) => item !== option);
      } else {
        if (
          toppingType === "onetopping" &&
          category === "Meat" &&
          prev.length < 1
        ) {
          return [...prev, option];
        } else if (toppingType === "twotoppings") {
          if (
            category === "Meat" &&
            prev.filter((item) =>
              meatOptions.some((meat) => meat.name === item)
            ).length < 1
          ) {
            return [...prev, option];
          } else if (
            category === "Veggies" &&
            prev.filter((item) =>
              veggiesOptions.some((veggie) => veggie.name === item)
            ).length < 1
          ) {
            return [...prev, option];
          }
        } else {
          return [...prev, option];
        }
      }
      return prev;
    };
    switch (category) {
      case "Dough":
        setSelectedDough(option);
        break;
      case "Cheese":
        setSelectedCheese(updateSelection(selectedCheese, option));
        break;
      case "Drizzle":
        setSelectedDrizzle(option);
        break;
      case "Meat":
        setSelectedMeat(updateSelection(selectedMeat, option));
        break;
      case "Veggies":
        setSelectedVeggies(updateSelection(selectedVeggies, option));
        break;
      case "Sauce":
        setSelectedSauce(option);
        break;
      case "Seasonings":
        setSelectedSeasonings(updateSelection(selectedSeasonings, option));
        break;
      default:
        break;
    }
  };

  return (
    <div className="container bg-grey-100 mx-auto px-4 py-8">
      <h1 className="text-4xl text-yellow-600 font-semibold ml-24 mt-16 font-'Founders Grotesk'">
        Build your own Pizza{" "}
      </h1>
      <div className="w-full lg:w-2/3 space-y-6 bg-white rounded-lg px-4 py-8 ml-24">
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-3 font-['Neue_Montreal']">
            Select the Dough:
          </h2>
          <div className="flex flex-wrap font-['Neue_Montreal']">
            {doughOptions.map((dough) => (
              <button
                key={dough.name}
                onClick={(event) => handleSelection(event, "Dough", dough.name)}
                className={`m-2 p-2 border rounded ${
                  selectedDough === dough.name
                    ? "bg-yellow-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                <img
                  src={dough.image}
                  alt={dough.name}
                  className="w-30 h-20 mb-2 rounded"
                />
                {dough.name}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-3 font-['Neue_Montreal']">
            Select the Meat:
          </h2>
          <div className="flex flex-wrap font-['Neue_Montreal']">
            {meatOptions.map((meat) => (
              <button
                key={meat.name}
                onClick={(event) => handleSelection(event, "Meat", meat.name)}
                className={`m-2 p-2 border rounded ${
                  selectedMeat.includes(meat.name)
                    ? "bg-yellow-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                <img
                  src={meat.image}
                  alt={meat.name}
                  className="w-30 h-20 mb-2 rounded"
                />
                {meat.name}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-3 font-['Neue_Montreal']">
            Select the Veggies:
          </h2>
          <div className="flex flex-wrap font-['Neue_Montreal']">
            {veggiesOptions.map((veggies) => (
              <button
                key={veggies.name}
                onClick={(event) =>
                  handleSelection(event, "Veggies", veggies.name)
                }
                className={`m-2 p-2 border rounded ${
                  selectedVeggies.includes(veggies.name)
                    ? "bg-yellow-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                <img
                  src={veggies.image}
                  alt={veggies.name}
                  className="w-30 h-20 mb-2 rounded"
                />
                {veggies.name}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-3 font-['Neue_Montreal']">
            Select the Sauce:
          </h2>
          <div className="flex flex-wrap font-['Neue_Montreal']">
            {sauceOptions.map((sauce) => (
              <button
                key={sauce.name}
                onClick={(event) => handleSelection(event, "Sauce", sauce.name)}
                className={`m-2 p-2 border rounded ${
                  selectedSauce.includes(sauce.name)
                    ? "bg-yellow-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                <img
                  src={sauce.image}
                  alt={sauce.name}
                  className="w-30 h-20 mb-2 rounded"
                />
                {sauce.name}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-3 font-['Neue_Montreal']">
            Select the Cheese:
          </h2>
          <div className="flex flex-wrap font-['Neue_Montreal']">
            {cheeseOptions.map((cheese) => (
              <button
                key={cheese.name}
                onClick={(event) =>
                  handleSelection(event, "Cheese", cheese.name)
                }
                className={`m-2 p-2 border rounded ${
                  selectedCheese.includes(cheese.name)
                    ? "bg-yellow-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                <img
                  src={cheese.image}
                  alt={cheese.name}
                  className="w-30 h-20 mb-2 rounded"
                />
                {cheese.name}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-3 font-['Neue_Montreal']">
            Select the drizzle:
          </h2>
          <div className="flex flex-wrap font-['Neue_Montreal']">
            {drizzleOptions.map((drizzle) => (
              <button
                key={drizzle.name}
                onClick={(event) =>
                  handleSelection(event, "Drizzle", drizzle.name)
                }
                className={`m-2 p-2 border rounded ${
                  selectedDrizzle.includes(drizzle.name)
                    ? "bg-yellow-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                <img
                  src={drizzle.image}
                  alt={drizzle.name}
                  className="w-30 h-20 mb-2 rounded"
                />
                {drizzle.name}
              </button>
            ))}
          </div>
        </div>
        <div></div>
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-3 font-['Neue_Montreal']">
            Name Your Pizza:
          </h2>
          <input
            type="text"
            value={pizzaName}
            onChange={(e) => setPizzaName(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Give your pizza a name"
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-3 font-['Neue_Montreal']">
            Special Instructions:
          </h2>
          <textarea
            value={specialInstructions}
            onChange={(e) => setSpecialInstructions(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Add any special instructions here"
            rows="4"
          />
        </div>

        <div className="flex justify-end">
          <button
            onClick={addToCart}
            className="bg-yellow-500 text-black py-2 px-6 rounded shadow hover:bg-yellow-600 transition ease-in-out duration-200"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div
        className="fixed top-1/2 right-0 transform -translate-y-1/2"
        style={{
          maxWidth: "60vh",
          maxHeight: "60vh",
        }}
      >
        {" "}
        <img
          src={pizzaImage}
          alt="Customize your pizza"
          className="rounded-full transition ease-in-out duration-200"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};

export default CustomizePizza;
