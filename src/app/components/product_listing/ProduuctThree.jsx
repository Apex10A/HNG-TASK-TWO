import React from 'react';
import Image from 'next/image';
import Retinol from "../../../assets/Images/Retinol.png";
import BronzeGoddess from "../../../assets/Images/BronzeGoddess.png";
import Lamer from "../../../assets/Images/Lamer.png"
import Otenika from "../../../assets/Images/Otenika.png"
import Vaseline from "../../../assets/Images/Vaseline.png"
import Kalak from "../../../assets/Images/Kalak.png"
import Coconut from "../../../assets/Images/Coconut.png"
import Neutrogena from "../../../assets/Images/Neutrogena.png"
import Dove from "../../../assets/Images/Dove.png"
import Roche from "../../../assets/Images/Roche.png"
import Summer from "../../../assets/Images/Summer.png"
import Heart from '@/assets/SVG/Heart';
import ShoppingCart from "@/assets/SVG/ShoppingCart"
import "./ProductItems.css";

const ProductThree = () => {
    const ProductItemsDataTwo = [
        { id: 5, title: "La Mer", overview: "Body Oil", price: "20,500", poster_path: Lamer },
        { id: 6, title: "O’Tentika", overview: "Body Moisturizer", price: "9,430", poster_path: Otenika },
        { id: 7, title: "Vaseline", overview: "Bodycare Package", price: "40,000", poster_path: Vaseline },
        { id: 8, title: "Kalak", overview: "Bodycare Package", price: "330,200", poster_path: Kalak },
        { id: 9, title: "Coconut Coffee", overview: "BodyCare Package ", price: "38,700", poster_path: Coconut },
        { id: 10, title: "NEUTROGENA", overview: " Body Oil", price: "9,500", poster_path: Neutrogena },
        { id: 11, title: "Dove", overview: " Body Moisturizer", price: "32,430", poster_path: Dove },
        { id: 12, title: "LA ROCHE-POSAY", overview: " Bodycare Package", price: "240,000", poster_path: Roche },
        { id: 13, title: "Kalak", overview: "Bodycare Package", price: "330,200", poster_path: Kalak },
        { id: 14, title: "Summer Fridays", overview: " Body Lotion", price: "210,200", poster_path: Summer },
        
    ];

    return (
        <div className='min-h-screen relative bg-[#fbf4f5]'>
            <div className='px-10 py-10'>
                <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4'>
                    {ProductItemsDataTwo.map((item) => (
                        <div key={item.id} className='p-4'>
                            <div>
                                <Image src={item.poster_path} className='cursor-pointer w-full' alt={item.title}  />
                            </div>
                            <div className='pt-3'>
                                <div className='flex items-center gap-3 '>
                                <p className='product text-[#332427] md:text-sm text-lg'>
                                    <span>{item.title}</span>{' '}
                                    <span className='opacity-[0.6]'>{item.overview}</span>
                                </p>
                                </div>
                                <div className='flex items-center justify-between pt-4'>
                                    <p className='semibold text-[#332427] md:text-sm text-lg pt-2'>#{item.price}</p>
                                    <div className='flex items-center gap-3'>
                                    <ShoppingCart/>
                                    <Heart/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex items-center justify-center pt-14'>
            <button className='bg-[#FFB6C1] rounded-3xl border-[0.2px] border-[#DE8C99] md:px-10 px-5 py-2 text-black font-bold text-sm Login'>Check Out More Products</button>
            </div>
            </div>
        </div>
    );
};

export default ProductThree;
