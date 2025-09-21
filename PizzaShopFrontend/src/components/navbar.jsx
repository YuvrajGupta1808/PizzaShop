import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY < 50 || lastScrollY.current >= window.scrollY);
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Check authentication status on component mount and route changes
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, [location.pathname]);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/");
  };

  // Dynamic nav links based on authentication status
  const baseNavLinks = [
    { name: "Home", path: "/" },
    { name: "Build your Pizza", path: "/build-pizza" },
    { name: "Personalised Menu", path: "/featured-pizza" },
    { name: "Reservation", path: "/reservation" },
    { name: "Feedback", path: "/feedback" },
  ];

  // Add cart link for logged-in users
  const cartLink = isLoggedIn ? [{ name: "Cart", path: "/cart" }] : [];

  const authNavLink = isLoggedIn
    ? { name: "Logout", action: handleLogout }
    : { name: "Login", path: "/login" };

  const navLinks = [...baseNavLinks, ...cartLink, authNavLink];

  return (
    <div
      className={`fixed top-0 z-50 w-full px-20 py-1 flex justify-between items-center transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } bg-transparent`}
    >
      <div className="text-center mt-4">
        <h1
          className="text-4xl font-extrabold tracking-lighter"
          style={{
            fontFamily: "'Founders Grotesk', sans-serif",
            color: location.pathname === "/" ? "white" : "black",
          }}
        >
          Pizza Point.
        </h1>
        <p
          className="text-right text-lg font-light -mt-2"
          style={{
            fontFamily: "'Founders Grotesk', sans-serif",
            color: location.pathname === "/" ? "#facc15" : "black",
          }}
        >
          Since 2024&nbsp;&nbsp;&nbsp;
        </p>
      </div>

      <div className="links flex gap-10 font-['Neue_Montreal']">
        {navLinks.map((link, index) => {
          // Handle logout button differently
          if (link.action) {
            return (
              <button
                key={index}
                onClick={link.action}
                className={`text-xl font-regular relative transition duration-300 ease-in-out ${
                  location.pathname === "/"
                    ? "text-yellow-400 hover:text-white"
                    : "text-black hover:text-yellow-500"
                } cursor-pointer`}
              >
                {link.name}
              </button>
            );
          }
          
          // Regular navigation links
          return (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                `text-xl font-regular relative transition duration-300 ease-in-out ${
                  location.pathname === "/"
                    ? "text-yellow-400 hover:text-white"
                    : "text-black hover:text-yellow-500"
                } ${isActive ? "underline" : ""}`
              }
              style={({ isActive }) =>
                isActive
                  ? {
                      textDecoration: "underline",
                      textDecorationThickness: "2px",
                      textUnderlineOffset: "6px",
                      textDecorationColor:
                        location.pathname === "/" ? "#facc15" : "black",
                    }
                  : {}
              }
            >
              {link.name}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
