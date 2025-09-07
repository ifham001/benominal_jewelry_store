"use client"
import { useState } from 'react';

export default function PaymentMode({orderHandler,totalAmount }) {
  const [selectedMethod, setSelectedMethod] = useState('cod');

  return (
    <div className="max-w-xl mx-auto p-4 sm:p-6  mt-8">
      <h2 className="text-xl font-bold text-[#1B4332] mb-4">Payment Method</h2>

      <div className="space-y-4">
        <label
          className={`flex items-center justify-between border rounded-full px-6 py-4 w-full cursor-pointer transition ${
            selectedMethod === 'cod'
              ? 'border-[#1B4332] bg-[#1B4332]/5'
              : 'border-gray-300'
          }`}
        >
          <span className="text-[#1B4332] font-medium text-base">
            Cash on Delivery (COD)
          </span>
          <input
            type="radio"
            name="paymentMethod"
            value="cod"
            checked
            readOnly
            className="accent-[#1B4332] scale-125"
          />
        </label>

        <label
          className="flex items-center justify-between border border-gray-300 rounded-full px-6 py-4 w-full opacity-50 cursor-not-allowed"
        >
          <span className="text-gray-500 font-medium text-base">
            UPI (Coming Soon)
          </span>
          <input
            type="radio"
            disabled
            className="accent-gray-400 scale-125"
          />
        </label>

        <label
          className="flex items-center justify-between border border-gray-300 rounded-full px-6 py-4 w-full opacity-50 cursor-not-allowed"
        >
          <span className="text-gray-500 font-medium text-base">
            Card (Coming Soon)
          </span>
          <input
            type="radio"
            disabled
            className="accent-gray-400 scale-125"
          />
        </label>
      </div>

      <div className="mt-6 p-4 bg-[#1B4332]/5 rounded-xl border border-[#1B4332]/30">
        <h3 className="text-lg font-semibold text-[#1B4332] mb-2">Order Summary</h3>
        <div className="flex justify-between text-sm text-[#1B4332]">
          <span>Subtotal:</span>
          <span>₹{totalAmount}</span>
        </div>
        <div className="flex justify-between text-sm text-[#1B4332]">
          <span>Shipping:</span>
          <span>₹0</span>
        </div>
        <div className="flex justify-between font-bold text-[#1B4332] mt-2 border-t pt-2">
          <span>Total:</span>
          <span>₹{totalAmount}</span>
        </div>
      </div>

      <button
        onClick={orderHandler}
        className="mt-6 w-full bg-[#1B4332] hover:bg-[#163828] text-white py-3 px-6 rounded-full transition duration-200"
      >
        Pay ₹{totalAmount} on Delivery
      </button>
    </div>
  );
}
