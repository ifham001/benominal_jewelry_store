'use client';

import React from 'react';

const CartPageLoading = () => {
  return (
    <div className="min-h-screen py-10 flex justify-center items-start animate-pulse">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-xl p-6 space-y-6">
        <div className="h-6 w-1/2 bg-gray-200 rounded" />

        {/* Placeholder for 3 cart items */}
        {[1, 2, 3].map((_, i) => (
          <div
            key={i}
            className="flex gap-3 border border-gray-200 rounded-lg p-3 sm:p-4 bg-white shadow"
          >
            <div className="w-24 h-24 bg-gray-200 rounded-md" />
            <div className="flex-1 space-y-2">
              <div className="h-4 w-3/4 bg-gray-200 rounded" />
              <div className="flex gap-2">
                <div className="h-8 w-8 bg-gray-300 rounded-md" />
                <div className="h-8 w-8 bg-gray-300 rounded-md" />
                <div className="h-8 w-8 bg-gray-300 rounded-md" />
              </div>
            </div>
            <div className="flex flex-col items-end justify-between">
              <div className="h-4 w-16 bg-gray-200 rounded" />
              <div className="h-4 w-20 bg-gray-100 rounded" />
            </div>
          </div>
        ))}

        {/* Total Amount */}
        <div className="h-6 w-full bg-gray-200 rounded mt-4" />

        {/* Checkout button */}
        <div className="h-12 w-full bg-gray-300 rounded-full" />
      </div>
    </div>
  );
};

export default CartPageLoading;
