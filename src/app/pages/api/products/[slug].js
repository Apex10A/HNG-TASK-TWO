import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import HeaderTwo from '../components/header/HeaderTwo';
import Link from 'next/link';

const Order = () => {
    const router = useRouter();
    const { id } = router.query;
    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (id) {
            const fetchProduct = async () => {
                try {
                    const response = await axios.get(`/api/products/${id}`); // Replace with your actual API URL
                    setProduct(response.data);
                } catch (error) {
                    console.error('Error fetching product data:', error);
                }
            };

            fetchProduct();
        }
    }, [id]);

    if (!product) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <HeaderTwo />
            <div className='w-full bg-[#fbf4f5] flex flex-col items-center justify-center px-5 md:px-14 py-10'>
                <div className='flex items-center gap-10 justify-between w-[95%]'>
                    <div className='hidden md:flex gap-5 items-center '>
                        <p className='semibold text-sm'>Check out {'>'} </p>
                        <h1 className='text-sm'>{product.name} <span className='opacity-[0.7]'>{product.overview}</span></h1>
                        <p className='opacity-[0.7] text-sm'>{product.description}</p>
                    </div>
                    <div>
                        <p className='text-sm'>Already an existing customer? <span className='text-[#e299a4]'>Please Login</span></p>
                    </div>
                </div>
                <div className='flex items-start text-left justify-start w-[95%] pt-10'>
                    <p className='semibold'>Delivery Information</p>
                </div>
                <div className='bg-[#fff] mt-5 md:w-[95%] rounded-lg px-4 py-5 '>
                    <div className='pb-4'>
                        <p className='semibold'>Please enter your correct delivery details</p>
                    </div>
                    <div>
                        <div className='md:flex items-center gap-10'>
                            <div className='w-full mb-4 md:mb-0'>
                                <input type="text" name="" placeholder='Name' id="" className='border-[0.2px] border-[#d0cdcd] w-full rounded-xl px-3 py-4 text-sm text-[#4c3f42] placeholder:text-[#4c3f42]' />
                            </div>
                            <div className='w-full'>
                                <input type="text" name="" placeholder='Phone number' id="" className='border-[0.2px] w-full border-[#d0cdcd] rounded-xl px-3 py-4 text-sm placeholder:text-[#4c3f42]' />
                            </div>
                        </div>
                        <div className='flex my-5 items-center gap-3 md:gap-8'>
                            <div className='w-full'>
                                <input type="text" name="" placeholder='Select state' id="" className='border-[0.2px] border-[#d0cdcd] w-full rounded-xl px-3 py-4 text-sm placeholder:text-[#4c3f42]' />
                            </div>
                            <div className='w-full'>
                                <input type="text" name="" placeholder='Select city' id="" className='border-[0.2px] border-[#d0cdcd] w-full rounded-xl px-3 py-4 text-sm placeholder:text-[#4c3f42]' />
                            </div>
                        </div>
                        <div className='mb-5'>
                            <input type="text" name="" placeholder='Address' id="" className='border-[0.2px] border-[#d0cdcd] w-full rounded-xl px-3 py-4 text-sm placeholder:text-[#4c3f42]' />
                        </div>
                        <div>
                            <input type="text" name="" placeholder='Order Information (please include any other details about your delivery)' id="" className='border-[0.2px] border-[#d0cdcd] w-full rounded-xl px-3 py-4 text-sm placeholder:text-[#4c3f42]' />
                        </div>
                    </div>
                </div>
                <div className='w-[95%] mt-5'>
                    <p className='semibold'>Order Summary</p>
                </div>
                <div className='mb-5 w-[95%] rounded-lg py-5 bg-[#fff] px-5 mt-5'>
                    <div>
                        <div className='flex items-center gap-5 justify-between bg-[#fdefed] px-2 py-3 border-[0.1px] border-[#e3dadb]'>
                            <p className='semibold text-sm'>SubTotal</p>
                            <p className='text-sm font-thin'>#{product.price}</p>
                        </div>
                        <div className='flex items-center gap-5 justify-between bg-[#fbf4f5] px-2 py-3 border-[0.1px] border-[#e3dadb]'>
                            <p className='semibold text-sm'>Shipping Fee</p>
                            <p className='text-sm font-thin'>Enter your address to view shipping details</p>
                        </div>
                        <div className='flex items-center gap-5 justify-between bg-[#fbf4f5] px-2 py-3 border-[0.1px] border-[#e3dadb]'>
                            <p className='semibold text-sm'>Total</p>
                            <p className='text-sm font-thin'>#{product.price}</p>
                        </div>
                    </div>
                </div>
                <Link href='/delivery-details'>
                    <div className='md:my-10 my-6 '>
                        <button className='bg-[#ffb6c1] text-[#332427] rounded-3xl px-10 md:px-20 py-2 text-sm semibold border-[0.2px]  border-[#e3dadb]'>Confirm Order</button>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Order;
