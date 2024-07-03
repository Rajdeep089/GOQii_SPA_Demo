import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setFilteredProducts } from '../redux/slices/productSlice';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFilteredProducts(searchTerm));
  }, [searchTerm, dispatch]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="w-full max-w-md">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
        className="w-full px-4 py-2 border bg-transparent focus:scale-105 hover:scale-110 text-white border-red-500 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 transition-all duration-300"
      />
    </div>
  );
}

export default SearchBar;