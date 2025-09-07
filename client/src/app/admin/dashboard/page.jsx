'use client';
import AdminDashboard from "@/components/admin/AdminDashboard"
import ProtectedRoute from "@/components/admin/ProtectedRouteWrapper"
import Sidebar from "@/components/admin/SideBar"



function page() {
  return (
    <>
  <ProtectedRoute>
      <div className='flex'>
        <Sidebar/>
       <AdminDashboard/>
        
      </div>
      
    </ProtectedRoute>
        
    </>
  )
}

export default page