import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-black/50 rounded-lg shadow-md overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl h-full flex flex-col border border-gray-700">
        <div className="relative pb-2/3">
          <img src={product.image} alt={product.name} className="absolute h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" />
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-red-600 transition-colors duration-300">{product.name}</h3>
          <p className="text-red-500 font-bold mb-2 text-xl">${product.price.toFixed(2)}</p>
          <p className="text-sm text-gray-500 line-clamp-3 flex-grow">{product.description}</p>
          <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;