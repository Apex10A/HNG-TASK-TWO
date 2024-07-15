"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import "./ProductItems.css"
import Heart from '@/assets/SVG/Heart';
import ShoppingCart from "@/assets/SVG/ShoppingCart";
import axios from 'axios';
import Link from 'next/link';


const ProductListTwo = ({ handleAddToCart }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://timbu-get-all-products.reavdev.workers.dev/products?organization_id=80aafd82afd5454c965591bb966f4011&reverse_sort=false&size=30&Appid=6T1T1ZB0FSJSWC1&Apikey=cabe8777a2e643ea8559e4cfe84ce1ac20240712141543542147');
                setProducts(response.data.items);
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
                    {products.slice(4, 19).map((item) => ( // Slicing to get 5th to 20th products
                        <div key={item.id} className='p-4 flex flex-col'>
                            <Link href={`/product/${item.id}`}>
                            <div>
                                <Image src={`https://api.timbu.cloud/images/${item?.photos[0]?.url}`} alt={item.name} width={250} height={250} className='cursor-pointer w-full' />
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
                                        <button className='bg-[#FFB6C1] rounded-3xl border-[0.2px] border-[#DE8C99] px-3 py-2 text-black font-bold text-xs cursor-pointer' whileHover={{ scale: 1.1 }}
                                                    onClick={(e) => {
                                                        e.preventDefault(); // Prevents the Link click
                                                        handleAddToCart(item);
                                                    }}
                                            >Add to cart</button>
                                        <Heart />
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductListTwo;
