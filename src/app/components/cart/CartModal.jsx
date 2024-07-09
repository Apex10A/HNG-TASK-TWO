import React from 'react';
import Image from 'next/image';
import CartImage from "../../../assets/Images/CartImage.png";
import Link from 'next/link';
import MobileCart from "../../../assets/Images/MobileCart.png";
import CloseIcon from "../../../assets/SVG/Close.jsx";

const CartModal = ({ onClose }) => {
  // Dummy data for product information (replace with actual dynamic data if needed)
  const product = {
    name: "MEDIX 5.5 Body Moisturizer",
    description: "Glycolic and Lactic Acid Body Moisturizer",
    price: 15000,
    imageUrl: CartImage,
    quantity: 1,
  };

  const handleModalClick = (e) => {
    // Prevent closing modal when clicking inside the modal content
    e.stopPropagation();
  };

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
          <p className='text-center text-sm mb-2 text-gray-700'>Product added to cart successfully!</p>
          <p className='text-center text-sm text-red-600 font-bold'>Please sign in for proper tracking of your product.</p>
        </div>

        <div className='md:flex items-center justify-center '>
          <div className='md:w-1/3 md:mr-6'>
            <Image src={product.imageUrl} alt={product.name} className='rounded-lg hidden md:flex' width={200} height={200} />
            <Image src={MobileCart} alt="Mobile Cart Image" className=" mx-auto md:hidden flex" />
            
          </div>
          <div className='md:flex-1 mt-3 md:mt-0'>
            <h1 className='text-xl mb-2'>{product.name}</h1>
            <p className='text-sm text-gray-600 mb-4'>{product.description}</p>
            <div className='flex items-center md:justify-between justify-center gap-5 mb-4'>
              <button className='border-[1.2px] border-[#ffb6c1] rounded-3xl px-4 py-1'>- | {product.quantity} | +</button>
              <p className='text-sm'>SubTotal: <span className='text-red-600 font-bold'>#{product.price}</span></p>
            </div>
          </div>
        </div>

        <div className='border-t border-gray-300 pt-4'>
          <div className='flex justify-between items-center mt-6'>
            <p className='text-sm font-medium'>Cart Total</p>
            <div className='w-1/4 h-[0.5px] bg-gray-300'></div>
          </div>
          <div className='flex justify-between items-center mt-4'>
            <p className='text-sm'>SubTotal</p>
            <p className='text-sm'>#{product.price}</p>
          </div>
          <div className='flex justify-between items-center mt-4'>
            <p className='text-sm'>Order Summary</p>
            <p className='text-sm'>Dropdown icon</p>
          </div>
        </div>

        <div className='flex justify-between mt-8'>
          <button className=' border-[0.2px] border-[#ffcfd7] bg-transparent text-[#ffcfd7] px-4 py-2 rounded-3xl text-sm'>Continue shopping</button>
          <Link href='/order'>
          <button className=' bg-[#ffb6c1] text-[#332427] px-4 py-2 rounded-3xl text-sm'>Proceed to checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
