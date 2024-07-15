import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useCartStore from './CarStore.js';
import ArrowPointDown from '@/assets/SVG/ArrowPointDown';
import CloseIcon from "../../../assets/SVG/Close.jsx";

const CartModal = ({ onClose }) => {
  const { cart, removeFromCart } = useCartStore();
  const handleModalClick = (e) => {
    // Prevent closing modal when clicking inside the modal content
    e.stopPropagation();
  };

  const total = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  return (
    <div
      className='absolute md:fixed md:top-0 md:left-0 w-full h-full bg-black bg-opacity-50 z-99 flex items-center justify-center'
      onClick={onClose}
    >
      
      <div
        className='bg-[#fefafb] md:w-2/3 lg:w-1/2 xl:w-2/5 md:px-5 px-10 h-full md:h-auto md:py-8 py-10 relative '
        onClick={handleModalClick}
        style={{ zIndex: 999 }}
      >
        {/* Close Modal Icon */}
        <button
          className='absolute top-4 right-4'
          onClick={onClose}
        >
          <CloseIcon />
        </button>

        <div className='mb-8'>
          <p className='text-center text-sm mb-2 text-gray-700'>Products in your cart:</p>
        </div>
       

        {cart.length === 0 ? (
          <p className='text-center'>Your cart is empty.</p>
        ) : (
          cart.map((product, index) => (
            <div key={index} className='md:flex items-center justify-center mb-4'>
              <div className='md:w-1/3 md:mr-6'>
                <Image src={`https://api.timbu.cloud/images/${product?.photos[0]?.url}`} alt={product.name} className='rounded-lg hidden md:flex' width={200} height={200} />
                <Image src={`https://api.timbu.cloud/images/${product?.photos[0]?.url}`} alt={product.name} className='mx-auto md:hidden flex' width={200} height={200} />
              </div>
              <div className='md:flex-1 mt-3 md:mt-0'>
                <h1 className='text-xl mb-2'>{product?.name}</h1>
                <p className='text-sm text-gray-600 mb-4'>{product.overview}</p>
                <div className='flex items-center justify-between gap-5 mb-4'>
                  <div className="border-[1.2px] border-[#ffb6c1] bg-[#fef3f5] rounded-3xl flex justify-between items-center px-4 py-2">
                    <button className="px-2">-</button>
                    <span className="px-4">{product.quantity || 1}</span>
                    <button className="px-2">+</button>
                  </div>
                  <p className='text-sm'>SubTotal: <span className='font-bold'>#{product.price * (product.quantity || 1)}</span></p>
                </div>
              </div>
            </div>
          ))
        )}

        <div className='border-gray-300 pt-2'>
          <div className='flex justify-between items-center mt-2 mb-2'>
            <p className='text-sm font-medium'>Cart Total</p>
          </div>
          <div className='w-full h-[1px] bg-black'></div>
          <div className='flex justify-between items-center mt-4 bg-[#fee1e5] px-3 py-3 border-b-black'>
            <p className='text-sm'>SubTotal</p>
            <p className='text-sm'>#{total}</p>
          </div>
          <div className='flex justify-between items-center pt-4 bg-[#fff] shadow-md py-2 px-3'>
            <p className='text-sm'>Order Summary</p>
            <ArrowPointDown />
          </div>
        </div>

        <div className='flex justify-between mt-8'>
          <button className='border-[0.2px] border-[#ffcfd7] bg-transparent text-[#faafba] px-4 py-2 rounded-3xl text-sm' onClick={onClose}>Continue shopping</button>
          <Link href='/order'>
            <button className='bg-[#faafba] text-[#332427] px-10 md:px-20 py-2 rounded-3xl text-sm'>Proceed to checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
