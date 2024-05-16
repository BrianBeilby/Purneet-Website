// components/Navbar.tsx
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`transition-transform duration-300 ease-in-out ${
        scrolling ? 'fixed bg-orange-100 shadow-lg py-2 transform -translate-y-0' : 'absolute bg-transparent py-4 transform translate-y-5'
      }`}
      style={{ top: 0, zIndex: 1000, width: '100%' }}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className={`text-xl font-bold ${scrolling ? 'text-black' : 'text-white'}`}>Logo</div>
        <div className="space-x-4">
          <a href="#home" className={`hover:text-gray-700 ${scrolling ? 'text-black' : 'text-white'}`}>Home</a>
          <a href="#about" className={`hover:text-gray-700 ${scrolling ? 'text-black' : 'text-white'}`}>About</a>
          <a href="#contact" className={`hover:text-gray-700 ${scrolling ? 'text-black' : 'text-white'}`}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
