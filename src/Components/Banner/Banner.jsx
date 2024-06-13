import React from 'react';
import { GrSecure } from "react-icons/gr";
import { BiSolidOffer } from "react-icons/bi";
import { MdPayment } from "react-icons/md";
import { GiFoodTruck } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import bannerimg from '../../photos/Women/appealing-shopaholic-woman-standing-yellow-wall.jpg'

import '../../App.css'

const Banner = () => {
    return (
        <div className='min-h-[500px] flex items-center justify-center py-12 sm:py-20 -mt-16 mb-0 dark:bg-gray-800 dark:text-white' >
            <div className='container'>
                <div className='py-12 grid grid-cols-1  sm:grid-cols-2 gap-6 sm:gap-10 items-center'>
                    {/* Image Section */}
                    <div data-aos="zoom-in">
                        <img src={bannerimg} alt=''
                            className='h-[420px] object-cover max-w-[450px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,0.8)] ' />
                    </div>
                    {/* Detail Section */}
                    <div id='bannerDetails'
                        className=' flex flex-col gap-3 h-[380px] sm:h-[420px]'>
                        <h1 data-aos="fade-up"
                            className='font-heading font-bold text-3xl sm:text-2xl md:text-3xl lg:text-4xl'> Winter Sale Up To 50% off</h1>
                        <p
                            data-aos="fade-up" className='text-gray-400 dark:text-gray-100  text-sm sm:text-xs md:text-xs lg:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe animi nesciunt rerum blanditiis itaque rem quam rerum blanditiis.</p>

                        {/* Icons */}

                        <div id='bannerIcons'
                            className='flex flex-col   sm:mx-0 dark:text-white'>
                            <div
                                data-aos="fade-up"
                                className='flex items-center gap-4 '> <GrSecure
                                    className=' w-12 h-12 rounded-full  bg-violet-100 dark:bg-violet-500 drop-shadow-md p-[10px] text-4xl' />
                                <p className='m-0 font-heading  font-semibold'>
                                    Quality Products
                                </p>
                            </div>
                            <div data-aos="fade-up"
                                className='flex items-center gap-4'> <TbTruckDelivery
                                    className=' w-12 h-12 rounded-full  bg-orange-100 dark:bg-orange-400 p-[10px] text-4xl' />
                                <p className='m-0 font-heading font-semibold'>
                                    Fast Delivery
                                </p>
                            </div>
                            <div data-aos="fade-up"
                                className='flex items-center gap-4'> <MdPayment
                                    className=' w-12 h-12 rounded-full  bg-blue-100 dark:bg-blue-400 p-[10px] text-4xl' />
                                <p className='m-0 font-heading font-semibold'>
                                    Easy Payment Method
                                </p>
                            </div>
                            <div data-aos="fade-up"
                                className='flex items-center gap-4'> <BiSolidOffer
                                    className=' w-12 h-12 rounded-full  bg-yellow-100 dark:bg-yellow-400 p-[10px] text-4xl' />
                                <p className='m-0 font-heading font-semibold'>
                                    Get Offers
                                </p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Banner;
