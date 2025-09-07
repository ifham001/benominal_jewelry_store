import React from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { userSignOut } from "@/store/user/slices/UserAuth-Slice";

export default function ProfileDropdown({ onClose }) {
   const {userId} = useSelector(state=>state.userAuth)
   const dispatch = useDispatch()
   const logOutHandler=e=>{
    dispatch(userSignOut())
    onClose()
   }
  return (
    <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md z-50">
      <Link
        href={`/user/${userId}/orders`}
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        onClick={onClose}
      >
        My Orders
      </Link>
      
      <Link
        href={`/user/${userId}/cart`}
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        onClick={onClose}
      >
        Cart
      </Link>
      <button
        onClick={logOutHandler}
        className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100"
      >
        Logout
      </button>
    </div>
  );
}
