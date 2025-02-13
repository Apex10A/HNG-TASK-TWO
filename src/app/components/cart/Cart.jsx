"use client"
import React, { useState } from "react";
import HeaderTwo from "../header/HeaderTwo";
import Image from "next/image";
import CartImageOne from "../../../assets/Images/CartImageOne.png";
import RetinolCartImage from "../../../assets/Images/RetinolCartImage.png";
import BronzeGoddessCartImage from "../../../assets/Images/BronzeGoddessCartImage.png";
import MobileCart from "../../../assets/Images/MobileCart.png";
import Footer from "../footer/Footer";
import CartModal from "./CartModal";
import Heart from "@/assets/SVG/Heart";
import CartIcon from "@/assets/SVG/CartIcon";

const Cart = () => {
  const [showModal, setShowModal] = useState(false);

  const handleAddToCart = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <HeaderTwo />
      <div className="md:flex justify-center md:gap-10 bg-[#fbf4f5] py-10">
        <div>
          <div className="w-[90%] flex items-center justify-center mx-auto">
            <Image src={CartImageOne} alt="Cart Image" className="max-w-sm hidden md:flex" />
            <Image src={MobileCart} alt="Mobile Cart Image" className="max-w-sm md:hidden flex" />
          </div>

          <div className="mt-5 hidden md:block">
            <div className="flex items-start max-w-[80%] mx-auto">
              <p className="font-medium">Related Products</p>
            </div>
            <div className="flex items-center mx-auto justify-center mt-3">
              <div>
                <div className="max-w-[80%] mx-auto">
                  <Image src={RetinolCartImage} alt="Retinol Cart Image" />
                </div>
                <div>
                  <p className="text-sm text-center pt-2">Retinol <span className="opacity-[0.7]">Bodycare Lotion</span></p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center mx-auto">
                <div className="max-w-[80%] mx-auto">
                  <Image src={BronzeGoddessCartImage} alt="Bronze Goddess Cart Image" />
                </div>
                <div>
                  <p className="text-sm text-left pt-2">Bronze Goddess <span className="opacity-[0.7]">Bodycare Lotion</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="pt-4 px-5">
            <h1 className="text-2xl pb-5">MEDIX 5.5 <span className="opacity-[0.7]">Body Moisturizer</span></h1>
            <p className="pb-4 opacity-[0.7] text-sm">Glycolic and Lactic Acid Body Moisturizer</p>
            <p className="font-extrabold">#15,000</p>
          </div>
          <div className="max-w-xl py-6 px-5">
            <p className="leading-[30px] pb-3 opacity-[0.9] text-sm">
              Medix 5.5 Glycolic and Lactic Acid Body Moisturizer is dermatologist-tested and formulated to provide maximum benefits without compromising on gentleness. Perfect for all skin types, it’s your go-to solution for achieving healthier, glowing skin.
            </p>
            <ul>
              <li className="leading-[30px] pb-1 opacity-[0.9] text-sm">Exfoliation: Glycolic acid gently removes dead skin cells, promoting cell turnover and revealing fresher, smoother skin.</li>
              <li className="leading-[30px] pb-1 opacity-[0.9] text-sm">Hydration: Lactic acid hydrates and softens the skin, improving texture and tone.</li>
              <li className="leading-[30px] pb-1 opacity-[0.9] text-sm">pH Balanced: Formulated with a pH of 5.5 to maintain your skin’s natural barrier and prevent irritation.</li>
              <li className="leading-[30px] pb-1 opacity-[0.9] text-sm">Anti-Aging: Reduces the appearance of fine lines, wrinkles, and hyperpigmentation for a more youthful look.</li>
            </ul>
            <div className="md:flex hidden items-center gap-7 py-6 w-full">
              <div className="border-[1.2px] border-[#ffb6c1] rounded-3xl flex justify-between items-center px-4 py-2">
                <button className="px-2">-</button>
                <span className="px-4">1</span>
                <button className="px-2">+</button>
              </div>
              <button onClick={handleAddToCart} className="bg-[#ffb6c1] px-4 py-2 rounded-3xl w-full font-bold text-sm">Add to Cart</button>
              <button className="border-[1.2px] border-[#ffb6c1] w-full py-2 px-4 rounded-3xl text-sm">Save for Later</button>
            </div>
            <div className="bg-[#fff] px-5 py-3 mt-4">
              <div className="mb-3">
                <div className="flex items-center justify-between py-3">
                  <p className="text-sm">Additional Information</p>
                  <p>+</p>
                </div>
                <div className="w-full h-[0.1px] bg-black opacity-[0.2]"></div>
              </div>
              <div className="mb-3">
                <div className="flex items-center justify-between py-3">
                  <p className="text-sm">Reviews</p>
                  <p>+</p>
                </div>
                <div className="w-full h-[0.1px] bg-black opacity-[0.2]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden py-8 bg-[#fbf4f5]">
        <div className="flex items-start max-w-[80%] mx-auto">
          <p className="font-medium max-w-[80%]">Related Products</p>
        </div>
        <div className="flex items-center mx-auto justify-center mt-3">
          <div>
            <div className="max-w-[80%] mx-auto">
              <Image src={RetinolCartImage} alt="Retinol Cart Image" />
            </div>
            <div>
              <p className="text-xs text-center pt-2">Retinol <span className="opacity-[0.7] text-xs">Bodycare Lotion</span></p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mx-auto">
            <div className="max-w-[80%] mx-auto">
              <Image src={BronzeGoddessCartImage} alt="Bronze Goddess Cart Image" />
            </div>
            <div>
              <p className="text-xs text-left pt-2">Bronze Goddess <span className="opacity-[0.7] text-xs">Bodycare Lotion</span></p>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full md:bg-black md:bg-opacity-50 z-50 flex items-center justify-center">
          <CartModal onClose={handleCloseModal} />
        </div>
      )}

      <div className="fixed bottom-0 left-0 right-0 bg-[#fbeef0] md:hidden flex items-center justify-between py-6 px-4 shadow-lg z-60 border-[0.2px] border-[#DE8C99]">
        <div className="flex w-1/4">
          <Heart className="text-[#ffb6c1] text-2xl" />
        </div>
        <div className="w-2/4">
          <button className='bg-[#FFB6C1] w-full rounded-3xl border-[0.2px] border-[#DE8C99] px-5 py-2 text-black font-bold text-sm Login' onClick={handleAddToCart}>Add to cart</button>
        </div>
        {/* <div className="w-1/4 flex justify-center">
          <CartIcon className="text-[#ffb6c1] text-2xl" />
        </div> */}
      </div>

      <Footer />
    </div>
  );
}

export default Cart;
