import React from "react";
import { useNavigate } from "react-router-dom";
import Createpizza from "../images/1.webp";
import One from "../images/2.webp";
import Two from "../images/3.webp";

const CreateYourPizza = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container bg-grey-100 mx-auto px-4 py-8">
        <h2 className="text-4xl text-yellow-600 font-semibold ml-24 mt-16 mb-4 font-'Founders Grotesk'">
          Build your Pizza{" "}
        </h2>
        <div className="flex justify-center items-center flex-wrap p-4 gap-4">
          <div className="w-[50vh] h-[77vh] relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img
              src={Createpizza}
              alt="Customize your pizza"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full p-4 bg-white bg-opacity-75">
              <p className="text-xl font-semibold">
                Your Pizza, Your Way
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-xl font-semibold text-yellow-600 text-align-right font-'Neue Montreal'">
                  {}$18.99
                </span>
                <span className="block text-base font-medium mt-1">
                  Choose from a variety of fresh doughs, sauces, cheeses, and
                  toppings to create your dream pizza.
                </span>
              </p>
              <button
                className="w-full mt-2 bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition-colors duration-300"
                onClick={() => navigate("/customize-pizza/createpizza")}
              >
                Order Now
              </button>
            </div>
          </div>

          {/* Adjacent images with prices */}
          <div className="w-[50vh] space-y-2">
            {/* One pizza */}
            <div className="h-[38vh] relative relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img
                src={One} // Replace with the actual path
                alt="One"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full p-4 bg-white bg-opacity-75">
                <p className="text-xl font-semibold">
                  Simplicity at its
                  Best&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-xl font-semibold text-yellow-600 text-align-right font-'Neue Montreal'">
                    {}$13.99
                  </span>
                  <span className="block text-base font-medium mt-1">
                    Enjoy a classic pizza with a single topping, crafted for
                    those who appreciate refined flavors.
                  </span>
                </p>
                <button
                  className="w-full mt-2 bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition-colors duration-300"
                  onClick={() => navigate("/customize-pizza/onetopping")}
                >
                  Order Now
                </button>
              </div>
            </div>

            {/* Two pizza */}
            <div className="h-[38vh] relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img
                src={Two} // Replace with the actual path
                alt="Two"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full p-4 bg-white bg-opacity-75">
                <p className="text-xl font-semibold">
                  Double the
                  Delight&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-xl font-semibold text-yellow-600 text-align-right font-'Neue Montreal'">
                    {}$15.99
                  </span>
                  <span className="block text-base font-medium mt-1">
                    Select any two toppings to double the joy and flavor of your
                    pizza experience.
                  </span>
                </p>
                <button
                  className="w-full mt-2 bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition-colors duration-300"
                  onClick={() => navigate("/customize-pizza/twotoppings")}
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateYourPizza;
