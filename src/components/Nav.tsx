import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
const Nav = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked); 
  };
  return (
    <nav className="flex flex-1 w-screen sticky z-[30] top-0 bg-black h-12 border-b border-blue-200">
      <div className="flex w-full justify-between flex-row my-auto">
        <h1>logo here</h1>
        <div className="text-white font-thin text-[16px] space-x-7 my-auto md:block hidden">
          <a
            href="/"
            className="transition duration-300 ease-in-out hover:text-blue-500"
          >
            Home
          </a>
          <a
            href="/services"
            className="transition duration-300 ease-in-out hover:text-blue-500"
          >
            Services
          </a>
          <a
            href="/about"
            className="transition duration-300 ease-in-out hover:text-blue-500"
          >
            About
          </a>
        
          <a
            href="/caseStudy"
            className="transition duration-300 ease-in-out hover:text-blue-500"
          >
            Case Study
          </a>
        </div>
        <div className="md:hidden block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-12 h-10 text-white "
            onClick={handleClick}
          >
            <path
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-width="1"
              d="M4 6h16M4 12h12M4 18h8"
            />
          </svg>
        </div>
        <div className="md:block hidden" />
      </div>
      {clicked && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden block !important"
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          exit={{ opacity: 0, x: 25 }}
        >
          <div className="w-full bg-gray-950 h-full p-4 text-white">
            <div className="flex justify-center text-[21px] items-center my-12 space-y-12 flex-col">
              <motion.div
                initial={{ x: 60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 125,
                  damping: 20,
                }}
              >
                <button onClick={handleClick}>Close</button>
              </motion.div>
              <motion.div
                initial={{ x: 60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 125,
                  damping: 20,
                  delay: 0.2,
                }}
              >
                <a href="/services">Services</a>
              </motion.div>
              <motion.div
                initial={{ x: 60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 125,
                  damping: 20,
                  delay: 0.4,
                }}
              >
                <a href="/about">About</a>
              </motion.div>
              <motion.div
                initial={{ x: 60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 125,
                  damping: 20,
                  delay: 0.8,
                }}
              >
                <a href="/caseStudy">Case Study</a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Nav;
