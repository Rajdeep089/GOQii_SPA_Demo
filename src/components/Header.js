import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import SearchBar from './SearchBar';

function Header() {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="bg-black/50 shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-red-500 transition-colors duration-300 hover:text-red-600 animate-pulse">GOQii SPA Demo</Link>
          <SearchBar />
          <nav className="mt-4 lg:mt-0">
            {isAuthenticated ? (
              <>
                <span className="text-gray-300 mr-4">Welcome, {user?.username || 'Guest'}</span>
                <Link to="/dashboard" className="text-gray-300 hover:text-red-500 mr-4 transition-colors duration-300">Dashboard</Link>
                <button onClick={handleLogout} className="text-gray-300 hover:text-red-500 transition-colors duration-300">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-300 hover:text-red-500 mr-4 transition-colors duration-300">Login</Link>
                <Link to="/register" className="text-gray-300 hover:text-red-500 transition-colors duration-300">Register</Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;