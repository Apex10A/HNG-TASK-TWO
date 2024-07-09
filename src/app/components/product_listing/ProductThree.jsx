import React from 'react';
import Image from 'next/image';
import FrameOne from "../../../assets/Images/FrameOne.png";
import FrameTwo from "../../../assets/Images/FrameTwo.png";
import FrameThree from "../../../assets/Images/FrameThree.png";
import FrameFour from "../../../assets/Images/FrameFour.png";
import "./ProductItems.css";

const ProductItems = () => {
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
        // Add more items as needed
    ];

    const limitedData = ProductItemsData.slice(0, 10); // Take only the first 10 elements

    return (
        <div className='min-h-screen relative'>
            <div className='px-10 py-32 background'>
                <p className='Login font-bold pl-4 pb-2'>Body Care Best Seller</p>
                <div className='flex overflow-x-auto relative z-20'>
                    {limitedData.map((item, index) => (
                        <div
                            key={item.id}
                            className={`p-4 min-w-[250px] ${index === 1 || index === 3 ? 'mt-8' : ''}`}
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
                                        <button className='bg-[#FFB6C1] rounded-3xl border-[0.2px] border-[#DE8C99] px-3 py-2 text-black font-bold text-xs cursor-pointer'>Add to cart</button>
                                        {/* <Heart/> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='bg-[#FFE8EC] w-full h-[150px] md:h-[400px] absolute top-[300px]'></div>
        </div>
    );
};

export default ProductItems;
