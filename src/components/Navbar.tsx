// components/Navbar.tsx
import React, { useState, useEffect } from 'react';
import { useActiveSectionContext } from '@/context/active-section-context';
import Link from 'next/link';
import { links } from '@/lib/data';

interface Link {
  name: string;
  hash: string; // Assuming hash is a part of each link in `links`
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
          <a href="#home" className={`hover:text-gray-700 ${scrolling ? 'text-black' : 'text-white'} `}   
          onClick={() => {
                    setActiveSection("Home");
                    setTimeOfLastClick(Date.now());
                  }}>Home</a>
          <a href="#about" className={`hover:text-gray-700 ${scrolling ? 'text-black' : 'text-white'}`} 
          onClick={() => {
                    setActiveSection("About");
                    setTimeOfLastClick(Date.now());
                  }}>About</a>
          <a href="#contact" className={`hover:text-gray-700 ${scrolling ? 'text-black' : 'text-white'}`}
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}>Contact</a>
        </div>
        <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
          <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
            {links.map((link) => (
              <li className="h-3/4 flex items-center justify-center relative" key={link.hash}>
                <Link
                  href={link.hash}
                  className={`flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300 ${
                    activeSection === link.name ? 'text-gray-950 dark:text-gray-200' : ''
                  }`}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link.name}
                  {link.name === activeSection && (
                    <span className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"></span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
