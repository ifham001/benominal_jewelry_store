'use client';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { showNotification } from '@/store/user/slices/Notification';
import { isAuthenticated } from '@/store/user/slices/UserAuth-Slice';
import { addToCartThunk } from '@/store/user/thunks/userCartThunk';
import { useRouter } from 'next/navigation';

import ProductMainPage from '@/ui/product/ProductMainPage';
import ProductDetailLoading from '@/ui/loading/ProductDetailLoading';
const url = process.env.NEXT_PUBLIC_USER_ROUTE_URL


function ProductPage({ productId }) {
  const dispatch = useDispatch();
  const { tokenId, userId } = useSelector((state) => state.userAuth);

  const [loading, setLoading] = useState(true);
  const [productData, setProductData] = useState(null);
  const router = useRouter()
  useEffect(() => {
    const fetchProduct = async () => {
    
      setLoading(true);
      try {
        const response = await fetch(`${url}/product/${productId}`);
        const data = await response.json();
        if (!response.ok) {
          setLoading(false)
          return dispatch(showNotification({messgae:'Failed to fetch',type:"error"}));
        }
       
        setProductData(data.product);
        setLoading(false)
      } catch (error) {
        setLoading(false)
      return  dispatch(
          showNotification({
            type: 'error',
            message: 'Failed to fetch product data. Please try again later.',
          })
        );
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [dispatch, productId]);

  const addToCart = (productId, quantity) => {
    if (!tokenId) {
      return dispatch(isAuthenticated({ message: 'Login First' }));
    }
    dispatch(addToCartThunk(userId, productId, quantity,setLoading,tokenId));

   
  };

  const buyNow =async (productId,quantity) => {
    
    if (!tokenId) {
      return dispatch(isAuthenticated({ message: 'Login First' }));
   }
   await dispatch(addToCartThunk(userId, productId, quantity,setLoading,tokenId));
   router.push(`/user/${userId}/cart`)
    // Add buy logic if needed
  };

  if (loading || !productData) return <ProductDetailLoading />;

  return (
    <ProductMainPage
      addToCart={addToCart}
      buyNow={buyNow}
      price={productData.price}
      title={productData.title}
      description={productData.description}
      images={productData.images}
      stocksQuantity={productData.stocksQuantity}
      productId={productData._id}
    />
  );
}

export default ProductPage;
