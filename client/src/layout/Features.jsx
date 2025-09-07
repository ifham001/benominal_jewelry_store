'use client';

import React from 'react';
import ProductSliderGrid from '@/ui/product/ProductSiderGrid';


function Features() {

  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="flex font mt-10 md:mt-20 flex-col items-center justify-center text-center px-4">
        <p className="text-3xl sm:text-xl md:text-6xl font-extralight text-[#1B4332]">
          New Arrivals - Designed to Turn Heads
        </p>
        <p className="text-xl sm:text-3xl md:text-3xl text-[#83918B] mt-8">
          Discover our bestselling styles and the latest drops.
        </p>
      </div>

      {/* Scrollable Section */}
      <ProductSliderGrid/>
    </div>
  );
}

export default Features;
