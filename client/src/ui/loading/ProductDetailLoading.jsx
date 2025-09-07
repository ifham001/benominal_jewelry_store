'use client';

import React from 'react';

const ProductDetailLoading = () => {
  return (
    <div className="p-4 sm:p-6 max-w-6xl mx-auto animate-pulse space-y-6">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left: Image Placeholder */}
        <div className="flex-1 space-y-4">
          <div className="w-full h-[400px] bg-gray-200 rounded-xl" />
          <div className="flex gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="w-20 h-20 bg-gray-200 rounded-lg" />
            ))}
          </div>
        </div>

        {/* Right: Info Section */}
        <div className="flex-1 space-y-4">
          <div className="h-6 bg-gray-200 w-3/4 rounded" />
          <div className="h-8 bg-gray-300 w-24 rounded" />
          <div className="h-5 bg-gray-200 w-32 rounded" />
          <div className="h-4 bg-gray-200 w-full rounded" />
          <div className="h-4 bg-gray-200 w-5/6 rounded" />
          <div className="h-4 bg-gray-200 w-3/4 rounded" />

          <div className="h-5 bg-gray-200 w-40 rounded mt-4" />

          {/* Quantity selector */}
          <div className="flex items-center gap-4">
            <div className="h-6 w-20 bg-gray-300 rounded" />
            <div className="h-8 w-24 bg-gray-200 rounded" />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="h-10 w-36 bg-gray-300 rounded-full" />
            <div className="h-10 sm:w-80 bg-gray-200 rounded-full" />
          </div>
        </div>
      </div>

      {/* Warranty Section */}
      <div className="space-y-4">
        {[1, 2].map((i) => (
          <div key={i} className="flex gap-4 items-center">
            <div className="w-12 h-12 bg-gray-200 rounded-full" />
            <div className="space-y-2">
              <div className="h-4 w-40 bg-gray-200 rounded" />
              <div className="h-3 w-60 bg-gray-100 rounded" />
            </div>
          </div>
        ))}
      </div>

      {/* Delivery Offers */}
      <div className="bg-[#D6E6DF] p-4 rounded-lg space-y-4">
        <div className="h-5 w-32 bg-gray-200 rounded" />
        {[1, 2].map((i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white" />
            <div className="h-4 w-64 bg-gray-200 rounded" />
          </div>
        ))}
      </div>

      {/* You may also like */}
      <div className="space-y-3">
        <div className="h-5 w-40 bg-gray-200 rounded" />
        <div className="flex gap-4 overflow-x-auto">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="w-40 space-y-2">
              <div className="h-40 bg-gray-200 rounded" />
              <div className="h-3 w-32 bg-gray-200 rounded" />
              <div className="h-3 w-20 bg-gray-300 rounded" />
            </div>
          ))}
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="space-y-4 mt-10">
        <div className="h-5 w-40 bg-gray-200 rounded" />
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="bg-gray-100 p-4 rounded-lg space-y-2">
            <div className="h-4 w-40 bg-gray-200 rounded" />
            <div className="h-3 w-full bg-gray-100 rounded" />
            <div className="h-3 w-5/6 bg-gray-100 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetailLoading;
