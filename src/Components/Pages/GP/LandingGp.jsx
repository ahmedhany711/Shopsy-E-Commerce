import React from 'react';
import { FaUserCheck } from "react-icons/fa6";
import { FaSuitcaseMedical } from "react-icons/fa6";
import { FaHandHoldingUsd } from "react-icons/fa";
const LandingGp = () => {
    return (
        <div className=' px-5 py-20 bg-white '>
            <div className='container'>
                <div className=''>
                    <div
                        className='grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-3   overflow-hidden gap-20 sm:gap-8 place-items-center items-center z-100  mt-5  '
                    >
                        {/* 1st card */}
                        <div
                            data-aos='zoom-in'
                            className='relative group max-w-[350px]  bg-white hover:bg-navbarColor hover:text-white  rounded-2xl shadow-xl p-4  duration-300  my-4 hover:-translate-y-5 '>
                            {/* flex-col */}
                            <div className='flex flex-col gap-1 justify-center items-center'>

                                {/* Icon Section */}
                                <div className='h-[72px] w-[72px] rounded-full bg-navbarColor group-hover:bg-white  flex justify-center items-center duration-300 transition-all mb-2'>
                                    <FaUserCheck className='text-4xl text-white group-hover:text-navbarColor duration-300 transition-all' />
                                </div>

                                {/* details Section */}
                                <div className='  flex-col justify-center pt-2 text-center duration-300 transition-all'>
                                    <h1
                                        className='font-headingFont font-bold text-2xl' >
                                        Customer Satisfaction
                                    </h1>
                                </div>
                                <div className='flex-col justify-center pt-2 text-center duration-300 transition-all'>
                                    <p
                                        className='text-sm  text-gray-500 group-hover:text-white dark:text-white/60  duration-300 '>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* 2nd card */}
                        <div
                            data-aos='zoom-in'
                            className='relative group max-w-[350px]  bg-white hover:bg-navbarColor hover:text-white  rounded-2xl shadow-xl p-4  duration-300  my-4 hover:-translate-y-5 '>
                            {/* flex-col */}
                            <div className='flex flex-col gap-1 justify-center items-center'>

                                {/* Icon Section */}
                                <div className='h-[72px] w-[72px] rounded-full bg-navbarColor group-hover:bg-white  flex justify-center items-center duration-300 transition-all mb-2'>
                                    <FaSuitcaseMedical className='text-4xl text-white group-hover:text-navbarColor duration-300 transition-all' />
                                </div>

                                {/* details Section */}
                                <div className='  flex-col justify-center pt-2 text-center duration-300 transition-all'>
                                    <h1
                                        className='font-headingFont font-bold text-2xl' >
                                        Qualified Therapist
                                    </h1>
                                </div>
                                <div className='flex-col justify-center pt-2 text-center duration-300 transition-all'>
                                    <p
                                        className='text-sm  text-gray-500 group-hover:text-white dark:text-white/60  duration-300 '>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* 3rd card */}
                        <div
                            data-aos='zoom-in'
                            className='relative group max-w-[350px]  bg-white hover:bg-navbarColor hover:text-white  rounded-2xl shadow-xl p-4  duration-300  my-4 hover:-translate-y-5 '>
                            {/* flex-col */}
                            <div className='flex flex-col gap-1 justify-center items-center'>

                                {/* Icon Section */}
                                <div className='h-[72px] w-[72px] rounded-full bg-navbarColor group-hover:bg-white  flex justify-center items-center duration-300 transition-all mb-2'>
                                    <FaHandHoldingUsd className='text-4xl text-white group-hover:text-navbarColor duration-300 transition-all' />
                                </div>

                                {/* details Section */}
                                <div className='  flex-col justify-center pt-2 text-center duration-300 transition-all'>
                                    <h1
                                        className='font-headingFont font-bold text-2xl' >
                                        Affordable Sevice
                                    </h1>
                                </div>
                                <div className='flex-col justify-center pt-2 text-center duration-300 transition-all'>
                                    <p
                                        className='text-sm  text-gray-500 group-hover:text-white dark:text-white/60  duration-300 '>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div >
                </div>
            </div>
        </div >
    );
}

export default LandingGp;
