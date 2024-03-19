import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { FaHeart } from 'react-icons/fa';


const Navbar = () => {
  const boxShadowStyle = {
    boxShadow: '0 8px 12px -2px rgba(0, 0, 0, 0.2), 0 4px 8px -4px rgba(0, 0, 0, 0.12)',
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="shadow-2xl" style={boxShadowStyle}>
      <div className="flex justify-between gap-32 px-20 py-2 z-10 text-sm font-bold items-center" onMouseLeave={() => setIsOpen(false)}>
        <div> 
          <Link to="http://localhost:2000/">
            <img src="/assets/images/jipmer-mbbs.jpg" alt="" className="h-12" loading="lazy" />
          </Link>
        </div>

        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/stories">Our Stories</Link>

        <div className="flex items-center">
          <Link to="/login">
            <button className="rounded-full px-4 py-2 bg-yellow-400 text-sm font-medium text-black-700 transform hover:scale-110 transition-transform duration-200">              
              DONATE ❤
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
