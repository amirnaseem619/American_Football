import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.webp';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 border-b-2 border-[#FFD700] animate-slide-down">
      
      {/* Top Row for Large Screens */}
      <div className="hidden md:flex justify-between items-center px-52 py-2 text-sm bg-[#180987cc]">
        {/* Left Side Links */}
        <div className="flex items-center gap-x-4">
          <Link to="/get-tickets" className="text-white hover:text-yellow-500">Get Tickets</Link>
          <span className="text-white">|</span>
          <Link to="/shop" className="text-white hover:text-yellow-500">Shop</Link>
        </div>

        {/* Right Side Links */}
        <div className="flex items-center gap-x-4">
          <div className="flex items-center gap-x-2">
            <span className="text-red-500 font-bold">Live</span>
            <div className="overflow-hidden whitespace-nowrap">
              <span className="inline-block animate-marquee text-white">Live updates - Event happening now!</span>
            </div>
          </div>
          <Link to="/signup" className="text-white hover:text-yellow-500">Sign Up</Link>
          <span className="text-white">/</span>
          <Link to="/signin" className="text-white hover:text-yellow-500">Sign In</Link>
        </div>
      </div>

      {/* Main Navbar for Large Screens */}
      <nav className="hidden md:flex justify-center items-center px-6 py-4 gap-x-8 bg-[#18098780] relative">
        {/* Left Links */}
        <Link to="/" className="text-lg font-bold text-white hover:text-yellow-500">Home</Link>
        <Link to="/AboutTheClub" className="text-lg font-bold text-white hover:text-yellow-500">About The Club</Link>
        <Link to="/" className="text-lg font-bold text-white hover:text-yellow-500">Media</Link>

        {/* Centered Logo */}
        <Link to="/" className="mx-4 relative z-20">
          <img
            src={Logo}
            alt="Logo"
            className="h-32 w-auto -mb-16" // Adjust the negative margin for overlap
          />
        </Link>

        {/* Right Links */}
        <Link to="/" className="text-lg font-bold text-white hover:text-yellow-500">Tickets</Link>
        <Link to="/news" className="text-white font-bold hover:text-gray-300">News</Link>
        <Link to="/TheTeam" className="text-white font-bold hover:text-gray-300">The Team</Link>
        <Link to="/contact" className="text-white font-bold hover:text-gray-300">Contact</Link>
      </nav>

      {/* Mobile Navbar */}
      <div className="md:hidden flex items-center justify-between px-6 py-2 bg-[#18098780] border-b-2 border-[#FFD700]">
        {/* Left Side - Live Text */}
        <div className="text-red-500 font-bold">Live</div>

        {/* Centered Logo */}
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-16 w-auto" />
        </Link>

        {/* Right Side - Hamburger Icon */}
        <button onClick={toggleMenu} className="text-white text-2xl">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Slide-in Menu for Mobile */}
      <div
        className={`fixed inset-0 bg-[#150e4c] text-white z-50 transform ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
        onClick={closeMenu}
      >
        {/* Close Button */}
        <button
          onClick={closeMenu}
          className="absolute top-6 right-6 text-sm text-white"
        >
          CLOSE
        </button>

        {/* Sign In / Sign Up Links in One Row */}
        <div className="flex items-center justify-end space-x-1 text-sm font-bold mt-32 pr-6"> {/* Added margin-top */}
          <Link to="/" className="hover:text-yellow-500" onClick={closeMenu}>Sign Up</Link>
          <span className="text-white">/</span>
          <Link to="/" className="hover:text-yellow-500" onClick={closeMenu}>Sign In</Link>
        </div>

        {/* Menu Links */}
        <div className="flex flex-col items-end  text-lg font-bold mt-12 pr-6">
          <Link to="/" className="hover:text-yellow-500" onClick={closeMenu}>Home</Link>
          <Link to="/AboutTheClub" className="hover:text-yellow-500" onClick={closeMenu}>About Us</Link>
          <Link to="/TheTeam" className="hover:text-yellow-500" onClick={closeMenu}>The Team</Link>
          
          <Link to="/news" className="hover:text-gray-300" onClick={closeMenu}>News</Link>
          <Link to="/contacts" className="hover:text-gray-300" onClick={closeMenu}>Contact</Link>
        </div>

        {/* Bottom Section for Get Tickets/Shop */}
        <div className="absolute bottom-8 right-6 flex  items-end space-x-2"> {/* Positioned at the bottom-right */}
          <Link to="/get-tickets" className="hover:text-yellow-500 text-[#FFD700] "  onClick={closeMenu}>Get Tickets</Link>
          <span className="text-white color-[gold]">|</span>
          <Link to="/shop" className="hover:text-yellow-500" onClick={closeMenu}>Shop</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
