import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Try from "./components/Try";
import CreateYourPizza from "./components/buildpizza";
import CartPage from "./components/cart";
import { CartProvider } from "./components/cartcontext";
import CustomizePizza from "./components/customizepizza";
import FeaturedPizza from "./components/featuredpizza";
import Feedback from "./components/feedback";
import Home from "./components/home";
import Login from "./components/login";
import Navbar from "./components/navbar";
import Order from "./components/order";
import ReservationForm from "./components/reservation";
import Signup from "./components/signup";

function App() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1 style={{ color: '#f59e0b', fontSize: '3rem' }}>🍕 Pizza Shop</h1>
      <p style={{ fontSize: '1.2rem', marginTop: '20px' }}>Welcome to Pizza Point!</p>
      <p style={{ marginTop: '10px' }}>Your standalone frontend is working! 🎉</p>
    </div>
  );
}

export default App;
