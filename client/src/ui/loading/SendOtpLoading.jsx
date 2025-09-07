'use client';

import React from 'react';

const SendOtpLoading = () => {
  return (
    <>
      {/* Skeleton for Phone Input */}
      <div className="flex items-center border border-gray-300 rounded-full px-3 py-2 mb-4 bg-white shadow-sm animate-pulse">
        <div className="bg-gray-200 rounded w-12 h-6"></div>
        <div className="flex-1 ml-3 bg-gray-200 rounded h-6"></div>
      </div>

      {/* Skeleton for Button */}
      <div className="bg-gray-200 rounded-full w-full py-2 text-base mb-4 h-10 animate-pulse"></div>
    </>
  );
};

export default SendOtpLoading; 