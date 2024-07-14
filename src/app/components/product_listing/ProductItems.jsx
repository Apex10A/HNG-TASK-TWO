"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Heart from '@/assets/SVG/Heart';
import Link from 'next/link';
import { motion } from 'framer-motion';
import axios from 'axios';
import "./ProductItems.css";

const ProductItems = ({ activeButton, handleAddToCart }) => {
    const [clickedHeart, setClickedHeart] = useState(null);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/api/products');
                setProducts(response.data.items);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchProducts();
    }, []);

    const handleHeartClick = (id) => {
        setClickedHeart(clickedHeart === id ? null : id);
    };

    return (
        <div className='relative'>
            <div className='px-10 py-10 md:py-28 background'>
                <p className='Login font-bold text-md md:text-lg md:pl-4 pb-2'>Body Care Best Seller</p>
                <div className='flex justify-center items-center overflow-x-auto relative z-20 min-h-[450px]'>
                    {products.slice(0, 4).map((item, index) => (
                        <motion.div
                            key={item.id}
                            className={`px-4 transition-transform ${index === 1 || index === 3 ? 'mt-8' : ''}`}
                            whileHover={{ y: 0 }}
                            initial={{ y: index === 1 || index === 3 ? 8 : 0 }}
                        >
                            <Link href={`/product/${item.url_slug}`}>
                     
                                    <div>
                                        <Image src={`https://api.timbu.cloud/images/${item?.photos[0]?.url}`} alt={item.name} width={250} height={250} />
                                    </div>
                                    <div className='pt-3'>
                                        <div className='flex items-center gap-3'>
                                            <p className='product text-[#332427]'>{item.name}</p>
                                        </div>
                                        <div className='flex items-center justify-between pt-4'>
                                            <p className='semibold text-[#332427] text-sm pt-2'>#{item.price}</p>
                                            <div className='flex items-center gap-3'>
                                                <motion.button
                                                    className='bg-[#FFB6C1] rounded-3xl border-[0.2px] border-[#DE8C99] px-3 py-2 text-black font-bold text-xs cursor-pointer'
                                                    whileHover={{ scale: 1.1 }}
                                                    onClick={(e) => {
                                                        e.preventDefault(); // Prevents the Link click
                                                        handleAddToCart(item);
                                                    }}
                                                >
                                                    Add to cart
                                                </motion.button>
                                                <Heart />
                                            </div>
                                        </div>
                                    </div>
                        
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className='bg-[#FFE8EC] w-full h-[350px] md:h-[400px] absolute top-[200px] md:top-[300px]'></div>
        </div>
    );
};

export default ProductItems;
