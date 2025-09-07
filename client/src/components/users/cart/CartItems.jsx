'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import {
  decreaseQuantityThunk,
  increaseQuantityThunk,
  removeItemThunk,
  showCartItemsThunks,
} from '@/store/user/thunks/userCartThunk';
import { showconfirmationNotification } from '@/store/user/slices/ConfirmNotification';
import CartPageLoading from '@/ui/loading/CartPageLoading';
import Button from '@/ui/button/Button';

export default function CartSummaryPage() {
  const dispatch = useDispatch();
  const router = useRouter();

  const { userId, tokenId } = useSelector((state) => state.userAuth);
  const notificationConfirmation = useSelector(
    (state) => state.confirmNotification.response
  );
  const { cartItems, totalAmount } = useSelector((state) => state.userCart);

  const [loading, setLoading] = useState(true);
  const [idToDelete, setIdToDelete] = useState(null);

  useEffect(() => {
    dispatch(showCartItemsThunks(userId, tokenId)).then(() => setLoading(false));
  }, [userId]);

  useEffect(() => {
    const deleteItem = () => {
      if (notificationConfirmation && idToDelete) {
        dispatch(removeItemThunk(userId, idToDelete, setLoading, tokenId));
        setIdToDelete(null);
      }
    };
    deleteItem();
  }, [notificationConfirmation, idToDelete, dispatch, userId]);

  const handleIncrease = (cartItemId) => {
    dispatch(increaseQuantityThunk(userId, cartItemId, setLoading, tokenId));
  };

  const handleDecrease = (cartItemId) => {
    dispatch(decreaseQuantityThunk(userId, cartItemId, setLoading, tokenId));
  };

  const handleDelete = (id) => {
    dispatch(
      showconfirmationNotification({
        title: 'Are you sure?',
        message: 'Do you want to remove this item?',
      })
    );
    setIdToDelete(id);
  };

  if (loading) return <CartPageLoading />;

  const hasOutOfStock = cartItems.some(
    (item) => item.stockQuantity < item.quantity
  );

  return (
    <div className="min-h-screen py-10 flex justify-center items-start bg-[#F8F9FA]">
      <div className="max-w-3xl w-full bg-white shadow-xl rounded-xl p-6">
        <h2 className="text-2xl font-bold text-[#1B4332] mb-6">
          Your Cart Summary
        </h2>

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center gap-4 py-10">
            <RemoveShoppingCartIcon />
            <h3 className="text-xl font-semibold text-[#1B4332]">
              Your cart is empty
            </h3>
            <p className="text-[#1B4332]/70 max-w-xs">
              Looks like you haven’t added anything yet. Let’s find your
              favorite jewelry!
            </p>
            <Button
              onClick={() => router.push('/collection')}
              className="mt-2"
            >
              Explore Products
            </Button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="space-y-4 max-h-[320px] overflow-y-auto pr-1">
              {cartItems.map((item) => {
                const isOutOfStock = item.stockQuantity < item.quantity;

                return (
                  <div
                    key={item._id}
                    className={`flex gap-3 bg-white rounded-lg border ${
                      isOutOfStock ? 'border-red-400' : 'border-[#1B4332]/20'
                    } shadow p-3 sm:p-4 transition hover:shadow-md`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-md border border-gray-100"
                    />

                    <div className="flex flex-col justify-between w-full">
                      <h3 className="text-[#1B4332] text-base sm:text-lg font-medium sm:font-semibold break-words max-w-[180px] sm:max-w-none leading-snug">
                        {item.title}
                      </h3>

                      {isOutOfStock ? (
                        <p className="text-sm mt-2 text-red-500 font-semibold">
                          Out of Stock
                        </p>
                      ) : (
                        <div className="flex items-center gap-2 mt-2">
                          <Button
                            onClick={() => handleDecrease(item._id)}
                            size="small"
                            className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-md p-0 min-w-0"
                          >
                            <RemoveIcon fontSize="small" />
                          </Button>
                          <span className="text-[#1B4332] bg-gray-100 px-2 rounded text-sm sm:text-base w-8 text-center">
                            {item.quantity}
                          </span>
                          <Button
                            onClick={() => handleIncrease(item._id)}
                            size="small"
                            className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-md p-0 min-w-0"
                          >
                            <AddIcon fontSize="small" />
                          </Button>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col justify-between items-end text-right gap-1">
                      <div>
                        <p className="text-sm text-[#1B4332]/80">
                          ₹{item.price} × {item.quantity}
                        </p>
                        <p className="text-base font-semibold text-[#1B4332]">
                          ₹{item.price * item.quantity}
                        </p>
                      </div>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="text-xs text-red-600 flex items-center gap-1"
                      >
                        <DeleteIcon fontSize="small" />
                        Remove
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Total & Checkout */}
            <div className="mt-8 border-t pt-4 border-gray-200">
              <div className="flex justify-between items-center text-[#1B4332] text-lg font-bold">
                <span>Total Amount:</span>
                <span>₹{totalAmount}</span>
              </div>
            </div>

            <Button
              onClick={() => router.push(`/user/${userId}/checkout`)}
              disabled={hasOutOfStock}
              className="mt-6 w-full"
              size="large"
            >
              {hasOutOfStock
                ? 'Resolve Out of Stock Items'
                : 'Proceed to Checkout'}
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
