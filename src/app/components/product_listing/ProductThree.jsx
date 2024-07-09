'use client'

import React from 'react';
import Image from 'next/image';
import Retinol from "../../../assets/Images/Lamer.png";
import BronzeGoddess from "../../../assets/Images/Otenika.png";
import Third from "../../../assets/Images/Vaseline.png";
import Fourth from "../../../assets/Images/Kalak.png";
import Fifth from "../../../assets/Images/Coconut.png";
import Sixth from "../../../assets/Images/Neutrogena.png";
import Seventh from "../../../assets/Images/Dove.png";
import Eight from "../../../assets/Images/Roche.png";
import Ninth from "../../../assets/Images/Summer.png";
import Tenth from "../../../assets/Images/Tenth.png";
import "./ProductItems.css";
import Heart from '@/assets/SVG/Heart';
import ShoppingCart from "@/assets/SVG/ShoppingCart"
import Link from 'next/link';

const ProductThree = () => {
    const ProductItemsDataTwo = [
        { id: 1, title: "La mer", overview: "Body oil", price: "20,500", poster_path: Retinol },
        { id: 2, title: "O’Tentika", overview: "Body Moisturizer", price: "9,430", poster_path: BronzeGoddess },
        { id: 3, title: "Vaseline", overview: "Bodycare Package", price: "40,000", poster_path: Third },
        { id: 4, title: "Kalak", overview: "Bodycare Package", price: "330,200", poster_path: Fourth },
        { id: 5, title: "Coconut Coffee", overview: "BodyCare Package ", price: "38,700", poster_path: Fifth },
        { id: 6, title: "NEUTROGENA", overview: "Body Oil", price: "9,500", poster_path: Sixth },
        { id: 7, title: "Dove", overview: "Body Moisturizer", price: "32,430", poster_path: Seventh },
        { id: 8, title: "LA ROCHE-POSAY", overview: "Bodycare Package", price: "240,000", poster_path: Eight },
        { id: 9, title: "Kalak", overview: "Bodycare Package", price: "330,200", poster_path: Ninth },
        { id: 10, title: "Summer Fridays", overview: "Body Lotion", price: "210,200", poster_path: Tenth },
    ];

    return (
        <div className='min-h-screen relative bg-[#fbf4f5]'>
            <div className='px-10 py-32'>
                <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4'>
                    {ProductItemsDataTwo.map((item) => (
                        <Link href='/cart'>
                        <div key={item.id} className='p-4'>
                            <div>
                                <Image src={item.poster_path} className='cursor-pointer' alt={item.title} width={300} height={300} />
                            </div>
                            <div className='pt-3'>
                                <p className='product text-[#332427] text-sm'>
                                    <span>{item.title}</span>{' '}
                                    <span className='opacity-[0.6]'>{item.overview}</span>
                                </p>
                                <div className='flex items-center justify-between pt-4'>
                                    <p className='semibold text-[#332427] text-sm pt-2'>#{item.price}</p>
                                    <div className='flex items-center gap-3'>
                                        <ShoppingCart/>
                                        <Heart/>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductThree;
