'use client';

import React from 'react';

const OrderProcessingLoading = ({ totalAmount }) => {
  return (
    <div className="max-w-xl mx-auto p-4 sm:p-6 mt-8">
      <div className="text-center space-y-6">
        {/* Processing Icon */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-green-200 border-t-green-900 rounded-full animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 bg-green-900 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Processing Text */}
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-green-900">Processing Your Order</h2>
          <p className="text-gray-600">Please wait while we confirm your order...</p>
        </div>

        {/* Order Details */}
        <div className="bg-green-50 p-4 rounded-xl border border-green-200">
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-green-800">
              <span>Payment Method:</span>
              <span className="font-medium">Cash on Delivery</span>
            </div>
            <div className="flex justify-between text-lg font-bold text-green-900 border-t border-green-200 pt-2">
              <span>Total Amount:</span>
              <span>₹{totalAmount}</span>
            </div>
          </div>
        </div>

        {/* Loading Steps */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-green-900 rounded-full animate-bounce"></div>
            <span className="text-sm text-gray-600">Validating order details...</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-green-700 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <span className="text-sm text-gray-600">Confirming payment method...</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <span className="text-sm text-gray-600">Generating order number...</span>
          </div>
        </div>

        {/* Notice */}
        <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
          <p className="text-xs text-blue-800">
            <strong>Note:</strong> Do not refresh or close this page. You will be redirected to the confirmation page shortly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderProcessingLoading; 