'use client';
import Imager from "../../../assets/Images/Kalak.png"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import "./ProductItems.css";
import Heart from '@/assets/SVG/Heart';
import ShoppingCart from "@/assets/SVG/ShoppingCart";
import axios from 'axios';

const ProductThree = ({ handleAddToCart }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/api/products'); // Replace with your actual API URL
                const items = response.data.items.slice(1, 25); // Adjust the slicing if needed
                setProducts(items);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className='min-h-screen relative bg-[#fbf4f5]'>
            <div className='md:px-10 px-3'>
                <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 md:gap-4 gap-1'>
                    {products.map((item) => (
                        <div key={item.id} className='p-4 flex flex-col'>
                            <div>
                                <Image src={Imager} className='cursor-pointer w-full' alt={item.name} width={300} height={300} />
                            </div>
                            <div className='pt-3'>
                                <div className='flex items-center gap-3'>
                                    <p className='product text-[#332427] md:text-sm text-md'>
                                        <span>{item.name}</span>{' '}
                                        <span className='opacity-[0.6]'>{item.overview}</span>
                                    </p>
                                </div>
                                <div className='flex items-center justify-between pt-4'>
                                    <p className='semibold text-[#332427] md:text-sm text-sm pt-2'>#{item.price}</p>
                                    <div className='flex items-center md:gap-3 gap-2'>
                                        <button className='bg-[#FFB6C1] rounded-3xl border-[0.2px] border-[#DE8C99] px-3 py-2 text-black font-bold text-xs cursor-pointer' onClick={() => handleAddToCart(item)}>Add to cart</button>
                                        <Heart />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductThree;
