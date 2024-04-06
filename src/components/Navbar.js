 import React, { useState } from 'react';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="w-full h-20 flex justify-between relative items-center lg:px-20 pt-5 px-2 border-b dark:border-gray-700 bg-brown-600">
      <div className="relative uppercase text-lg font-bold px-4 text-white font-serif ">
        Gravel
      </div>
        <ul
       className={`lg:absolute left-[50%] top-[50%]  lg:flex items-center justify-center gap-5 hidden text-white`}
       >
        <li className="hover:underline underline-offset-8 hover:text-gray-300 cursor-pointer">
          <a href="#">Home</a>
        </li>
        <li className="hover:underline underline-offset-8 hover:text-gray-300 cursor-pointer">
          <a href="#">About</a>
        </li>
        <li className="hover:underline underline-offset-8 hover:text-gray-300 cursor-pointer">
          <a href="#">Service</a>
        </li>
        <li className="hover:underline underline-offset-8 hover:text-gray-300 cursor-pointer">
          <a href="#">Testimonials</a>
        </li>
      </ul>
      
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide-icon AlignJustify 24 block lg:hidden hover:opacity-80 transition"
        role="button"
        onClick={toggleDropdown}
      >
        <line x1="3" x2="21" y1="6" y2="6"></line>
        <line x1="3" x2="21" y1="12" y2="12"></line>
        <line x1="3" x2="21" y1="18" y2="18"></line>
      </svg>
            {/* Mobile Dropdown */}
            {isDropdownOpen && (
        <ul className="lg:hidden absolute top-full left-0 right-0  dark:bg-gray-800 shadow-lg py-2 px-4 bg-brown-700">
          <li className="hover:text-white cursor-pointer mb-2">
            <a href="#">Home</a>
          </li>
          <li className="hover:text-white cursor-pointer mb-2">
            <a href="#">About</a>
          </li>
          <li className="hover:text-white cursor-pointer mb-2">
            <a href="#">Service</a>
          </li>
          <li className="hover:text-white cursor-pointer mb-2">
            <a href="#">Testimonials</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;