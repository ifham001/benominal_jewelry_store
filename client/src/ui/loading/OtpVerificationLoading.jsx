'use client';

import React from 'react';

const OtpVerificationLoading = () => {
  return (
    <>
      {/* Skeleton for Edit Number button */}
      <div className="bg-gray-200 rounded w-24 h-4 mb-4 animate-pulse"></div>

      {/* Skeleton for OTP Input */}
      <div className="w-full border border-gray-300 rounded-full px-4 py-2 mb-4 bg-gray-100 animate-pulse">
        <div className="bg-gray-200 rounded h-6 w-full"></div>
      </div>

      {/* Skeleton for Verify OTP Button */}
      <div className="bg-gray-200 rounded-full w-full py-2 h-10 animate-pulse"></div>
    </>
  );
};

export default OtpVerificationLoading; 