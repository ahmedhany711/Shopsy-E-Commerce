import React from 'react';
import logo from '../../../photos/ui ux home/FinalLog-removebg-preview.png'
import { FaFacebookF, FaMobileAlt } from "react-icons/fa";
import { FaInstagram, FaLinkedin, FaLocationArrow } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='bg-nav pb-0  pt-28  w-full min-h-[550px]'>
            <div className='container mx-auto max-w-[1450px] pr-0'>
                <div className='grid grid-rows-1 grid-cols-4 text-white items-start gap-10'>
                    {/* 1st column logo + Social  */}
                    <div className=' flex flex-col gap-4 items-start max-w-[400px] mt-0 pt-0 font-contentFont -ml-14'>
                        {/* Logo + description + Social*/}
                        <div className='mt-0 pt-0' >
                            <img src={logo} alt="logo" className='w-[350px] h-[150px] -mt-8' />
                        </div>
                        <div>
                            <p className='text-xl pl-2'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde praesentium suscipit eum animi possimus. </p>
                        </div>
                        {/* Social */}
                        <div>
                            <div className='flex gap-4 pl-2 text-nav  justify-center items-center text-center'>
                                {/* Facebook */}
                                <div className='w-14 h-14 rounded-full bg-white text-3xl flex justify-center items-center hover:bg-transparent hover:text-white cursor-pointer'>
                                    <a href='https://www.facebook.com/?locale=ar_AR' target='self' className='text-nav hover:text-white' rel="noreferrer">
                                        <FaFacebookF />
                                    </a>
                                </div>

                                {/* Instagram */}
                                <div className='w-14 h-14 rounded-full bg-white text-3xl flex justify-center items-center hover:bg-transparent hover:text-white cursor-pointer'>
                                    <a href='https://www.instagram.com/?hl=ar' target='self'
                                        className='text-nav hover:text-white' rel="noreferrer">
                                        <FaInstagram />
                                    </a>
                                </div>

                                {/* Twitter */}
                                <div className='w-14 h-14 rounded-full bg-white text-3xl flex justify-center items-center hover:bg-transparent hover:text-white cursor-pointer '>
                                    <a href='https://twitter.com/?lang=ar'
                                        target='self' className='text-nav hover:text-white' rel="noreferrer">
                                        <FaTwitter />
                                    </a>
                                </div>

                                {/* Linkedin */}
                                <div className='w-14 h-14 rounded-full bg-white text-3xl flex justify-center items-center hover:bg-transparent hover:text-white cursor-pointer'>
                                    <a href='https://www.linkedin.com/'
                                        target='self' className='text-nav hover:text-white' rel="noreferrer">
                                        <FaLinkedin />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2nd column Quick Links  */}
                    <div className='pl-3 ml-5 font-contentFont '>
                        <div className='max-w[300px]'>
                            {/* Title */}
                            <div className='border-b-2 w-[170px]'>
                                <h3 className='font-headingFont pb-2'>
                                    Quick Links
                                </h3>
                            </div>
                            {/* List */}
                            <div className=' flex flex-col gap-3 text-xl'>
                                <div className=' flex  gap-2 items-center justify-start  mt-4 '>
                                    <FaChevronRight />
                                    <a href="/" className='text-2xl
                                            text-white no-underline  font-semibold
                                            hover:text-active hover:translate-x-1 duration-300' > Home</a>
                                </div>
                                <div className=' flex  gap-2 items-center justify-start '>
                                    <FaChevronRight />
                                    <a href="/about" className='text-2xl
                                            text-white no-underline my-1 font-semibold
                                            hover:text-active hover:translate-x-1 duration-300'>About Us</a>
                                </div>
                                <div className=' flex  gap-2 items-center justify-start   '>
                                    <FaChevronRight />
                                    <a href="/services" className='text-2xl
                                            text-white no-underline my-1 font-semibold
                                            hover:text-active hover:translate-x-1 duration-300'> Services</a>
                                </div>
                                <div className=' flex  gap-2 items-center justify-start   '>
                                    <FaChevronRight />
                                    <a href="/contact" className='text-2xl
                                            text-white no-underline my-1 font-semibold
                                            hover:text-active hover:translate-x-1 duration-300'>Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3rd column  Services*/}
                    <div className='pl-3  mx-auto font-contentFont'>
                        <div className='max-w-[400px]'>
                            {/* Title */}
                            <div className='border-b-2 w-[150px]'>
                                <h3 className='font-headingFont pb-2'>
                                    Services
                                </h3>
                            </div>
                            {/* List */}
                            <div className=' flex flex-col gap-3 text-xl'>
                                <div className=' flex  gap-2 items-center justify-start  mt-4 '>
                                    <FaChevronRight />
                                    <a href="/Individual" className='text-2xl
                                            text-white no-underline  font-semibold
                                            hover:text-active hover:translate-x-1 duration-300' >
                                        Individual Counseling
                                    </a>
                                </div>
                                <div className=' flex  gap-2 items-center justify-start '>
                                    <FaChevronRight />
                                    <a href="/Couple" className='text-2xl
                                            text-white no-underline my-1 font-semibold
                                            hover:text-active hover:translate-x-1 duration-300'>
                                        Couple Counseling
                                    </a>
                                </div>
                                <div className=' flex  gap-2 items-center justify-start   '>
                                    <FaChevronRight />
                                    <a href="/Family" className='text-2xl
                                            text-white no-underline my-1 font-semibold
                                            hover:text-active hover:translate-x-1 duration-300'> Family Counseling</a>
                                </div>
                                <div className=' flex  gap-2 items-center justify-start   '>
                                    <FaChevronRight />
                                    <a href="/Career" className='text-2xl
                                            text-white no-underline my-1 font-semibold
                                            hover:text-active hover:translate-x-1 duration-300'>
                                        Career Counseling
                                        Us</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 4 column  Services*/}
                    <div className='pl-3 flex justify-end font-contentFont'>
                        <div className='max-w-[300px]'>
                            {/* Title */}
                            <div className='border-b-2 w-[200px]'>
                                <h3 className='font-headingFont pb-2'>
                                    Get In Touch
                                </h3>
                            </div>
                            {/* Location */}
                            <div className='flex flex-row gap-2 items-center  my-4' >
                                <FaLocationArrow className='text-4xl ' />
                                <h5 className='mt-2 font-bold text-2xl '>Cairo , Egypt</h5>
                            </div>

                            {/* Phone Number */}
                            <div className='flex flex-row gap-2 items-center -mt-4 ' >
                                <FaMobileAlt className='text-4xl ' />
                                <p className='pt-3 font-bold text-2xl '>+91 123 456 8799</p>
                            </div>

                            {/* Email */}
                            <div className='flex flex-row gap-2 items-center  my-3  text-wrap' >
                                <MdOutlineEmail className='text-4xl text-white' />
                                <p className='pt-3 font-bold text-[16px] text-wrap max-w[50px] '>
                                    Assistdetect@domainsite.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div >
        </div >
    );
}

export default Footer;
