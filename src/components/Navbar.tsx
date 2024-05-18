import React, { useState, useEffect } from 'react';
import { useActiveSectionContext } from '@/context/active-section-context';
import Link from 'next/link';
import { links } from '@/lib/data';

interface Link {
  name: string;
  hash: string; 
}

const Navbar: React.FC = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

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
    <a 
      href="#home" 
      className={`${activeSection === "Home" ? 'bg-orange-500 px-2 py-2 transition rounded-full  text-black' : ''} ${scrolling ? 'text-black' : 'text-white hover:text-gray-700'}`}   
      onClick={() => {
        setActiveSection("Home");
        setTimeOfLastClick(Date.now());
      }}
    >
      Home
    </a>
          <a href="#about" 
          className={`${activeSection === "About" ? 'bg-orange-500 px-2 py-2 transition rounded-full  text-black' : ''} ${scrolling ? 'text-black' : 'text-white hover:text-gray-700'}`}   
          onClick={() => {
                    setActiveSection("About");
                    setTimeOfLastClick(Date.now());
                  }}>About</a>
          <a href="#contact" 
        className={`${activeSection === "Contact" ? 'bg-orange-500 px-2 py-2 transition rounded-full  text-black' : ''} ${scrolling ? 'text-black' : 'text-white hover:text-gray-700'}`}   
        onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
