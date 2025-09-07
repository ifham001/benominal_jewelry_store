import React from 'react';
import ProductSubDisplay from './ProductSubDisplay';
import Link from 'next/link';

function ProductsGrid({ products = [] }) {
  return (
    <div className="px-4 py-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {products.map((product, index) => (
          <div key={product._id || index} className="w-full flex justify-center">
            <Link
              href={`/collection/${product.category}/${product._id}`}
              className="block w-full max-w-[180px]"
            >
              <ProductSubDisplay
                id={product._id}
                title={product.title}
                price={product.price}
                description={product.description}
                image={product.images?.[0]}
                color={product.color}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsGrid;