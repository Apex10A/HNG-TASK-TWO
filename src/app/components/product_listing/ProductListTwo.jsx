'use client'
import Retinol from "../../../assets/Images/Retinol.png"
import Bronze from "../../../assets/Images/BronzeGoddess.png"
import Third from "../../../assets/Images/Third.png"
import Fourth from "../../../assets/Images/Fourth.png"
import Fifth from "../../../assets/Images/Fifth.png"
import Sixth from "../../../assets/Images/Sixth.png"
import Seventh from "../../../assets/Images/Seventh.png"
import Eight from "../../../assets/Images/Eight.png"
import Ninth from "../../../assets/Images/Ninth.png"
import Tenth from "../../../assets/Images/Tenth.png"
import Eleventh from "../../../assets/Images/Eleventh.png"
import Twelvth from "../../../assets/Images/Twelvth.png"
import Thirteen from "../../../assets/Images/Thirteen.png"
import Fourteen from "../../../assets/Images/Fourteenth.png"
import Fiveteen from "../../../assets/Images/Fiveteen.png"
import Image from 'next/image';
import "./ProductItems.css"
import Heart from '@/assets/SVG/Heart';
import ShoppingCart from "@/assets/SVG/ShoppingCart"

const ProductListTwo = () => {
    const ProductItemsDataTwo = [
        { id: 5, title: "Retinol", overview: "Bodycare Lotion", price: "18,000", poster_path: Retinol },
        { id: 6, title: "Bronze Goddess", overview: "Bodycare Lotion", price: "32,430", poster_path: Bronze },
        { id: 7, title: "LA ROCHE POSAY", overview: "Bodycare Package", price: "240,000", poster_path: Third },
        { id: 8, title: "Kalak", overview: "Bodycare Package", price: "330,200", poster_path: Fourth },
        { id: 9, title: "PAIXAO", overview: "Body Lotion % Body Wash", price: "330,200", poster_path: Fifth },
        { id: 10, title: "NIVEA", overview: "Body Lotion", price: "6,000", poster_path: Sixth },
        { id: 11, title: "VICTORIA’S SECRET ", overview: "Body Wash", price: "42,000", poster_path: Seventh },
        { id: 12, title: "PanOxyl", overview: "Body Wash", price: "12,000", poster_path: Eight },
        { id: 13, title: "Shea Bosy Mosturizer & Conditional", overview: "Bodycare Lotion", price: "32,000", poster_path: Ninth },
        { id: 14, title: "CeraVe ", overview: "Body Lotion", price: "19,200", poster_path: Tenth },
        { id: 15, title: "NEUTROGENA", overview: "Body Oil", price: "9,500", poster_path: Eleventh },
        { id: 16, title: "Dove", overview: "Body Moisturizer", price: "32,430", poster_path: Twelvth },
        { id: 17, title: "NIVEA", overview: "Bodycare Package", price: "41,000", poster_path: Thirteen },
        { id: 18, title: "Cocokind", overview: "Body Moisturizer", price: "20,200", poster_path: Fourteen },
        { id: 19, title: "Summer Fridays ", overview: "Body Lotion", price: "210,200", poster_path: Fiveteen },
    ];

    return (
        <div className='min-h-screen relative bg-[#fbf4f5]'>
            <div className='px-10 '>
                <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4'>
                    {ProductItemsDataTwo.map((item) => (
                        <div key={item.id} className='p-4'>
                            <div>
                                <Image src={item.poster_path} className='cursor-pointer w-full' alt={item.title} />
                            </div>
                            <div className='pt-3'>
                                <div className='flex items-center gap-3 '>
                                <p className='product text-[#332427] md:text-sm text-lg'>
                                    <span>{item.title}</span>{' '}
                                    <span className='opacity-[0.6]'>{item.overview}</span>
                                </p>
                                </div>
                                <div className='flex items-center justify-between pt-4'>
                                    <p className='semibold text-[#332427] md:text-sm text-md pt-2'>#{item.price}</p>
                                    <div className='flex items-center gap-3'>
                                        <ShoppingCart/>
                                        <Heart/>
                                    </div>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductListTwo;
