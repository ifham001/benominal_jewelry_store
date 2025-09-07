'use client';

import React from 'react';

const CheckAuthLoading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-md w-full">
        <div className="text-center space-y-6">
          {/* Auth Icon */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-green-200 border-t-green-900 rounded-full animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 bg-green-900 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Auth Text */}
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-green-900">Checking Authentication</h2>
            <p className="text-gray-600">Please wait while we verify your credentials...</p>
          </div>

          {/* Loading Steps */}
          <div className="space-y-3">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-2 h-2 bg-green-900 rounded-full animate-bounce"></div>
              <span className="text-sm text-gray-600">Validating token...</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-2 h-2 bg-green-700 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <span className="text-sm text-gray-600">Checking permissions...</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <span className="text-sm text-gray-600">Redirecting...</span>
            </div>
          </div>

          {/* Security Note */}
          <div className="bg-green-50 p-3 rounded-lg border border-green-200">
            <p className="text-xs text-green-800">
              <strong>Secure:</strong> Your authentication is being verified through encrypted channels.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckAuthLoading; 