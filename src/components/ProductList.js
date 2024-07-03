import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

function ProductList() {
  const { filteredProducts, isLoading, error } = useSelector((state) => state.products);

  if (isLoading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {filteredProducts.map((product, index) => (
        <div key={product.id} className="animate-fadeIn" style={{animationDelay: `${index * 0.1}s`}}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;