'use client';
import AddNewProduct from '@/components/admin/AddNewProduct'
import ProtectedRoute from '@/components/admin/ProtectedRouteWrapper'
import Sidebar from '@/components/admin/SideBar'
import React from 'react'

function page() {
  return (
    <>
    <ProtectedRoute>
      <div className='flex'>
        <Sidebar/>
        <AddNewProduct />
        
      </div>
      
    </ProtectedRoute>
        
        
    
    
    
    </>
  )
}

export default page