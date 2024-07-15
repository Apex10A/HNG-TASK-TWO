'use client';
import React, { useState } from 'react';
import Header from '../header/Header';
import ProductItems from './ProductItems';
import ProductListTwo from './ProductListTwo';
import ProductThree from './ProductThree';
import Footer from '../footer/Footer';
import Black from '../blackGirl/Black';
import { motion } from 'framer-motion';

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Product = () => {
  const [activeButton, setActiveButton] = useState('');
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState('');

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const handleAddToCart = (product) => {
    setCart(prevCart => [...prevCart, product]);
    setNotification(`${product.name} successfully added to cart`);
    setTimeout(() => {
      setNotification('');
    }, 3000); // Hide notification after 3 seconds
  };

  return (
    <div className='bg-[#fbf4f5] min-h-screen'>
      <div>
        <Header cartCount={cart.length} />
      </div>
      <div className='px-5 md:px-10 py-8'>
        <motion.h1
          className='text-center text-xl md:text-[40px] md:leading-[45px] md:max-w-[65%] mx-auto'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        >
          Your one stop shop to all skincare products both local and international brand
        </motion.h1>
       
        <div className='pt-5 flex items-center sm:gap-3 gap-1 w-full justify-center'>
          {['Body Care', 'Face Care', 'Private Hygiene', 'Scents'].map((category, index) => (
            <motion.button
              key={category}
              className={`${
                activeButton === category ? 'bg-[#FFC0CB]' : 'border-[#FFB6C1] border-[1.3px]'
              } mx-2 px-4 py-2 text-xs md:text-sm text-[#373737] rounded-lg Login w-full md:w-auto`}
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
              onClick={() => handleButtonClick(category)}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>
      <div>
        <ProductItems activeButton={activeButton} handleAddToCart={handleAddToCart} />
        <ProductListTwo handleAddToCart={handleAddToCart} />
        <Black />
        <ProductThree handleAddToCart={handleAddToCart} />
        <Footer />
      </div>
      {notification && (
        <div className="fixed bottom-5 right-5 bg-green-500 text-white p-3 rounded-lg shadow-lg z-50">
          {notification}
        </div>
      )}
    </div>
  );
};

export default Product;
