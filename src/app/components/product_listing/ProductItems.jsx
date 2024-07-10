'use client'
import React, { useState } from 'react';
import FrameOne from "../../../assets/Images/FrameOne.png";
import FrameTwo from "../../../assets/Images/FrameTwo.png";
import FrameThree from "../../../assets/Images/FrameThree.png";
import FrameFour from "../../../assets/Images/FrameFour.png";
import Image from 'next/image';
import "./ProductItems.css";
import Bubble from "../../../assets/Images/BubbleBreak.png";
import Heart from '@/assets/SVG/Heart';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ProductItems = () => {
    const [clickedHeart, setClickedHeart] = useState(null);

    const ProductItemsData = [
        {
            id: 1,
            title: "Naturium",
            overview: "Body Wash",
            description: "Gel - Gel",
            price: "19,500",
            poster_path: FrameFour,
        },
        {
            id: 2,
            title: "MEDIX 5.5",
            overview: "Body Moisturizer",
            description: "Glycolic and Lactic Acid",
            price: "15,000",
            poster_path: FrameOne,
        },
        {
            id: 3,
            title: "AmLactin",
            overview: "Body Moisturizer",
            description: "12% Lactic Acid",
            price: "45,300",
            poster_path: FrameTwo,
        },
        {
            id: 4,
            title: "Olay",
            overview: "Body Moisturizer",
            description: "Mango Butter & Vanilla Orchid",
            price: "32,000",
            poster_path: FrameThree,
        },
    ];

    const handleHeartClick = (id) => {
        setClickedHeart(clickedHeart === id ? null : id);
    };

    return (
        <div className='relative '>
            <div className='px-10 py-10 md:py-28 background'>
                <p className='Login font-bold text-md md:text-lg md:pl-4 pb-2'>Body Care Best Seller</p>
                <Link href='/cart'>
                    <div className='flex overflow-x-auto relative z-20'>
                        {ProductItemsData.map((item, index) => (
                            <motion.div
                                key={item.id}
                                className={`px-4 min-w-[250px] transition-transform ${index === 1 || index === 3 ? 'mt-8' : ''}`}
                                whileHover={{ y: 0 }}
                                initial={{ y: index === 1 || index === 3 ? 8 : 0 }}
                            >
                                <div>
                                    <Image src={item.poster_path} className='cursor-pointer' alt={item.title} />
                                </div>
                                <div className='pt-3'>
                                    <div className='flex items-center gap-3 '>
                                        <p className='product text-[#332427]'>{item.title}</p>
                                        <p className='opacity-[0.6] product text-sm'>{item.overview}</p>
                                    </div>
                                    <p className='text-sm opacity-[0.6] pt-2'>{item.description}</p>
                                    <div className='flex items-center justify-between pt-4'>
                                        <p className='semibold text-[#332427] text-sm pt-2'>#{item.price}</p>
                                        <div className='flex items-center gap-3'>
                                            <motion.button
                                                className='bg-[#FFB6C1] rounded-3xl border-[0.2px] border-[#DE8C99] px-3 py-2 text-black font-bold text-xs cursor-pointer'
                                                whileHover={{ scale: 1.1 }}
                                            >
                                                Add to cart
                                            </motion.button>
                                            <motion.div
                                                onClick={() => handleHeartClick(item.id)}
                                                className={`cursor-pointer ${clickedHeart === item.id ? 'bg-red-500' : ''}`}
                                                animate={{ rotate: clickedHeart === item.id ? [0, 15, -15, 0] : 0 }}
                                                transition={{ type: 'spring', stiffness: 300 }}
                                            >
                                                <Heart />
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Link>
            </div>
            <div className='bg-[#FFE8EC] w-full h-[350px]  md:h-[400px] absolute top-[200px]  md:top-[300px]'></div>
        </div>
    );
};

export default ProductItems;
