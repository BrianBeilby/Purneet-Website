import React, { useState, useEffect } from "react";
import { useActiveSectionContext } from "@/context/active-section-context";
import Link from "next/link";
import { links } from "@/lib/data";
import { motion, Variants } from "framer-motion";
import clsx from "clsx";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../public/Final_Logo.png";
import Image from "next/image";
import '../app/globals.css';


interface Link {
  name: string;
  hash: string;
}

const logoVariants: Variants = {
  initial: {
    rotate: 0,
  },
  hover: {
    rotate: [0, 360],
    transition: {
      duration: 3,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

const buttonVariants: Variants = {
  initial: {
    rotate: 0,
  },
  open: {
    rotate: 180,
    transition: {
      duration: 0.5,
    },
  },
  close: {
    rotate: 0,
    transition: {
      duration: 0.5,
    },
  },
  hover: {
    scale: 1.1,
  },
  tap: { scale: 0.9 },
};

const menuVariants: Variants = {
  hidden: {
    x: "100%",
  },
  visible: {
    x: 0,
  },
};

const Navbar: React.FC = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
      <nav
        className={clsx(
          "fixed left-0 right-0 w-full max-w-[90rem] px-4 flex items-center justify-between py-2 mx-auto transition-all duration-300",
          {
            "top-3": scrolling,
            "top-[0.15rem] sm:top-[1.7rem]": !scrolling,
          }
        )}
      >
        <motion.div
          initial="initial"
          whileHover="hover"
          variants={logoVariants}
        >
          <motion.a href="#"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Image
              src={Logo}
              alt="Podcast Logo"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-20 w-20 rounded-full object-cover border-[0.15rem] border-orange-700 shadow-xl hover:scale-110 active:scale-105 transition cursor-pointer"
            />
          </motion.a>
        </motion.div>

        <div className="sm:hidden flex items-center">
          <motion.button
            className="text-orange-100 p-2 rounded"
            onClick={() => setMenuOpen(!menuOpen)}
            whileHover="hover"
            whileTap="tap"
            initial="initial"
            animate={menuOpen ? "open" : "close"}
            variants={buttonVariants}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </motion.div>
          </motion.button>
        </div>

        <motion.div
          className={clsx(
            "menu-container sm:flex sm:bg-white sm:px-4 sm:py-1 sm:bg-opacity-50 sm:shadow-lg sm:shadow-black/[0.03] sm:backdrop-blur-[0.5rem] sm:rounded-full transition-all duration-300",
            {
              hidden: !menuOpen,
              "flex flex-col items-center justify-center fixed top-[7rem] left-4 right-4 w-auto z-50 bg-orange-200 bg-opacity-100 rounded-3xl p-4 sm:p-0 sm:left-auto sm:right-auto": menuOpen,
            }
          )}
          initial="hidden"
          animate={menuOpen ? "visible" : "hidden"}
          variants={menuVariants}
        >
          <ul className="flex flex-col sm:flex-row items-center justify-center gap-y-2 sm:gap-y-0 text-[0.9rem] font-medium text-gray-500 sm:gap-5">
            {links.map((link) => (
              link.name !== "Home" && (
                <motion.li
                  className="h-3/4 flex items-center justify-center relative"
                  key={link.hash}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
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
                      setMenuOpen(false);
                    }}
                  >
                    {link.name}
                    {link.name === activeSection && (
                      <motion.span
                        className="rounded-full absolute inset-0 -z-10 bg-orange-400"
                        layoutId="activeSection"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      ></motion.span>
                    )}
                  </Link>
                </motion.li>
              )
            ))}
          </ul>
        </motion.div>
      </nav>
    </header>
  );
};

export default Navbar;

