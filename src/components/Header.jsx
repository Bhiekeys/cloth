/** @format */

import React from 'react';
import { BsBag } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';
const Header = () => {
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont">
      <div className="max-w-screen-xl h-full mx-auto flex justify-between items-center">
        <h2 className="line-through text-[30px] font-bold">KimIbadi</h2>
        <div className="flex items-center gap-8">
          <ul className="hidden lg:flex items-center gap-8">
            <li
              className="text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 
            decoration-[1px] cursor-pointer duration-300">
              Home
            </li>
            <li
              className="text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 
            decoration-[1px] cursor-pointer duration-300">
              Pages
            </li>
            <li
              className="text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 
            decoration-[1px] cursor-pointer duration-300">
              Shop
            </li>
            <li
              className="text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 
            decoration-[1px] cursor-pointer duration-300">
              Element
            </li>
            <li
              className="text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 
            decoration-[1px] cursor-pointer duration-300">
              Blog
            </li>
          </ul>
          <div className="relative">
            <BsBag className="text-[23px]" />
            <span
              className="absolute w-6 top-2 left-0 text-sm flex items-center
            justify-center font-semibold ">
              0
            </span>
          </div>
          <FaShoppingCart className='text-[23px]'/>
        </div>
      </div>
    </div>
  );
};

export default Header;
