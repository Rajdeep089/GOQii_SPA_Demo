import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentProduct } from '../redux/slices/productSlice';

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { products, currentProduct } = useSelector((state) => state.products);
  const [isImageZoomed, setIsImageZoomed] = useState(false);

  useEffect(() => {
    const product = products.find(p => p.id === id);
    if (product) {
      dispatch(setCurrentProduct(product));
    }
  }, [dispatch, id, products]);

  if (!currentProduct) return <div className="text-center text-2xl mt-8">Loading...</div>;

  return (
    <div className="bg-black/50 z-50 rounded-lg shadow-lg p-6 animate-fadeIn">
      <Link to="/" className="text-red-500 hover:text-red-700 transition-colors duration-300 mb-4 inline-block">&larr; Back to List</Link>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 mb-6 lg:mb-0">
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <img 
              src={currentProduct.image} 
              alt={currentProduct.name} 
              className={`w-full h-auto object-cover transition-transform duration-300 ${isImageZoomed ? 'scale-125' : 'scale-100'}`}
              onMouseEnter={() => setIsImageZoomed(true)}
              onMouseLeave={() => setIsImageZoomed(false)}
            />
          </div>
        </div>
        <div className="lg:w-1/2 lg:pl-8">
          <h2 className="text-3xl font-bold mb-4 text-white animate-slideInRight">{currentProduct.name}</h2>
          <p className="text-2xl text-red-600 mb-4 animate-slideInRight" style={{animationDelay: '0.1s'}}>${currentProduct.price.toFixed(2)}</p>
          <p className="text-gray-700 mb-4 animate-slideInRight" style={{animationDelay: '0.2s'}}>{currentProduct.description}</p>
          <p className="text-sm text-gray-500 mb-4 animate-slideInRight" style={{animationDelay: '0.3s'}}>Category: {currentProduct.category}</p>
          <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transform hover:scale-105 animate-slideInRight" style={{animationDelay: '0.4s'}}>
            Add to Cart
          </button>
          <div className="mt-8 animate-slideInRight" style={{animationDelay: '0.5s'}}>
            <h3 className="text-xl font-semibold mb-4 text-white">User Reviews</h3>
            <p className="text-gray-600">No reviews yet.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;