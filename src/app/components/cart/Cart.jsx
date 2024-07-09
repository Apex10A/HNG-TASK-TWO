import React from 'react'
import Header from '../header/Header'
import Image from 'next/image'
import CartImageOne from "../../../assets/Images/CartImageOne.png"
import RetinolCartImage from "../../../assets/Images/RetinolCartImage.png"
import BronzeGoddessCartImage from "../../../assets/Images/BronzeGoddessCartImage.png"
import Footer from '../footer/Footer'
import HeaderTwo from '../header/HeaderTwo'
import Link from 'next/link'

const Cart = () => {
  return (
    <div>
        <div>
        <HeaderTwo/>
        </div>
        <div className='md:flex justify-center md:gap-10 bg-[#fbf4f5] py-10'>
            <div className=''>
            <div className='w-[90%] flex items-center justify-center mx-auto'>
                <Image src={CartImageOne} alt='' className='max-w-sm' />
            </div>

            <div className='mt-5'>
                <div className='flex items-start max-w-[80%] mx-auto'>
                    <p className='font-medium '>Related Products</p>
                </div>
            <div className='flex items-center mx-auto justify-center mt-3'>
                <div>
                <div className='max-w-[80%] mx-auto'>
                <Image src={RetinolCartImage} alt='' className=''/>
                </div>
                <div>
                    <p className='text-sm text-center pt-2'>Retinol <span className='opacity-[0.7]'>Bodycare Lotion</span></p>
                </div>
                </div>
                <div className='flex flex-col items-center justify-center mx-auto'>
                    <div className='max-w-[80%] mx-auto'>
                    <Image src={BronzeGoddessCartImage} alt='' />
                    </div>
                    <div className=''>
                        <p className='text-sm text-left pt-2'>Bronze Goddess <span className='opacity-[0.7]'>Bodycare Lotion</span></p>
                    </div>
                </div>
            </div>
            </div>
            </div>
            <div>
              <div className='pt-4'>
                <h1 className='text-2xl pb-5'>MEDIX 5.5 <span className='opacity-[0.7]'>Body Moisturizer</span></h1>
                <p className='pb-4 opacity-[0.7] text-sm'>Glycolic and Lactic Acid Body Moisturizer</p>
                <p className='font-extrabold'>#15,000</p>
              </div>
              <div className='max-w-xl py-6'>
                <p className='leading-[30px] pb-3 opacity-[0.9] text-sm'>Medix 5.5 Glycolic and Lactic Acid Body Moisturizer is dermatologist-tested and formulated to provide maximum benefits without compromising on gentleness. Perfect for all skin types, it’s your go-to solution for achieving healthier, glowing skin.
                </p>
                <div>
                    <li className='leading-[30px] pb-1 opacity-[0.9] text-sm'>Exfoliation: Glycolic acid gently removes dead skin cells, promoting cell turnover and revealing fresher, smoother skin.</li>
                    <li className='leading-[30px] pb-1 opacity-[0.9] text-sm'>Hydration: Lactic acid hydrates and softens the skin, improving texture and tone.</li>
                    <li className='leading-[30px] pb-1 opacity-[0.9] text-sm'>pH Balanced: Formulated with a pH of 5.5 to maintain your skin’s natural barrier and prevent irritation.</li>
                    <li className='leading-[30px] pb-1 opacity-[0.9] text-sm'>Anti-Aging: Reduces the appearance of fine lines, wrinkles, and hyperpigmentation for a more youthful look.</li>
                </div>
                <div className='flex items-center gap-7 py-6 w-full'>
                    <button className='border-[1.2px] border-[#ffb6c1] w-full rounded-3xl px-4 py-2'>- | 1 | +</button>
                    <Link href='/cart-modal'>
                    <button className='bg-[#ffb6c1] px-4 py-2 rounded-3xl w-full font-bold text-sm'>Add to Cart</button>
                    </Link>
                    <button className='border-[1.2px] border-[#ffb6c1] w-full py-2 px-4 rounded-3xl text-sm'>Save for Later</button>
                </div>
                <div className='bg-[#fff] px-5 py-3 mt-4'>
                    <div className='mb-3'>
                    <div className='flex items-center justify-between py-3 '>
                        <p className='text-sm'>Additional Information</p>
                        <p>+</p>
                    </div>
                    <div className='w-full h-[0.1px] bg-black opacity-[0.2]'></div>
                    </div>

                    <div className='mb-3'>
                    <div className='flex items-center justify-between py-3'>
                        <p className='text-sm'>Reviews</p>
                        <p>+</p>
                    </div>
                    <div className='w-full h-[0.1px] bg-black opacity-[0.2]'></div>
                    </div>
                    
                </div>
              </div>
            </div>
        </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Cart
