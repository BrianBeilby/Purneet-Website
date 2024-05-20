import React, { useState, useEffect } from "react";
import { useActiveSectionContext } from "@/context/active-section-context";
import Link from "next/link";
import { links } from "@/lib/data";
import { motion } from "framer-motion";
import clsx from "clsx";
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
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.div
        className={clsx(
          "fixed right-12 transform h-[4.5rem] min-w-[21rem] max-w-[90rem] w-auto rounded-none bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:rounded-full dark:bg-opacity-75",
          {
            "bg-transparent": !scrolling,
            "bg-orange-100": scrolling,
            "top-0": scrolling,
            "top-[-100px]": !scrolling,
          }
        )}
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{
          y: scrolling ? 0 : -100,
          x: "-50%",
          opacity: scrolling ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 380, damping: 30 }}
      ></motion.div>

      <nav
        className={clsx(
          "fixed left-1/2 transform -translate-x-1/2 w-full max-w-[90rem] px-4 flex items-center justify-between py-2 sm:py-0 transition-all duration-300",
          {
            "top-3": scrolling,
            "top-[0.15rem] sm:top-[1.7rem]": !scrolling,
          }
        )}
      >
        <div
          className={`text-xl font-bold hover:scale-110 active:scale-105 transition cursor-pointer${
            scrolling ? "text-black" : "text-white"
          }`}
        >
          <a href="#">
            <Image
              src={Logo}
              alt="Podcast Logo"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-20 w-20 rounded-full object-cover border-[0.15rem] border-orange-700 shadow-xl"
            />
          </a>
        </div>
        <ul className="flex flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-700 transition text-black",
                  {
                    "text-black": activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute top-2 h-2/3 inset-0 -z-10 dark:bg-orange-400"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
