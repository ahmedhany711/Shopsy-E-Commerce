import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { BsFillCartCheckFill } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import { DeleteFromCart, addToCart } from '../../rtk/slices/CartSLice';
import { IoMdEye } from 'react-icons/io';
import { Details } from '../../rtk/slices/DetailsSlice';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const TopSelling = ({ showButton, showFooter, inHome }) => {

    const products = useSelector((state) => state.topSelling);
    const dispatch = useDispatch();
    //cart
    const [clickedCart, setClickedCart] = useState([]);

    useEffect(() => {
        localStorage.setItem('clickedCarts', JSON.stringify(clickedCart));
    }, [clickedCart]);

    return (
        <>
            <div
                id="best-selling"
                className={`pt-16 pb-20 bg-gray-50 dark:bg-gray-900 dark:text-white  ${inHome ? "dark:mt-0" : "dark:mt-32"} `}>
                <div className='container'>

                    {/* Header Section */}
                    <div className=' mb-5 text-left' >
                        <p className='text-primary/100 text-md mb-2' data-aos='fade-zoom-in'>
                            Top Selling Products for you
                        </p>
                        <h1 className='text-4xl font-bold font-heading' data-aos='fade-up '> Products
                        </h1>
                        <p className='text-xs text-gray-500 dark:text-gray-300' data-aos='fade-up'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique id maxime omnis neque repellendus eligendi.
                        </p>
                    </div >


                    {/* Body Section */}
                    <div>
                        <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 place-items-center items-start ' >
                            {products.map((data) => <>
                                <div data-aos='fade-up'
                                    data-aos-delay={data.aosDelay}
                                    key={data.id}
                                    className='mt-[12px] group'
                                >
                                    {/* image */}
                                    <Link
                                        to={'/details'}
                                        onClick={() => {
                                            dispatch(Details(data))
                                        }}>

                                        <img src={data.img} alt='' className={`w-[180px] h-[300px] object-cover shadow-md rounded-lg `} />
                                        <IoMdEye className={`absolute top-3     ${data.id === 1 ? "right-6" : "right-3"} text-gray-200 text-sm group-hover:text-primary/100`} />
                                    </Link>


                                    <div id='photoDetails' className='mt-3 flex flex-col  sm:block  '>
                                        {/* Title */}
                                        <h3
                                            className='font-heading font-semibold text-2xl'>
                                            {data.title}
                                        </h3>
                                        {/* Color */}

                                        <p
                                            className='text-md text-gray-600 dark:text-gray-200'>
                                            {data.color}
                                        </p>
                                        <p
                                            className='text-xl text-gray-900 dark:text-gray-200'>
                                            $ {data.price}
                                        </p>
                                        {/* Rating */}
                                        <div
                                            className='flex items-center gap-2 justify-between -mt-2 sm:justify-between '>
                                            <div
                                                className='flex items-center gap-1 '>
                                                <FaStar
                                                    className='text-yellow-400 dark:text-yellow-400'
                                                />
                                                <span
                                                    className='text-md'
                                                >
                                                    {data.rating}
                                                </span>
                                            </div>
                                            {/* Cart icon */}
                                            <div className=' p-1'>
                                                {clickedCart.includes(data.id) ? (
                                                    <BsFillCartCheckFill
                                                        className={
                                                            `text-3xl text-center mx-auto
                                                    text-primary/100 cursor-pointer
                                                        dark:text-white
                                                        `
                                                        }
                                                        onClick={() => {
                                                            dispatch(DeleteFromCart(data));
                                                            setClickedCart((prev) => prev.filter((id) => id !== data.id));

                                                        }}
                                                    />
                                                ) : (
                                                    <BsCart
                                                        className="text-3xl cursor-pointer  text-center mx-auto text-primary/100
                                                    dark:text-white"
                                                        onClick={() => {
                                                            dispatch(addToCart(data));
                                                            setClickedCart((prev) => [...prev, data.id]);

                                                        }}
                                                    />
                                                )}
                                            </div>

                                        </div>
                                    </div>
                                </div >
                            </>
                            )}

                        </div >
                    </div>

                    {/* Button */}
                    {showButton && (
                        <div className='flex justify-center mt-10 mb-6'
                            data-aos='fade-up'>
                            <Link
                                to={'/best-selling'}
                                className=' font-heading no-underline bg-gradient-to-r from-primary to-secondary text-xl text-white text-center px-3 py-2 rounded-2xl drop-shadow-md  duration-300 hover:scale-110'>
                                Best Selling Products
                            </Link>
                        </div>
                    )}
                </div >
            </div >
            {/* Show footer or not */}
            {
                showFooter && (
                    <Footer />
                )
            }
        </>
    );
}

export default TopSelling;
