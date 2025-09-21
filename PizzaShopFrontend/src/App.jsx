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
    <Router>
      <Navbar />
      <CartProvider>
        <Routes>
          <Route path="/a" element={<Try />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reservation" element={<ReservationForm />} />
          <Route path="/build-pizza" element={<CreateYourPizza />} />
          <Route path="/featured-pizza" element={<FeaturedPizza />} />
          <Route path="/customize-pizza" element={<CustomizePizza />} />
          <Route
            path="/customize-pizza/createpizza"
            element={<CustomizePizza />}
          />
          <Route
            path="/customize-pizza/onetopping"
            element={<CustomizePizza />}
          />
          <Route
            path="/customize-pizza/twotoppings"
            element={<CustomizePizza />}
          />
          <Route path="/order/margherita" element={<Order />} />
          <Route path="/order/pepperoni" element={<Order />} />
          <Route path="/order/vegetarian" element={<Order />} />
          <Route path="/order/hawaiian" element={<Order />} />
          <Route path="/order/meat%20lovers" element={<Order />} />
          <Route path="/order/bbq%20chicken" element={<Order />} />
          <Route path="*" element={<Home />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
