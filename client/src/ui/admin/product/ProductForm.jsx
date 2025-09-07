'use client';
import { useState } from 'react';
import ImageUploadManager from '../image/ImageUploadManger';
import { useDispatch } from 'react-redux';
import { showNotification } from '@/store/user/slices/Notification';

export default function ProductForm({ onSaveImages, productData, }) {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [color, setColor] = useState('');
  const [category, setCategory] = useState('');
  const [images, setImages] = useState([]);
  const [stocksQuantity, setStocksQuantity] = useState('1');

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !price || !description || !color || !category || !stocksQuantity) {
      return dispatch(showNotification({
        message: 'Please fill all fields and upload at least one image.',
        type: 'error',
      }));
    }

    if (title.length < 3 || title.length > 25) {
      return dispatch(showNotification({
        message: 'Title must be between 3 and 18 characters.',
        type: 'error',
      }));
    }

    if (description.length < 50 ) {
      return dispatch(showNotification({
        message: 'Description must be between 50 and 100 characters.',
        type: 'error',
      }));
    }

    if (price <= 0) {
      return dispatch(showNotification({
        message: 'Price must be a positive number.',
        type: 'error',
      }));
    }

    const stockQtyNum = parseInt(stocksQuantity);
    if (stockQtyNum < 1 || stockQtyNum > 20) {
      return dispatch(showNotification({
        message: 'Stock quantity must be between 1 and 20.',
        type: 'error',
      }));
    }

    const formData = {
      title,
      price,
      description,
      color,
      category,
      stocksQuantity: stockQtyNum,
    };

    productData(formData);
    // setTitle('');
    // setPrice('');
    // setDescription('');
    // setColor('');
    // setCategory('');
    // setStocksQuantity('1');
    
    // dispatch(showNotification({
    //   message: 'Product details saved successfully!',
    //   type: 'success',
    // }));
    //  formReset(e.target.reset())
    //   // Reset the form fields
    };

  const onSaveImage = () => {
   
    onSaveImages(images);
  };

  return (
    <>
      <form 
        onSubmit={handleSubmit}
        className="w-full max-w-lg mx-auto bg-white p-4 rounded-xl shadow-sm flex flex-col gap-4"
      >
        <h2 className="text-xl font-semibold text-center text-green-900">Add New Product</h2>

        {/* Title */}
        <input
          type="text"
          placeholder="Product Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full"
        />

        {/* Price */}
        <input
          type="number"
          placeholder="Price (in ₹)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full"
        />

        {/* Stock Quantity */}
        <div className="flex items-center gap-2">
          <label htmlFor="stockQuantity" className="text-sm font-medium">Stock Qty:</label>
          <input
            id="stockQuantity"
            type="number"
            min="1"
            max="20"
            value={stocksQuantity}
            onChange={(e) => setStocksQuantity(e.target.value)}
            className="w-20 border border-gray-300 rounded-md px-2 py-1 text-sm"
            required
          />
        </div>

        {/* Category Selector */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full"
        >
          <option value="">Select Category</option>
          {['rings', 'bracelets', 'necklaces', 'earrings'].map((cat) => (
            <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
          ))}
        </select>

        {/* Description */}
        <textarea
          placeholder="Product Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          required
          className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full"
        />

        {/* Color Selector */}
        <div className="flex flex-wrap gap-4">
          {['Gold', 'Silver', 'Rose Gold'].map((option) => (
            <label key={option} className="flex items-center gap-2 cursor-pointer text-sm">
              <input
                type="radio"
                name="color"
                value={option.toLowerCase()}
                checked={color === option.toLowerCase()}
                onChange={() => setColor(option.toLowerCase())}
                required
              />
              <span>{option}</span>
            </label>
          ))}
        </div>

        {/* Image Upload Section */}
        <ImageUploadManager 
          onSave={onSaveImage}
          images={images}
          setImages={setImages}
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-green-900 text-white py-2 px-4 rounded-full text-sm hover:bg-green-800 mt-4"
        >
          Add Product
        </button>
      </form>
    </>
  );
}
