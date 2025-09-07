'use client'
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import bracelets from '../../../public/collection/bracelet.jpg';
import earrings from '../../../public/collection/earing.jpg';
import necklaces from '../../../public/collection/necklace.jpg';
import rings from '../../../public/hero/hero-banner2.png';
import CollectionHeader from '@/ui/collection/CollectionHeader';
import ProductsGrid from '@/ui/product/ProductsGrid';
import SortByDropdown from '@/ui/SortByDropDown';
import { useDispatch } from 'react-redux';
import { showNotification } from '@/store/user/slices/Notification';
import ProductsLoading from '@/ui/loading/ProductsLoading';

const url = process.env.NEXT_PUBLIC_USER_ROUTE_URL

const categoryImages = {
  bracelets,
  earrings,
  necklaces,
  rings
};

export default function CategoryPage() {
  const dispatch = useDispatch();
  const params = useParams();
  const category = params?.category;

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const img = categoryImages[category];

  useEffect(() => {
    if (!category) return;
    const fetchCollection = async () => {
      try {
        const response = await fetch(`${url}/products/${category}`);
        const data = await response.json();
        console.log(data)
        if (!response.ok) {
          dispatch(showNotification({
            message: 'Failed to fetch collection. Please try again later.',
            type: 'error',
          }));
          return;
        }
        
        setProducts(data?.products || []);
      } catch (error) {
        console.log(error)
        dispatch(showNotification({
          message: 'An error occurred while fetching the collection.',
          type: 'error',
        }));
      } finally {
        setLoading(false);
      }
    };

    fetchCollection();
  }, [category, dispatch]);

  if (!img) {
    return <div className="text-center py-10">Category not found</div>;
  }

  return (
    <>
      <CollectionHeader title={category} img={img} />
      <SortByDropdown />
      {loading ? (
        <ProductsLoading/>
      ) : (
        <ProductsGrid products={products} />
      )}
    </>
  );
}
