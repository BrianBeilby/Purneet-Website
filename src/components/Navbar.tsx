import React, { useState, useEffect } from 'react';
import { useActiveSectionContext } from '@/context/active-section-context';
import { links } from '@/lib/data';
import Logo from "../../public/Final_Logo.png";
import Image from "next/image";

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
    <div className={`text-xl font-bold ${scrolling ? 'text-black' : 'text-white'}`}>
        <Image
            src={Logo}
            alt="Podcast Logo"
            width="192"
            height="192"
            quality="95"
            priority={true}
            className="h-20 w-20 rounded-full object-cover border-[0.15rem] border-orange-700 shadow-xl"
          />
    </div>
      <div className="space-x-4">
        {links.map((section) => (
              <a 
                key={section.name} 
                href={section.hash} 
                className={`${activeSection === section.name ? 'bg-orange-500 px-2 py-2 transition rounded-full text-black' : ''} ${scrolling ? 'text-black' : 'text-white hover:text-gray-700'}`}   
                onClick={() => {
                  setActiveSection(section.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {section.name}
              </a>
            ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
