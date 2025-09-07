'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@/ui/button/Button';
import { useDispatch } from 'react-redux';
import { showNotification } from '@/store/user/slices/Notification';

const ProductSubDisplayAdmin = ({productId, title, price, stock, color, image, onDelete, onAddStock }) => {
  const dispatch = useDispatch();
  const [showStockInput, setShowStockInput] = useState(false);
  const [stockInputValue, setStockInputValue] = useState('');

  const originalPrice = Number(price) + 350;

  const getColorClass = (colorName) => {
    switch (colorName.toLowerCase()) {
      case 'gold':
        return 'bg-[#FFD700]';
      case 'silver':
        return 'bg-[#C0C0C0]';
      case 'rose gold':
        return 'bg-[#B76E79]';
      default:
        return 'bg-gray-300';
    }
  };

  const colorBadgeClass = getColorClass(color);

  const toggleStockInput = () => {
    setShowStockInput((prev) => !prev);
  };

  const handleStockInputChange = (e) => {
    setStockInputValue(e.target.value);
  };

  const handleStockUpdate = () => {
    if (!stockInputValue || Number(stockInputValue) < 1) {
      return dispatch(
        showNotification({
          message: 'First add stock quantity',
          type: 'error',
        })
      );
    } 
    // console.log( typeof Number(  stockInputValue))
    onAddStock({stocksQuantity:Number(stockInputValue),productId})

    // Stock update logic placeholder
    // dispatch(
    //   showNotification({
    //     message: `Added ${stockInputValue} items to stock`,
    //     type: 'success',
    //   })
    // );

    setShowStockInput(false);
    setStockInputValue('');
  };
  const onDeleteProduct =e=>{
    onDelete(productId)
  }

  return (
    <div className="w-[230px] h-100 sm:w-[270px] md:w-[300px] rounded-2xl border border-[#006039] shadow-md p-4 flex flex-col gap-3">
      {/* Product Image */}
      <div className="w-full aspect-square relative overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 270px"
        />
      </div>

      {/* Product Title */}
      <div className="text-[#1B4332] text-lg font-bold truncate">{title}</div>

      {/* Price & Stock Info */}
      <div className="flex flex-col gap-1 text-sm">
        <div className="flex items-center justify-between font-medium">
          <span className="text-[#1B4332]">Price: ₹{price}/-</span>
          <span className="line-through text-gray-400 text-sm">₹{originalPrice}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="capitalize text-gray-600">{color}</span>
            <div className={`w-4 h-4 rounded-full ${colorBadgeClass}`} />
          </div>
          <span className="text-gray-700 font-medium">Stock: {stock}</span>
        </div>
      </div>

      {/* Admin Action Buttons */}
      <div className="flex justify-between items-center gap-3 mt-2">
        <button
          onClick={toggleStockInput}
          className="flex items-center gap-1 px-3 py-1 border border-[#006039] text-[#FFC300] rounded-full text-sm hover:bg-blue-50 transition"
        >
          <EditIcon fontSize="small" />
          Add Stocks Qty
        </button>

        <button
          onClick={onDeleteProduct}
          className="flex items-center gap-1 px-3 py-1 border border-red-600 text-red-600 rounded-full text-sm hover:bg-red-50 transition"
        >
          <DeleteIcon fontSize="small" />
          Delete
        </button>
      </div>

      {/* Add Stock Input Section */}
      {showStockInput && (
        <div className="flex justify-between items-center gap-2 mt-2">
          <input
            type="number"
            min={1}
            max={20}
            step={1}
            value={stockInputValue}
            onChange={handleStockInputChange}
            className="rounded-xl border-2 border-[#006039] p-2 w-20"
            placeholder="Qty"
          />
          <Button onClick={handleStockUpdate} className="h-10">
            Add Stock
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductSubDisplayAdmin;
