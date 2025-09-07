'use client';

import React, { useEffect, useState } from 'react';
import ProductSubDisplay from './ProductSubDisplay';
import Link from 'next/link';

const url = process.env.NEXT_PUBLIC_USER_ROUTE_URL


function ProductSliderGrid() {
  const [showProducts, setShowProducts] = useState([]);

  const fetchBestProducts = async () => {
    try {
      const res = await fetch(`${url}/products/best`);
      const data = await res.json();
      if (data && data.bestProducts) {
        
        setShowProducts(data.bestProducts);
      }
    } catch (error) {
     return console.error("Failed to fetch best products:", error);
    }
  };

  useEffect(() => {
    fetchBestProducts();
  }, []); // Runs only once on mount

  return (
    <div className="overflow-x-auto custom-scrollbar mt-8">
      <div className="flex gap-4 px-4 w-max">
        {showProducts.map((product, index) => (
            
        <Link key={index} href={`/collection/${product.category}/${product._id}`} >
          <ProductSubDisplay
          
          key={index}
          title={product.title}
          price={product.price}
          description={product.description}
          image={product.images[0]}
          color={product.color}
        />
        
        
        
        </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductSliderGrid;
