




import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars as Menu, FaTimes as X } from 'react-icons/fa';
import { FaRegCommentDots } from "react-icons/fa";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">DevMeetup</div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Navigation Menu */}
        <nav className="hidden md:flex space-x-4">
          <Link to="/ " className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/Event1 " className="text-gray-700 hover:text-blue-600">Event 1</Link>
          <Link to="/event2" className="text-gray-700 hover:text-blue-600">Event 2</Link>
          <Link to="/event3" className="text-gray-700 hover:text-blue-600">Event 3</Link>  
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md py-4 px-6 space-y-2">
          <Link to="/" className="block text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/event1" className="block text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Event 1</Link>
          <Link to="/event2" className="block text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Event 2</Link>
          <Link to="/event3" className="block text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Event 3</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
