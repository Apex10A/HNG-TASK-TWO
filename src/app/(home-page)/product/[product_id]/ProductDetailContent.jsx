
"use client";
import { useEffect, useState } from "react";
import Heart from "@/assets/SVG/Heart";
import CartContext from "@/app/components/cart/CartContext";
import Image from "next/image";
import axios from "axios";
// import MobileCart from "../../../assets/Images/MobileCart.png";
import CartModal from "@/app/components/cart/CartModal";
import CartIcon from "@/assets/SVG/CartIcon";
import { useContext } from "react";
// import { TbCurrencyNaira } from "react-icons/tb";
// import GoldStars from "@/app/components/GoldStars";

const ProductDetailContent = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { addToCart } = useContext(CartContext);
 

  useEffect(() => {
    if (productId) {
      const fetchProduct = async () => {
        try {
          const response = await axios.get(`https://timbu-get-single-product.reavdev.workers.dev/${productId}?organization_id=80aafd82afd5454c965591bb966f4011&Appid=6T1T1ZB0FSJSWC1&Apikey=cabe8777a2e643ea8559e4cfe84ce1ac20240712141543542147`);
          setProduct(response.data);
          // setRelatedProducts(response.data.relatedProducts);
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      };

      fetchProduct();
    }
  }, [productId]);
  console.log(product)

  const handleAddToCart = () => {
    addToCart(product); // Assuming `product` is defined in your component
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Failed to fetch product data: {error}</p>;
  }

  return (
    
    <div>
      
      <div className="md:flex justify-center md:gap-10 bg-[#fbf4f5] py-10">
        <div>
          <div className="w-[90%] flex items-center justify-center mx-auto">
            <Image src={`https://api.timbu.cloud/images/${product?.photos[0]?.url}`} alt="Cart Image" className="max-w-sm hidden md:flex" width={250} height={250}/>
            <Image src={`https://api.timbu.cloud/images/${product?.photos[0]?.url}`} alt="Mobile Cart Image" className="max-w-sm md:hidden flex" width={250} height={250} />
          </div>

          <div className="mt-5 hidden md:block">
            <div className="flex items-start max-w-[80%] mx-auto">
              <p className="font-medium">Related Products</p>
            </div>
            <div className="flex items-center mx-auto justify-center mt-3">
              <div>
                <div className="max-w-[80%] mx-auto">
                <Image src={`https://api.timbu.cloud/images/${product?.photos[0]?.url}`} alt="Retinol Cart Image" width={250} height={250}/>
                </div>
                <div>
                  <p className="text-sm text-center pt-2">Retinol <span className="opacity-[0.7]">Bodycare Lotion</span></p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center mx-auto">
                <div className="max-w-[80%] mx-auto">
                  <Image src={`https://api.timbu.cloud/images/${product?.photos[1]?.url}`} alt="Bronze Goddess Cart Image" width={250} height={250}/>
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
            <h1 className="text-2xl pb-5">{product?.name} <span className="opacity-[0.7]">{product?.extra_infos?.[4].value}</span></h1>
            <p className="pb-4 opacity-[0.7] text-sm">{product?.extra_infos?.[3].value}</p>
            <p className="font-extrabold">#15,000</p>
          </div>
          <div className="max-w-xl py-6 px-5">
            <p className="leading-[30px] pb-3 opacity-[0.9] text-sm">
              {product?.description}
            </p>
            {/* <ul>
            <li className="leading-[30px] pb-1 opacity-[0.9] text-sm">{product?.extra_infos?.[0].value}</li>
              <li className="leading-[30px] pb-1 opacity-[0.9] text-sm">{product?.extra_infos?.[1].value}</li>
              <li className="leading-[30px] pb-1 opacity-[0.9] text-sm">{product?.extra_infos?.[2].value}</li>
              <li className="leading-[30px] pb-1 opacity-[0.9] text-sm">{product?.extra_infos?.[5].value}</li>
            </ul> */}
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
              <Image src={`https://api.timbu.cloud/images/${product?.photos[0]?.url}`} alt="Retinol Cart Image" width={250} height={250}/>
            </div>
            <div>
              <p className="text-xs text-center pt-2">Retinol <span className="opacity-[0.7] text-xs">Bodycare Lotion</span></p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mx-auto">
            <div className="max-w-[80%] mx-auto">
              <Image src={`https://api.timbu.cloud/images/${product?.photos[1]?.url}`} alt="Bronze Goddess Cart Image" width={250} height={250} />
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

   
    </div>
  );
};

export default ProductDetailContent;
