import OrderConfirmationPage from '@/components/pages/OrderConfirmationPage'
import React from 'react'
import UserRouteProtector from '@/components/users/route-protector/UserRouteProtector'


async function page ({params}) {
  const {orderNumber} = await params
  return (
    <>
      <UserRouteProtector>
        <OrderConfirmationPage orderNumber = {orderNumber}/>
      </UserRouteProtector>
    </>
  )
}

export default page