"use client";
import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  ChevronUp,
  Trash2,
  Loader2,
} from "lucide-react";
import Button from '@/ui/button/Button';

function Card({ children, className = "" }) {
  return <div className={`rounded-xl shadow border bg-white ${className}`}>{children}</div>;
}

function CardContent({ children, className = "" }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}

const statusOptions = ["pending", "shipped", "delivered", "cancelled"];
const topFilters = ["all", "today"];

const api = process.env.NEXT_PUBLIC_ADMIN_ROUTE_URL;




export default function ManageOrders() {
  const [orders, setOrders] = useState([]);
  const [expanded, setExpanded] = useState({});
  const [loading, setLoading] = useState(false);
  const [topFilter, setTopFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const {token}= useSelector(state=>state.adminAuth)


  const fetchOrders = async () => {
    try {
      const res = await fetch(`${api}/all-orders`, {
        headers:{
          Authorization: `Bearer ${token}`,
        }
      });
      const data = await res.json();
      setOrders(data);
    } catch (err) {
      console.error("Error fetching orders:", err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const deleteOrder = async (orderId) => {
    setLoading(true);
    try {
     const res= await fetch(`${api}/delete-order/${orderId}`, {
        method: "DELETE",
        headers:{
            Authorization: `Bearer ${token}`,
        }
      });
      const data = await res.json();
      if(!res.ok){
        return dispatch(showNotification({message:data.message||'Failed to delete order',type:'error'}))
      }
      if(data.success){
        setOrders((prev) => prev.filter((order) => order._id !== orderId));
       return dispatch(showNotification({message:data.message,type:'success'}))
      }
    
    } catch (err) {
     return dispatch(showNotification({message:'Failed to delete order',type:'error'}))
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (orderId, newStatus) => {
    try {
      const res = await fetch(`${api}/orders/status-update/${orderId}`, {
        method: "POST",
        headers: { 
            Authorization: `Bearer ${token}`,
        "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      const updated = await res.json();
      if(!res.ok){
        return dispatch(showNotification({message:updated.message||'Failed to update status',type:'error'}))
      }

      if(updated.success){
        setOrders((prev) =>
          prev.map((order) => (order._id === orderId ? updated : order))
        );
       return dispatch(showNotification({message:updated.message,type:'success'}))
      }

      
    } catch (err) {
      return dispatch(showNotification({message:'Failed to update status',type:'error'}))
    }
  };

  const isToday = (dateString) => {
    const today = new Date();
    const date = new Date(dateString);
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const filteredOrders = orders.filter((order) => {
    const matchesTop = topFilter === "all" || isToday(order.createdAt);
    const matchesStatus = statusFilter === "all" || order.status === statusFilter;
    return matchesTop && matchesStatus;
  });

  return (
    <div className="p-4 md:p-6 lg:p-10 bg-[#F9FAF9] min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-bold text-[#1B4332] mb-6">
        Manage Orders
      </h1>

      {/* FILTERS */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <div className="flex gap-2">
          {topFilters.map((filter) => (
            <Button
              key={filter}
              onClick={() => setTopFilter(filter)}
              variant={topFilter === filter ? "primary" : "secondary"}
              size="small"
            >
              {filter === "all" ? "All Orders" : "Today's Orders"}
            </Button>
          ))}
        </div>

        <div className="ml-auto">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-[#EAF2EF] text-[#1B4332] border border-[#B5D9C6] rounded px-2 py-1"
          >
            <option value="all">All Status</option>
            {statusOptions.map((status) => (
              <option key={status} value={status}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* ORDERS */}
      {filteredOrders.length === 0 ? (
        <p className="text-gray-500">No orders found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filteredOrders.map((order) => (
            <Card key={order._id}>
              <CardContent className="flex flex-col gap-2">
                <div className="flex justify-between items-center flex-wrap">
                  <div>
                    <p className="text-sm text-gray-500">
                      Order #{order.orderNumber}
                    </p>
                    <h2 className="text-lg font-semibold text-[#1B4332]">
                      ₹{order.totalAmount.toLocaleString()} • {order.paymentMethod.toUpperCase()}
                    </h2>
                    <p className="text-xs text-gray-400">
                      {new Date(order.createdAt).toLocaleString()}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 mt-2 sm:mt-0">
                    <select
                      value={order.status}
                      onChange={(e) => updateStatus(order._id, e.target.value)}
                      className="bg-[#EAF2EF] text-[#1B4332] border border-[#B5D9C6] rounded px-2 py-1"
                    >
                      {statusOptions.map((status) => (
                        <option key={status} value={status}>
                          {status.charAt(0).toUpperCase() + status.slice(1)}
                        </option>
                      ))}
                    </select>

                    <Button
                      onClick={() => toggleExpand(order._id)}
                      variant="ghost"
                      size="small"
                      className="text-[#006039] p-2 min-w-0"
                    >
                      {expanded[order._id] ? <ChevronUp /> : <ChevronDown />}
                    </Button>

                    <Button
                      onClick={() => deleteOrder(order._id)}
                      disabled={loading}
                      variant="danger"
                      size="small"
                      className="p-2 min-w-0"
                    >
                      {loading ? <Loader2 className="animate-spin" /> : <Trash2 />}
                    </Button>
                  </div>
                </div>

                {expanded[order._id] && (
                  <div className="mt-3 bg-[#F3F6F4] p-3 rounded text-sm text-[#1B4332]">
                    <h3 className="font-semibold mb-2">Shipping Address</h3>
                    <p>{`${order.address?.firstName} ${order.address?.lastName}`}</p>
                    <p>{order.address?.apartment}</p>
                    <p>
                      {order.address?.city}, {order.address?.address} –{" "}
                      {order.address?.pincode}
                    </p>
                    <p>Phone: {order.address?.phone}</p>

                    <hr className="my-3" />

                    <h3 className="font-semibold mb-2">Cart Items</h3>
                    {order.cartItems?.map((item, index) => (
                      <div key={index} className="flex justify-between">
                        <span>{item.productId}</span>
                        <span>
                          {item.quantity} × ₹{item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
