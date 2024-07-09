import React from 'react'
import Header from '../header/Header'
import ProductItems from './ProductItems'
import ProductListTwo from './ProductListTwo'
import ProductThree from './ProduuctThree'
// import BlackGirl from '../blackGirl/blackGirl'
import Footer from '../footer/Footer'


const Product = () => {
  return (
    <div className='bg-[#fbf4f5] min-h-screen'>
        <div>
         <Header/>
        </div>
      <div className='px-10 py-8'>
        <h1 className='text-center text-xl md:text-[40px] md:leading-[45px] md:max-w-[65%] mx-auto'>Your one stop shop to all skincare products both local and international brand</h1>
        <div className='pt-5 flex items-center sm:gap-3 gap-1 w-full justify-center'>
            <button className='bg-[#FFB6C1] px-1 md:px-4 py-2 text-xs md:text-sm text-[#373737] rounded-lg Login shadow-lg w-full md:w-auto'>Body Care</button>
            <button className='border-[#FFB6C1] border-[1.3px] px-1 md:px-4 py-2 md:text-sm text-xs text-[#373737] rounded-lg Login w-full md:w-auto'>Face care</button>
            <button className='border-[#FFB6C1] border-[1.3px] px-1 md:px-4 py-2 text-xs md:text-sm text-[#373737] rounded-lg Login w-full md:w-auto'>Private Hygiene</button>
            <button className='border-[#FFB6C1] border-[1.3px] px-1 md:px-4 py-2 text-xs md:text-sm text-[#373737] rounded-lg Login w-full md:w-auto'>Scents</button>
        </div>
      </div>
      <div>
        <ProductItems/>
        <ProductListTwo/>
        {/* <BlackGirl/> */}
        <ProductThree/>
        <Footer/>
      </div>
    </div>
  )
}

export default Product