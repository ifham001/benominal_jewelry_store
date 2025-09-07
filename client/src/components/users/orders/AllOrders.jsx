'use client';
import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { showNotification } from '@/store/user/slices/Notification';
const api = process.env.NEXT_PUBLIC_USER_ROUTE_URL


export default function ShowAllOrders() {
  const { userId, tokenId } = useSelector((state) => state.userAuth);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  // Detect hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Fetch orders only on client
  useEffect(() => {
    if (!tokenId) return;

    const fetchOrders = async () => {
      try {
        const response = await fetch(`${api}/orders/${userId}`,{
            headers:{Authorization: `Bearer ${tokenId}`,}
        });
        const data = await response.json();
     
        setOrders(data.orders || []);
      } catch (error) {
        return dispatch(showNotification({message:'Failed to fetch orders',type:'error'}))
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [userId, tokenId]);

  // Prevent rendering until after hydration
  if (!isClient) return null;

  if (!tokenId) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-[#1B4332] font-medium text-lg">Please login to view your orders.</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-[#1B4332] font-medium text-lg">Loading your orders...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-[#1B4332] mb-8 text-center">📦 My Orders</h1>

      {orders.length === 0 ? (
        <div className="text-center text-[#1B4332]">
          <p className="text-lg">You haven't placed any orders yet.</p>
          <button
            onClick={() => router.push('/')}
            className="mt-6 bg-[#1B4332] hover:bg-[#163828] text-white px-6 py-2 rounded-full transition"
          >
            Shop Now
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order._id}
              className="border border-[#1B4332]/30 bg-[#1B4332]/5 p-6 rounded-xl shadow-sm"
            >
              <div className="flex justify-between items-center mb-2 text-[#1B4332] font-semibold">
                <span>Order ID: #{order._id.slice(0, 8).toUpperCase()}</span>
                <span>Status: {order.orderStatus || 'Processing'}</span>
              </div>
              <div className="text-sm text-[#1B4332] grid grid-cols-2 gap-2">
                <div>Date: {new Date(order.createdAt).toLocaleDateString()}</div>
                <div>Payment Mode: {order.paymentMode || 'N/A'}</div>
                <div>Total: ₹{order.totalAmount || 0}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
