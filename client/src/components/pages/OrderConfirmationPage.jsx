'use client';
import OrderConfirmation from '@/components/users/orders/OrderConfirmation'
import React from 'react'




function OrderConfirmationPage({orderNumber}) {
  return (
   <> <OrderConfirmation orderNumber={orderNumber}/> </>
  )
}

export default OrderConfirmationPage