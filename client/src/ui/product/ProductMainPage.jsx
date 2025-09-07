"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import ShieldIcon from "@mui/icons-material/Shield";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Button from "../button/Button";
import { useSelector } from "react-redux";
import ProductSliderGrid from "./ProductSiderGrid";

export default function ProductMainPage({
  images,
  title,
  description,
  price,
  stocksQuantity,
  productId,
  addToCart,
  buyNow,
}) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const stockAvailable = stocksQuantity;
  const actualPrice = Number(price) + 350;
  const {idToken} = useSelector(state=>state.userAuth)

  useEffect(() => {
    if (quantity > stockAvailable) {
      setQuantity(stockAvailable);
    }
  }, [stockAvailable]);

  const handlePrevImage = () => {
    if (images && images.length)
      setActiveImageIndex((prev) =>
        prev === 0 ? images.length - 1 : prev - 1
      );
  };

  const handleNextImage = () => {
    if (images && images.length)
      setActiveImageIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
  };

  const addToCartHandler = () => {
    addToCart( productId, quantity );
    // console.log(`Added ${quantity} of ${title} to cart`);
  };

  const buyNowHandler = () => {
    buyNow( productId, quantity );
  };

  if (!images || images.length === 0)
    return <p className="text-center text-gray-500">No product images available.</p>;

  return (
    <div className="p-4 sm:p-6 max-w-6xl mx-auto">
      {/* Image and Details Section */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Image Section */}
        <div className="flex-1">
          <div className="relative w-full">
          <Image
              src={images[activeImageIndex]}
              alt={title}
              width={600}
              height={600}
              className="rounded-xl w-full h-auto object-cover"
              priority
              />
            <Button
              aria-label="Previous image"
              onClick={handlePrevImage}
              variant="secondary"
              size="small"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 p-1 rounded-full shadow min-w-0"
            >
              <ChevronLeft />
            </Button>
            <Button
              aria-label="Next image"
              onClick={handleNextImage}
              variant="secondary"
              size="small"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 rounded-full shadow min-w-0"
            >
              <ChevronRight />
            </Button>
          </div>
          <div className="flex space-x-3 mt-4">
            {images.map((img, i) => (
              <Image
                key={i}
                src={img}
                alt={`Thumbnail ${i + 1}`}
                width={100}
                height={100}
                className={`rounded-lg cursor-pointer border-2 ${
                  activeImageIndex === i
                    ? "border-green-600"
                    : "border-transparent"
                }`}
                onClick={() => setActiveImageIndex(i)}
                loading="lazy"
              />
            ))}
          </div>
        </div>

        {/* Product Info Section */}
        <div className="flex-1 space-y-4">
          <h1 className="text-2xl font-semibold">{title}</h1>
          <div className="text-2xl text-green-700 font-bold">{`₹${price}`}</div>
          <div className="text-gray-500 line-through">{`MRP ₹${actualPrice}`}</div>
          <p className="text-sm text-gray-700">{description}</p>

          {/* Stock Info */}
          <div className="mt-4 text-sm">
            <span
              className={`font-medium ${
                stockAvailable > 0 ? "text-green-700" : "text-red-600"
              }`}
            >
              {stockAvailable > 0
                ? `${stockAvailable} in stock`
                : "Out of stock"}
            </span>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mt-2">
            <label className="text-sm">Quantity:</label>
            <div className="flex items-center border rounded-md overflow-hidden">
              <Button
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                variant="ghost"
                size="small"
                className="px-2 py-1 rounded-none border-0 min-w-0"
              >
                <RemoveIcon fontSize="small" />
              </Button>
              <span className="px-3">{quantity}</span>
              <Button
                onClick={() =>
                  setQuantity((prev) =>
                    Math.min(stockAvailable, prev + 1)
                  )
                }
                variant="ghost"
                size="small"
                className="px-2 py-1 rounded-none border-0 min-w-0"
              >
                <AddIcon fontSize="small" />
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button
              onClick={buyNowHandler}
              variant="secondary"
              disabled={stockAvailable === 0}
            >
              Buy Now
            </Button>
            <Button
              onClick={addToCartHandler}
              variant="primary"
              className="sm:w-80"
              disabled={stockAvailable === 0}
            >
              Add to bag
            </Button>
          </div>
        </div>
      </div>

      {/* Warranty and Return */}
      <div className="mt-8 space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#D6E6DF]">
            <ShieldIcon fontSize="medium" />
          </div>
          <div>
            <span className="font-medium">6-Month Colour Warranty</span>
            <p className="text-sm text-gray-600">
              Your necklace won’t fade. We promise.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#D6E6DF]">
            <KeyboardReturnIcon fontSize="medium" />
          </div>
          <div>
            <span className="font-medium">6-Month Exchange</span>
            <p className="text-sm text-gray-600">
              If colour fades within 6 months, we will exchange it for free.
            </p>
          </div>
        </div>
      </div>

      {/* Delivery Offers */}
      <div className="mt-10 flex flex-col gap-5 bg-[#D6E6DF] p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Delivery Offers</h2>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white">
            <KeyboardReturnIcon />
          </div>
          <p>
            <strong>FREE delivery</strong> on orders above ₹799
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white">
            <KeyboardReturnIcon />
          </div>
          <p>
            <strong>Get Coupons</strong> on orders above ₹999
          </p>
        </div>
      </div>

      {/* You may also like */}
      <div className="mt-10">
        <h2 className="text-lg font-semibold mb-4">You may also like</h2>
       <ProductSliderGrid/>
      </div>

      {/* Customer Reviews */}
      <div className="mt-12">
        <h2 className="text-lg font-semibold mb-4">Customer reviews</h2>
       
        <div className="mt-6 space-y-4">
          {testimonials.map((r,index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">{r.name}</span>
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-700">
               {`"${r.review}"`}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-10 text-center text-sm text-gray-500">
        <p className="mt-6">
          Follow us 💗{" "}
          <span className="text-pink-600 cursor-pointer">Instagram</span>{" "}
          <span className="text-blue-600 cursor-pointer">Facebook</span>
        </p>
      </footer>
    </div>
  );
}

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