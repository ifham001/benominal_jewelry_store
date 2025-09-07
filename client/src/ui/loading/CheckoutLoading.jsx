'use client';

import React from 'react';

const CheckoutLoading = () => {
  return (
    <div className="min-h-screen flex justify-center items-start py-10 animate-pulse">
      <div className="w-full max-w-2xl overflow-hidden relative">
        <div className="w-1/2 px-4">
          {/* Header */}
          <div className="max-w-xl mx-auto p-4 sm:p-6 space-y-6">
            <div className="h-8 w-40 bg-gray-200 rounded" />
            <div className="h-6 w-48 bg-gray-200 rounded" />
            
            {/* Form Fields */}
            <div className="space-y-4">
              {/* First and Last Name */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 h-10 bg-gray-200 rounded-full" />
                <div className="flex-1 h-10 bg-gray-200 rounded-full" />
              </div>
              
              {/* Email */}
              <div className="h-10 bg-gray-200 rounded-full" />
              
              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-20 h-10 bg-gray-200 rounded-full" />
                <div className="flex-1 h-10 bg-gray-200 rounded-full" />
              </div>
              
              {/* Address */}
              <div className="h-10 bg-gray-200 rounded-full" />
              
              {/* Apartment */}
              <div className="h-10 bg-gray-200 rounded-full" />
              
              {/* City */}
              <div className="h-10 bg-gray-200 rounded-full" />
              
              {/* Pincode */}
              <div className="h-10 bg-gray-200 rounded-full" />
              
              {/* Submit Button */}
              <div className="h-10 bg-gray-300 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutLoading; 