import React from 'react';
import jew1 from '../../photos/Jewelry/l1.jpg'
import men1 from '../../photos/Mens/land1.jpg'
import men2 from '../../photos/Mens/land3tshirt.jpg'
import woman1 from '../../photos/Women/Land1.jpg'
import woman2 from '../../photos/Women/Land2.jpg'
import elec1 from '../../photos/Elctroncis/land1.jpg'



import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div className='min-h-[450px]  bg-gray-50 py-10 dark:pb-20 dark:pt-12 dark:bg-gray-900 '>
            

            {/* Cards */}
            <div className='container  pr-0 md:pr-28 lg:pr-5'>
                <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-y-6  sm:gap-44  md:gap-56  lg:gap-24 sm:gap-y-8 md:gap-y-8 mx-auto'>

                    {/* 1 Card Jewelry */}
                    <div
                        data-aos="zoom-in"
                        className='flex flex-col justify-start items-start pl-4 gap-1 bg-white dark:bg-[#1d2027]  shadow-md h-[400px] w-[320px] sm:w-[290px] md:w-[270px] lg:w-[270px] rounded-xl mx-auto sm:mx-0' >
                        {/* Title */}

                        <h1 className='font-heading text-xl font-bold text-gray-800 dark:text-white  mt-4 mb-3' > Jewelry | New arrivals
                        </h1>

                        {/* Photo */}
                        <di className='dark:text-gray-800'>
                            <Link to={'/jewelery'}
                                className='no-underline text-primary/100   text-left -mt-1'>
                                <img src={jew1} alt="" className='object-cover h-[250px]  max-w-full pr-3' />
                            </Link>

                        </di>

                        {/* See more */}
                        <div className=' flex justify-start text-left'>
                            <Link to={'/jewelery'} className='no-underline text-primary/100 dark:text-white text-left mt-[30px]'>See More</Link>
                        </div>
                    </div>

                    {/* 2 card Men */}
                    <div
                        data-aos="zoom-in"
                        className='flex flex-col justify-start items-start pl-3 pr-2 gap-1 bg-white shadow-md  dark:bg-[#1d2027]  h-[400px] rounded-xl w-[320px] sm:w-[280px] md:w-[270px] lg:w-[270px] mx-auto sm:mx-0' >
                        {/* Title */}

                        <h1 className=' font-heading text-xl font-bold  dark:text-white text-gray-800 mt-4 mb-2' >Top deals on Men's Fashion
                        </h1>

                        {/* Photos */}
                        <div className='flex gap-1 justify-center items-start dark:text-gray-800 '>
                            <div className='flex flex-col gap-2'>
                                <Link to={'/MensClothing'} className='no-underline text-primary/100  pt-2 text-left '>

                                    <img src={men1} alt="" className='object-contain h-[190px] w-[130px] pl-0 ' />
                                </Link>
                                <p className='text-sm dark:text-white pl-2'>Men's Shirt</p>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <Link to={'/MensClothing'} className='no-underline text-primary/100  pt-2 text-left '>
                                    <img src={men2} alt="" className='object-cover h-[260px] w-[120px] pl-0 ' />
                                </Link>
                                <p className='text-sm  dark:text-white pl-2'>Men's T-Shirt</p>

                            </div>
                        </div>

                        {/* See more */}
                        <div className=' flex justify-start text-left -mt-5 sm:-mt-12'>
                            <Link to={'/MensClothing'} className='no-underline dark:text-white text-primary/100   text-left '>See More</Link>
                        </div>
                    </div>

                    {/* 3 card Woman */}
                    <div
                        data-aos="zoom-in"
                        className='flex flex-col justify-start items-start pl-3 pr-2 gap-1 bg-white shadow-md dark:bg-[#1d2027]   h-[400px] rounded-xl w-[320px] sm:w-[280px] md:w-[270px] lg:w-[270px] mx-auto sm:mx-0' >
                        {/* Title */}
                        <h1 className=' font-heading text-xl font-bold  dark:text-white text-gray-800 mt-4 mb-2' > Woman's Fashion| Wide selection
                        </h1>

                        {/* Photo */}
                        <div className='flex gap-1 justify-center items-start dark:text-gray-800 '>
                            <div className='flex flex-col gap-2'>
                                <Link to={'/WomansClothing'} className='no-underline text-primary/100   text-left -mt-1'>

                                    <img src={woman1} alt="" className='object-contain h-[220px] w-[130px] pl-0 ' />
                                </Link>
                                <p className='text-sm pl-2 dark:text-white -mt-4'>Woman's Shirt</p>
                            </div>
                            <div className='flex flex-col gap-2'>

                                <Link to={'/WomansClothing'} className='no-underline text-primary/100  pt-2 text-left '>
                                    <img src={woman2} alt="" className='object-cover h-[240px]  w-[120px] pl-0 ' />
                                </Link>


                            </div>
                        </div>

                        {/* See more */}
                        <div className=' flex justify-start text-left mt-3'>
                            <Link to={'/WomansClothing'} className='no-underline  dark:text-white text-primary/100   text-left '>See More</Link>
                        </div>
                    </div>

                    {/* 4 card Electronics */}
                    <div
                        data-aos="zoom-in"
                        className='flex flex-col justify-start items-start pl-3 gap-1 bg-white shadow-md  dark:bg-[#1d2027]  h-[400px] rounded-xl w-[320px] sm:w-[280px] md:w-[270px] lg:w-[270px] mx-auto sm:mx-0' >
                        {/* Title */}

                        <h1 className=' font-heading text-xl font-bold  dark:text-white text-gray-800 mt-4 mb-2' >
                            Electronics | Free Delivery* on First Order
                        </h1>
                        {/* Photo */}
                        <div className='flex flex-col  dark:text-gray-800'>
                            <Link to={'/electronics'}
                                className='no-underline text-primary/100   text-left -mt-1'>
                                <img src={elec1} alt="" className='object-cover h-[240px]  max-w-full pr-3' />
                            </Link>
                        </div>

                        {/* See more */}
                        <div className=' flex justify-start text-left mt-4'>
                            <Link to={'/electronics'} className='no-underline dark:text-white text-primary/100  pt-1 text-left '>See More</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    );
}

export default Landing;
