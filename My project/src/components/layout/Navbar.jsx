import React from 'react';
import { Link } from 'react-router-dom';
import ThemeSwitcher from '../ui/ThemeSwitcher';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 dark:bg-blue-800 text-white p-4 shadow-lg transition-colors">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold hover:text-blue-200 transition-colors">
          My App
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-200 transition-colors">Home</Link>
          <Link to="/tasks" className="hover:text-blue-200 transition-colors">Tasks</Link>
          <Link to="/posts" className="hover:text-blue-200 transition-colors">Posts</Link>
          <Link to="/about" className="hover:text-blue-200 transition-colors">About</Link>
        </div>
        <div className="flex items-center space-x-4">
          <ThemeSwitcher />
          {/* Mobile menu button */}
          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;