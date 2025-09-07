'use client'
import React, { useEffect, useState } from "react";

import {
  BarChart3,
  Package,
  Users2,
  ShoppingCart,
  Clock,
  CalendarDays,
} from "lucide-react";
import Button from "@/ui/button/Button";
import { useSelector } from "react-redux";
function Card({ children, className = "" }) {
  return (
    <div className={`rounded-xl shadow-md border bg-white ${className}`}>
      {children}
    </div>
  );
}

function CardContent({ children, className = "" }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}

export default function AdminDashboard() {
  const {token} = useSelector(state=>state.adminAuth)
  const [dashboardData, setDashboardData] = useState({
    totalProducts: 0,
    totalUsers: 0,
    allTimeOrders: 0,
    allTimeRevenue: 0,
    todaysOrders: 0,
    pendingOrders: 0
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        setIsLoading(true)
        const response = await fetch(`${process.env.NEXT_PUBLIC_ADMIN_ROUTE_URL}/dashboard`,{
          headers:{
            Authorization: `Bearer ${token}`,
        }
        })
        const result = await response.json()
        if(response.ok && result.success){
          setDashboardData(result.data)
        } else {
          console.log('Error fetching dashboard data:', result)
        }
      }
      catch(error){
        console.log('Error:', error)
      } finally {
        setIsLoading(false)
      }
    }
    if(token) {
      fetchData()
    }
  },[token])
  return (
    <div className="p-4 md:p-6 lg:p-10 bg-[#F9FAF9] min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-bold text-[#1B4332] mb-6">
        Admin Dashboard
      </h1>

      {/* STATS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card className="bg-[#EAF2EF]">
          <CardContent className="flex items-center gap-4">
            <Package className="text-[#006039]" />
            <div>
              <p className="text-sm text-gray-600">Total Products</p>
              <h2 className="text-xl font-semibold text-[#1B4332]">
                {isLoading ? "..." : dashboardData.totalProducts.toLocaleString()}
              </h2>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#EAF2EF]">
          <CardContent className="flex items-center gap-4">
            <Users2 className="text-[#006039]" />
            <div>
              <p className="text-sm text-gray-600">Total Users</p>
              <h2 className="text-xl font-semibold text-[#1B4332]">
                {isLoading ? "..." : dashboardData.totalUsers.toLocaleString()}
              </h2>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#EAF2EF]">
          <CardContent className="flex items-center gap-4">
            <ShoppingCart className="text-[#006039]" />
            <div>
              <p className="text-sm text-gray-600">All-Time Orders</p>
              <h2 className="text-xl font-semibold text-[#1B4332]">
                {isLoading ? "..." : dashboardData.allTimeOrders.toLocaleString()}
              </h2>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#EAF2EF]">
          <CardContent className="flex items-center gap-4">
            <BarChart3 className="text-[#006039]" />
            <div>
              <p className="text-sm text-gray-600">All-Time Revenue</p>
              <h2 className="text-xl font-semibold text-[#1B4332]">
                {isLoading ? "..." : `₹${dashboardData.allTimeRevenue.toLocaleString()}`}
              </h2>
            </div>
          </CardContent>
        </Card>

        {/* TODAY'S ORDERS */}
        <Card className="bg-[#EAF2EF]">
          <CardContent className="flex items-center gap-4">
            <CalendarDays className="text-[#006039]" />
            <div>
              <p className="text-sm text-gray-600">Today's Orders</p>
              <h2 className="text-xl font-semibold text-[#1B4332]">
                {isLoading ? "..." : dashboardData.todaysOrders.toLocaleString()}
              </h2>
            </div>
          </CardContent>
        </Card>

        {/* PENDING ORDERS */}
        <Card className="bg-[#EAF2EF]">
          <CardContent className="flex items-center gap-4">
            <Clock className="text-[#006039]" />
            <div>
              <p className="text-sm text-gray-600">Pending Orders</p>
              <h2 className="text-xl font-semibold text-[#1B4332]">
                {isLoading ? "..." : dashboardData.pendingOrders.toLocaleString()}
              </h2>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* QUICK ACTIONS */}
      <div className="bg-white p-4 rounded-xl shadow-sm border">
        <h2 className="text-lg font-semibold text-[#1B4332] mb-3">
          Quick Actions
        </h2>
        <div className="flex flex-wrap gap-4">
          <Button className="bg-[#1B4332] text-[#A37E2C] hover:bg-[#163326]">
            Add Product
          </Button>
          <Button className="bg-[#1B4332] text-[#A37E2C] hover:bg-[#163326]">
            Manage Orders
          </Button>
          <Button className="bg-[#1B4332] text-[#A37E2C] hover:bg-[#163326]">
            View Users
          </Button>
          <Button className="bg-[#1B4332] text-[#A37E2C] hover:bg-[#163326]">
            Update Banner
          </Button>
        </div>
      </div>
    </div>
  );
}
