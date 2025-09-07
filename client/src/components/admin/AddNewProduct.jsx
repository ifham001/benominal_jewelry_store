"use client";

import { showNotification } from '@/store/user/slices/Notification';
import ProductForm from '@/ui/admin/product/ProductForm';
import ProductDetailLoading from '@/ui/loading/ProductDetailLoading';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const api = process.env.NEXT_PUBLIC_ADMIN_ROUTE_URL;

function AddNewProduct() {
  const dispatch = useDispatch();
  const [uploadedImages, setUploadedImages] = useState([]);
  const [loading, setLoading] = useState( false);

  const {token}= useSelector(state=>state.adminAuth)


// const imagesUrlAlreadyExists = JSON.parse(localStorage.getItem('images'))
  const addNewProduct = async (productData) => {
    if (uploadedImages.length === 0) {
      setLoading(false)
      return  dispatch(showNotification({
        message: 'Please upload at least one image before submitting.',
        type: 'error',
      }));
      
    }

    const productDataWithImages = {
      ...productData,
      images: uploadedImages,
    };
    
    try {
      setLoading(true);
      const response = await fetch(`${api}/add-product`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productDataWithImages),
      });

      const responseData = await response.json();
      console.log(responseData)

      if (!response.ok) {
        return dispatch(showNotification({message:responseData.message || 'Failed to add product',type :'error'}));
      }

      dispatch(showNotification({
        message: 'Product added successfully!',
        type: 'success',
      }));

       // Clear state
     
    } catch (error) {
      dispatch(showNotification({
        message: error.message || 'Error adding product.',
        type: 'error',
      }));
    } finally {
      setLoading(false);
      setUploadedImages([]);
      localStorage.removeItem('images')
    }
  };

  const onSaveImages = async (newImages) => {
    if (uploadedImages.length > 0) {
      dispatch(showNotification({
        message: 'Images already uploaded for this product.',
        type: 'error',
      }));
      return;
    }

    const formData = new FormData();
    newImages.slice(0, 3).forEach((imageFile) => {
      formData.append('images', imageFile);
    });

    try {
      setLoading(true)
      const response = await fetch(`${api}/upload-images`, {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      

      if (!response.ok) {
        return dispatch(showNotification({message:result.message || 'Image upload failed',type:'error'}));
      }
      if(result.urls.length>0){
        dispatch(showNotification({
          message: 'Images uploaded successfully!',
          type: 'success',
        }));

       return  setUploadedImages(result.urls || []) && localStorage.setItem('iamges',JSON.stringify(result.urls))
      }
      

      
    } catch (error) {
      dispatch(showNotification({
        message: error.message || 'Image upload error.',
        type: 'error',
      }));
    }
    finally{
      setLoading(false)
    }
  };
  if(loading) return <ProductDetailLoading/>

  return (
    <div>
      <ProductForm
        productData={addNewProduct}
        onSaveImages={onSaveImages}
        loading={loading}
        uploadedImages={uploadedImages}
      />
    </div>
  );
}

export default AddNewProduct;