import React, { useState } from "react";
import Slide1 from "../images/1.webp";
import Slide2 from "../images/2.webp";
import Slide3 from "../images/3.webp";
import Slide4 from "../images/4.webp";

const slides = [
  {
    src: Slide1,
    text: "Pizza Point: Crafting Your",
    text2: "Perfect Pizza Moments!",
    text3: "Curating culinary excellence, slice by slice.",
  },
  {
    src: Slide2,
    text: "Experience the Melt-in-Your-Mouth",
    text2: "Magic at Pizza Point!",
    text3: "Our chef sculpts flavors, crafting edible masterpieces.",
  },
  {
    src: Slide3,
    text: "Indulge in the Ultimate Cheese Pull",
    text2: "with Signature Pies!",
    text3: "Where ingredients meet innovation in our chef’s hands.",
  },
  {
    src: Slide4,
    text: "Savor the Flavor of Authenticity",
    text2: "at Pizza Point!",
    text3: "The chef creates divine combinations.",
  },
];

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full" style={{ height: "100vh" }}>
      <div className="absolute inset-0 flex items-center justify-between z-20">
        <button
          onClick={prevSlide}
          className="p-4 text-white bg-black/50 hover:bg-black/70"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="p-4 text-white bg-black/50 hover:bg-black/70"
        >
          &#10095;
        </button>
      </div>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <img
            src={slide.src}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-10 left-10 md:bottom-20 md:left-20">
            <p
              className="text-white text-4xl font-semibold mb-2"
              style={{ fontFamily: "'Founders Grotesk', sans-serif" }}
            >
              {slide.text}
            </p>
            <p
              className="text-white text-4xl font-semibold mb-10"
              style={{ fontFamily: "'Founders Grotesk', sans-serif" }}
            >
              {slide.text2}
            </p>
            <p
              className="text-yellow-400 text-2xl font-semibold"
              style={{ fontFamily: "'Founders Grotesk', sans-serif" }}
            >
              {slide.text3}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
