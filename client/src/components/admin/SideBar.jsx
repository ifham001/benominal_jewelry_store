"use client"
import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddBoxIcon from '@mui/icons-material/AddBox';
import EditIcon from '@mui/icons-material/Edit';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { signOut } from '@/store/admin/slices/AdminAuth';

const Sidebar = () => {
  const dispatch = useDispatch()
  const logOutHandler = () => {
    dispatch(signOut())
    // localStorage.removeItem("adminToken");
    window.location.href = "/admin";
  };
  return (
    <div className="w-64 h-screen bg-[#1B4332] text-white   p-5">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
      <ul className="space-y-3">

        <Link href={"/admin/dashboard"}>
        <li className="flex items-center gap-3 p-2 rounded hover:bg-gray-800 cursor-pointer">
          <DashboardIcon /> <span>Dashboard</span>
        </li>
        </Link>

        <Link href={"/admin/manage-orders"}>
        <li className="flex items-center gap-3 p-2 rounded hover:bg-gray-800 cursor-pointer">
          <ShoppingCartIcon /> <span>Manage Orders</span>
        </li>
        </Link>

        <Link href={"/admin/add-product"}>
        <li className="flex items-center gap-3 p-2 rounded hover:bg-gray-800 cursor-pointer">
          <AddBoxIcon /> <span>Add Product</span>
        </li>
        </Link>

        <Link href={"/admin/manage-products"}>
        <li className="flex items-center gap-3 p-2 rounded hover:bg-gray-800 cursor-pointer">
          <EditIcon /> <span>Manage Products</span>
        </li>
        </Link>
        {/* <Link href={"/admin/edit-stock"}> */}
        <li onClick={logOutHandler} className="flex items-center gap-3 p-2 rounded hover:bg-gray-800 cursor-pointer">
           <span>Log Out</span>
        </li>
        {/* </Link> */}
        

        

       
      </ul>
    </div>
  );
};

export default Sidebar;
