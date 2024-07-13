"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import "./ProductItems.css";
import Heart from '@/assets/SVG/Heart';
import ShoppingCart from "@/assets/SVG/ShoppingCart"
import axios from 'axios';
import ImageOne from "../../../assets/Images/Dove.png";

const ProductListTwo = ({ handleAddToCart }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/api/products'); // Replace with your actual API URL
                const items = response.data.items.slice(1, 25); // Get the first to the twenty-fourth product
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
                                <Image src={ImageOne} className='cursor-pointer w-full' alt={item.name} />
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
                                        <ShoppingCart onClick={() => handleAddToCart(item)} className="cursor-pointer" />
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

export default ProductListTwo;
