import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Import icons for the menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-800 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">
          Car Review App
        </Link>
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex space-x-4">
            <Link to="/post" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Post</Link>
            <Link to="/create" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Create Post</Link>
            <Link to="/about" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</Link>
          </div>
          <button onClick={toggleMenu} className="md:hidden text-white">
            {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-800`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link to="/post" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Post</Link>
          <Link to="/create" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Create Post</Link>
          <Link to="/about" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
