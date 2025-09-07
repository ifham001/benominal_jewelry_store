"use client"
import React, { useState } from 'react';
import CheckoutForm from './CheckoutForms';
import { useDispatch, useSelector } from 'react-redux';
import { showNotification } from '@/store/user/slices/Notification';
import PaymentMode from './PaymentMode';
import { useRouter } from 'next/navigation';
import { clearCart } from '@/store/user/slices/AddToCart-Slice';
import CheckoutLoading from '@/ui/loading/CheckoutLoading';
import OrderProcessingLoading from '@/ui/loading/OrderProcessingLoading';
const api = process.env.NEXT_PUBLIC_USER_ROUTE_URL



function Checkout() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const { totalAmount, cartItems } = useSelector((state) => state.userCart);
  const { userId,tokenId } = useSelector((state) => state.userAuth);
  const [addressId, setAddressId] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isOrderProcessing, setIsOrderProcessing] = useState(false);
  const dispatch = useDispatch();

  const addressHandler = async (userDetails) => {
    try {
      setIsLoading(true);
      const addUserDetail = await fetch(`${api}/address/${userId}`, {
        method: 'POST',
        headers: { 
            Authorization: `Bearer ${tokenId}`,
            'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: userDetails.firstName,
          lastName: userDetails.lastName,
          city: userDetails.city,
          phone: userDetails.phone,
          pincode: userDetails.pincode,
          email: userDetails.email,
          apartment: userDetails.apartment || '',
          address: userDetails.address,
        }),
      });

      const response = await addUserDetail.json();

      if (!addUserDetail.ok) {
        return dispatch(
          showNotification({
            message: response.message || 'Something went wrong, try again!',
            type: 'error',
          })
        );
      }

      if (response.success) {
        setIsLoading(false);
        setAddressId(response.addressId);
        dispatch(showNotification({ message: 'Address saved successfully', type: 'success' }));
        return setStep(2);
      }
    } catch (error) {
      
      return dispatch(showNotification({ message: 'Something went wrong', type: 'error' }));
    } finally {
      setIsLoading(false);
    }
  };

  const orderHandler = async (paymentMode) => {
    try {
      setIsOrderProcessing(true);
      const placeOrder = await fetch(`${api}/orders/${userId}`, {
        method: 'POST',
        headers: { 
            Authorization: `Bearer ${tokenId}`,
            'Content-Type': 'application/json'
         },
        body: JSON.stringify({
          addressId,
          totalAmount,
          cartItems,
          paymentMethod: "cod",
        }),
      });

      const response = await placeOrder.json();

      if (!placeOrder.ok) {
        return dispatch(
          showNotification({
            message: response.message || 'Something went wrong',
            type: 'error',
          })
        );
      }

      if (response.success) {
        router.push(`/user/${userId}/order-confirmation/${response.orderNumber}`);
        dispatch(showNotification({ message: 'Order placed successfully!', type: 'success' }));
        dispatch(clearCart());
        // Optionally clear cart here
      }
    } catch (error) {
      return dispatch(showNotification({ message: 'Something went wrong', type: 'error' }));
    } finally {
      setIsOrderProcessing(false);
    }
  };

  if(isLoading){
    return <CheckoutLoading />
  }

  if(isOrderProcessing){
    return <OrderProcessingLoading totalAmount={totalAmount} />
  }

  return (
    <div className="min-h-screen flex justify-center items-start py-10">
      <div className="w-full max-w-2xl overflow-hidden relative">
        <div
          className="flex w-[200%] transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${(step - 1) * 50}%)` }}
        >
          {/* Step 1: Form */}
          <div className="w-1/2 px-4">
            <CheckoutForm onContinue={addressHandler} />
          </div>

          {/* Step 2: Payment */}
          <div className="w-1/2 px-4">
            <PaymentMode totalAmount={totalAmount} orderHandler={orderHandler} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
