'use client';

import React from 'react';

const ProductsLoading= () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-12">
      <div className="w-full max-w-6xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 animate-pulse">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="bg-gray-100 rounded-2xl shadow-md p-4">
            <div className="h-40 bg-gray-300 rounded-xl mb-4"></div>
            <div className="h-4 bg-gray-300 rounded mb-2 w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsLoading;
