'use client';
import React from 'react'
import AddNewProduct from '@/components/admin/AddNewProduct'
import ProtectedRoute from '@/components/admin/ProtectedRouteWrapper'
import Sidebar from '@/components/admin/SideBar'
import ManageOrders from '@/components/admin/ManageOrders'

function page() {
  return (
    <ProtectedRoute>
      <div className='flex'>
        <Sidebar/>
        <ManageOrders/>
      </div>
      
    </ProtectedRoute>
         
  )
}

export default page