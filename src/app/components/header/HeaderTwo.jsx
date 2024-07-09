import React from 'react'
import CartIcon from '@/assets/SVG/CartIcon';
import LoveIcon from '@/assets/SVG/LoveIcon';
import Menu from '@/assets/SVG/Menu';
import SearchIcon from '@/assets/SVG/SearchIcon';

const HeaderTwo = () => {
  return (
    <div className='bg-[#ffe8ec] border-b-[1.5px] pt-4 pb-2 px-10 border-[#000]'>
      <div>
      <div
        className=' text-white flex items-center justify-between mx-auto py-2 px-10 '
      >
        <div className='md:flex hidden items-center list-none gap-6'>
          <li className='text-[#332427]'>Home</li>
          <li className='text-[#332427]'>Products</li>
          <li className='text-[#332427]'>Contacts</li>
        </div>
        <div className='flex md:hidden'>
          <Menu />
        </div>
        <div className='brand'>
          <p className='text-[#332427]'>
            <span>Skin</span>
            <span className='ml-1 text-[#FFB6C1]'>Hub</span>
          </p>
        </div>
        <div className='flex items-center gap-3 md:gap-4'>
          <div className=''>
            <SearchIcon />
          </div>
          <div>
            <LoveIcon />
          </div>
          <div>
            <CartIcon />
          </div>
        </div>
        </div>
      </div>
      <div className='flex items-center md:justify-center justify-between md:gap-44 mt-10'>
        <div>
            <p className='text-sm'>Body Care</p>
        </div>
        <div>
            <p className='text-sm opacity-[0.8]'>Face Care</p>
        </div>
        <div>
            <p className='text-sm opacity-[0.8]'>Private Hygiene</p>
        </div>
        <div>
            <p className='text-sm opacity-[0.8]'>Scents</p>
        </div>
      </div>
    </div>
  )
}

export default HeaderTwo
