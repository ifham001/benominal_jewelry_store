"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from '@/ui/button/Button';

// Testimonials data
const testimonials = [
  {
    name: "Ananya, Mumbai",
    review: "It hasn't tarnished at all – and I wear it daily. Truly stunning.",
  },
  {
    name: "Sana, Delhi",
    review: "Elegant and affordable. Goes with every outfit.",
  },
  {
    name: "Meera, Bangalore",
    review: "Subtle sparkle, perfect for daily wear.",
  },
  {
    name: "Riya, Kolkata",
    review: "Impressed with the quality and packaging.",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="px-4 md:px-10 lg:px-20 py-16 bg-white text-center">
      <h2 className="text-4xl md:text-5xl font-serif text-[#1d3c2e] mb-12">
        Testimonials
      </h2>

      <div className="relative max-w-2xl mx-auto bg-[#f2f9f5] px-6 py-8 rounded-xl shadow-md">
        {/* Left Arrow */}
        <Button
          onClick={handlePrev}
          variant="ghost"
          size="small"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#1d3c2e] text-3xl font-bold p-2 min-w-0"
        >
          &#8592;
        </Button>

        {/* Animated Testimonial Content */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h4 className="text-lg font-semibold mb-2">
            {testimonials[activeIndex].name}
          </h4>
          <p className="text-gray-700 mb-4">{testimonials[activeIndex].review}</p>
          <div className="text-[#b18b2c] text-lg">★★★★★</div>
        </motion.div>

        {/* Right Arrow */}
        <Button
          onClick={handleNext}
          variant="ghost"
          size="small"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#1d3c2e] text-3xl font-bold p-2 min-w-0"
        >
          &#8594;
        </Button>
      </div>
    </section>
  );
};

export default Testimonials;
