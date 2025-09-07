'use client';
import ManageProducts from '@/components/admin/ManageProducts'
import ProtectedRoute from '@/components/admin/ProtectedRouteWrapper'
import Sidebar from '@/components/admin/SideBar'
import React from 'react'


function page() {
  return (
    <ProtectedRoute>
      <div className='flex '>
        <Sidebar/>
        <ManageProducts />
        
      </div>
      
    </ProtectedRoute>
        
  )
}

export default page