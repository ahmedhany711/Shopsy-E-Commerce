import React from 'react';
import LOGO from '../../photos/download-removebg-preview.png'

import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa';

const links = [
    {
        title: "Home",
        link: "/#"
    },
    {
        title: "About",
        link: "/about"
    },
    {
        title: "Contact",
        link: "/contact"
    },
    {
        title: "All Products",
        link: "/allProducts"
    },
]
const Footer = () => {
    return (
        <div className='h-[450px] bg-gray-900 dark:bg-gradient-to-r from-primary to-secondary ' id='footerBanner'>
            <div
                data-aos="zoom-in"
                className=''
            >
                <div className='container '>
                    <div className='grid md:grid-cols-3  gap-12 items-start text-white pt-12'>
                        {/* Company  col-1*/}
                        <div className='mt-10 '>
                            <div className='flex gap-4 -mt-1 items-start'>
                                <img src={LOGO} alt="" className='w-16 h-16' />
                                <h1 className='font-heading'> Shopsy </h1>
                            </div>
                            <p className='pt-3 text-sm text-gray-100'> Our e-commerce store provides a wide range of products to cater to your needs. From electronics and
                                fashion to home decor and more, we offer high-quality products at competitive prices.</p>
                        </div>

                        {/* Links Section col-2 */}
                        <div className=' mt-10 mx-auto'>
                            <div className=''>
                                {/* Page Links col-1 inside */}
                                <div className='flex flex-col gap-2 px-4   justify-center items-left'>
                                    <h1 className='text-4xl text-center font-heading'>
                                        Links
                                    </h1>
                                    <div
                                        id='links'
                                        className=' flex flex-col gap-3 '>
                                        {links.map((data) => {
                                            return (
                                                <a href={data.link}
                                                    className='text-[18px]
                                            text-white no-underline my-1 font-semibold
                                            hover:text-primary
                                            dark:hover:text-gray-800
                                            hover:translate-x-2 duration-300'
                                                >
                                                    {data.title}
                                                </a>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links col-3 */}
                        <div className=' mt-10 mx-auto px-2'>
                            <div className='flex flex-col gap-8 items-start '>
                                <div className='flex flex-row gap-4 text-3xl mt-1 '>
                                    <a href='https://www.instagram.com/?hl=ar' target='self' className='text-white hover:text-primary dark:hover:text-gray-800' rel="noreferrer">
                                        <FaInstagram />
                                    </a>
                                    <a href='https://www.facebook.com/?locale=ar_AR' target='self' className='text-white hover:text-primary dark:hover:text-gray-800'>
                                        <FaFacebook />
                                    </a>
                                    <a href='https://www.linkedin.com/'
                                        target='self' className='text-white hover:text-primary dark:hover:text-gray-800'>
                                        <FaLinkedin />
                                    </a>

                                </div>
                                <div className='flex flex-row gap-4 items-center  ' >
                                    <FaLocationArrow className='text-xl ' />
                                    <h5 className='mt-2 font-bold '>Cairo , Egypt</h5>
                                </div>
                                <div className='flex flex-row gap-4 items-center -mt-4 ' >
                                    <FaMobileAlt className='text-3xl ' />
                                    <p className='pt-3 font-bold '>+91 123 456 8799</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    );
}

export default Footer;
