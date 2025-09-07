'use client';
import AllOrdersPage from '@/components/pages/AllOrdersPage'
import React from 'react'
import UserRouteProtector from '@/components/users/route-protector/UserRouteProtector'


function page() {
  return (
    <><UserRouteProtector>
      <AllOrdersPage/>
    </UserRouteProtector></>
  )
}

export default page