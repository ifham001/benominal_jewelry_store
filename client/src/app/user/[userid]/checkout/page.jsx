'use client';
import CheckoutPage from '@/components/pages/CheckoutPage'
import React from 'react'
import UserRouteProtector from '@/components/users/route-protector/UserRouteProtector'

function page() {
  return (
    <>
        <UserRouteProtector>
        <CheckoutPage />
        </UserRouteProtector>
    
    </>
  )
}

export default page