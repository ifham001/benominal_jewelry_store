'use client';
import React, { useState } from 'react';
import Checkout from '@/components/users/checkout/Checkout';
import PaymentMode from '@/components/users/checkout/PaymentMode';

function CheckoutPage() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen flex justify-center items-start py-10">
      <div className="w-full max-w-2xl overflow-hidden relative">
        <div
          className="flex w-[200%] transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${(step - 1) * 50}%)` }}
        >
          {/* Step 1: Form */}
          <div className="w-1/2 px-4">
            <Checkout onContinue={() => setStep(2)} />
          </div>

          {/* Step 2: Payment */}
          <div className="w-1/2 px-4">
            <PaymentMode />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
