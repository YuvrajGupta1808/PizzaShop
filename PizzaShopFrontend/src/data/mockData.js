// Import images properly for production
import Slide1 from "../images/1.webp";
import Slide2 from "../images/2.webp";
import Slide3 from "../images/3.webp";
import Slide4 from "../images/4.webp";
import Slide5 from "../images/5.webp";
import Slide6 from "../images/6.webp";

// Mock data for the Pizza Shop frontend
export const mockPizzas = [
  {
    id: 1,
    name: "Margherita",
    price: 12.99,
    image: Slide1,
    description: "Classic tomato and mozzarella pizza",
    toppings: ["Tomato", "Mozzarella", "Basil"]
  },
  {
    id: 2,
    name: "Pepperoni",
    price: 14.99,
    image: Slide2,
    description: "Spicy pepperoni with mozzarella",
    toppings: ["Pepperoni", "Mozzarella", "Tomato Sauce"]
  },
  {
    id: 3,
    name: "Vegetarian",
    price: 13.99,
    image: Slide3,
    description: "Fresh vegetables and cheese",
    toppings: ["Bell Peppers", "Mushrooms", "Onions", "Mozzarella"]
  },
  {
    id: 4,
    name: "Hawaiian",
    price: 15.99,
    image: Slide4,
    description: "Ham and pineapple pizza",
    toppings: ["Ham", "Pineapple", "Mozzarella", "Tomato Sauce"]
  },
  {
    id: 5,
    name: "Meat Lovers",
    price: 16.99,
    image: Slide5,
    description: "Loaded with all your favorite meats",
    toppings: ["Pepperoni", "Sausage", "Bacon", "Ham", "Mozzarella"]
  },
  {
    id: 6,
    name: "BBQ Chicken",
    price: 15.99,
    image: Slide6,
    description: "BBQ sauce with grilled chicken",
    toppings: ["Grilled Chicken", "BBQ Sauce", "Red Onions", "Mozzarella"]
  }
];

export const mockCartItems = [
  {
    id: 1,
    name: "Margherita",
    price: 12.99,
    quantity: 2,
    image: Slide1
  },
  {
    id: 2,
    name: "Pepperoni",
    price: 14.99,
    quantity: 1,
    image: Slide2
  }
];
