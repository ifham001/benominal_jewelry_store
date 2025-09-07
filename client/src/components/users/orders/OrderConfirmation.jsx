'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

export default function OrderConfirmation({orderNumber}) {
  const router = useRouter();
  const {userId} = useSelector(state=>state.userAuth)

  return (
    <div className="min-h-screen  flex items-center justify-center py-10 px-4">
      <div className="shadow-lg rounded-xl p-8 max-w-xl w-full text-center">
        <div className="text-[#1B4332] text-4xl font-bold mb-4">🎉 Thank You!</div>
        <p className="text-[#1B4332] mb-6 text-lg">
          Your order has been placed successfully. We’ll notify you when it ships.
        </p>

        {/* Order Summary */}
        <div className="border border-[#1B4332]/30 rounded-xl p-6 bg-[#1B4332]/5 text-left mb-6">
          <h3 className="text-lg font-semibold text-[#1B4332] mb-2">Order Summary</h3>
          <div className="flex justify-between text-sm text-[#1B4332]">
            <span>Order ID:</span>
            <span>{orderNumber}</span>
          </div>
          <div className="flex justify-between text-sm text-[#1B4332]">
            <span>Payment Mode:</span>
            <span>Cash on Delivery</span>
          </div>
          <div className="flex justify-between text-sm text-[#1B4332]">
            <span>Total Amount:</span>
            <span>₹999</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => router.push("/")}
            className="bg-[#1B4332] hover:bg-[#163828] text-white px-6 py-2 rounded-full transition duration-200"
          >
            Go to Homepage
          </button>
          <button
            onClick={() => router.push(`/user/${userId}/orders`)}
            className="border border-[#1B4332] text-[#1B4332] hover:bg-[#1B4332]/10 px-6 py-2 rounded-full transition duration-200"
          >
            View My Orders
          </button>
        </div>
      </div>
    </div>
  );
}
