"use client"
import CartIcon from '@/assets/SVG/CartIcon';
import LoveIcon from '@/assets/SVG/LoveIcon';
import Menu from '@/assets/SVG/Menu';
import SearchIcon from '@/assets/SVG/SearchIcon';
import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='py-8'>
      <div
        className=' text-white md:max-w-[85%] flex items-center justify-between mx-auto md:rounded-[45px] py-2 px-10 header'
      >
        <div className='md:flex hidden items-center list-none gap-4'>
          <li className='text-[#332427]'>Home</li>
          <li className='text-[#332427]'>Products</li>
          <li className='text-[#332427]'>Contacts</li>
        </div>
        <div className='flex md:hidden'>
          <Menu onClick={toggleMenu} className='cursor-pointer' />
        </div>
        <div className='brand'>
          <p className='text-[#332427]'>
            <span>Skin</span>
            <span className='ml-1 text-[#FFB6C1]'>Hub</span>
          </p>
        </div>
        <div className='flex items-center gap-4'>
          <div className='md:flex hidden'>
            <SearchIcon />
          </div>
          <div>
            <LoveIcon />
          </div>
          <div>
            <CartIcon />
          </div>
          <div className='hidden md:flex ml-8'>
            <button className='bg-[#FFB6C1] rounded-3xl border-[0.2px] border-[#DE8C99] px-5 py-2 text-black font-bold text-sm Login'>Login</button>
          </div>
        </div>
      </div>

      <div className='relative flex md:hidden w-[90%] mx-auto mt-5'>
        <input
          type='search'
          name=''
          id=''
          className='border-2 rounded-3xl py-2 pl-16 pr-5 w-full search-input'
          placeholder='Search'
        />
        <div className='absolute left-7 top-1/2 transform -translate-y-1/2 search-icon'>
          <SearchIcon />
        </div>
      </div>

      {menuOpen && (
        <div className='absolute top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center pt-20'>
          <li className='text-[#332427] py-2'>Home</li>
          <li className='text-[#332427] py-2'>Products</li>
          <li className='text-[#332427] py-2'>Contacts</li>
          <button className='bg-[#FFB6C1] rounded-3xl border-[0.2px] border-[#DE8C99] px-5 py-2 text-black font-bold text-sm mt-5 Login'>Login</button>
        </div>
      )}
    </div>
  );
};

export default Header;
