import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";
import { Clear, Decrement, DeleteFromCart, increment } from '../../rtk/slices/CartSLice';
import { IoCloseOutline } from 'react-icons/io5';

const Cart = ({ handleOrderPopup }) => {

    const cartProduct = useSelector(state => state.cart);
    const dispatch = useDispatch();

    // Calculate Total Price
    const totalPrice = cartProduct.reduce((acc, data) => {
        acc += data.price * data.quantity;
        return acc;
    }, 0)

    return (
        <div className='h-[100vbr] mt-5 dark:mt-34 pb-20 dark:pb-20 dark:bg-gray-900 '>
            <div className='container  pt-0 dark:pt-32'>
                {
                    <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4  gap-20 place-items-center items-start relative  ' >
                        {cartProduct.map((data) => <>
                            <div data-aos='fade-up'
                                data-aos-delay={data.aosDelay}
                                key={data.id}
                                className='mt-[12px] group -z-1'
                            >
                                {/*  X Icon */}
                                <IoCloseOutline
                                    onClick={() => { dispatch(DeleteFromCart(data)) }}
                                    className='absolute top-2 right-2 text-xl text-black cursor-pointer  ml-auto duration-300 hover:scale-110 group-hover:text-primary/100 
                                    dark:group-hover:text-primary/100  z-10'
                                />
                                {/*  Image */}
                                <div className='z-10'>
                                    <img
                                        src={data.img || data.image}
                                        alt=''
                                        className={`w-full h-[280px] object-contain  shadow-md rounded-lg    hover:dark:bg-black/50 `}
                                    />
                                </div>

                                <div id='photoDetails' className='mt-3 flex flex-col  sm:block  '>

                                    {/* Title */}
                                    <h3 className='font-semibold text-3xl sm:text-xl md:text-2xl text-center'>
                                        {data.title}
                                    </h3>

                                    {/* Color */}
                                    <p className='text-md text-gray-600  dark:text-white'>
                                        {data.color}
                                    </p>

                                    {/* Rating */}
                                    <div className='flex items-center gap-1 justify-center -mt-2 sm:justify-start '>
                                        <FaStar className='text-yellow-400 dark:text-yellow-400' />
                                        <span className='text-md'>
                                            {data.rating.rate ? (data.rating.rate) : data.rating}
                                        </span>
                                    </div>

                                    {/* Price and Number of Quantity */}
                                    <div className='flex gap-2 items-center mt-3 justify-between '>
                                        <div>
                                            <p className='text-xl m-0'>
                                                $ {data.price}
                                            </p>
                                        </div>

                                        <div className=' text-md flex justify-end  items-center'>
                                            <FaCirclePlus className='text-xl mr-3  text-primary/100 cursor-pointer'
                                                onClick={() => {
                                                    dispatch(increment(data))
                                                }} />
                                            <p
                                                className='text-3xl m-0 text-bold text-gray-600 dark:text-white'
                                            >
                                                {data.quantity}
                                            </p>
                                            <FaCircleMinus className='text-xl ml-3 text-primary/100 cursor-pointer'
                                                onClick={() => {
                                                    dispatch(Decrement(data))
                                                }} />
                                        </div>
                                    </div>
                                    {/* Buttons (Delete) +(Order) */}
                                    <div className='flex '>



                                    </div>
                                </div>
                            </div >
                        </>
                        )}
                    </div >
                }
                {/* Price + Order + Delete */}
                <div
                    className='mt-14 border-primary/60 border-2 '
                >
                    <div
                        className=' flex  justify-between px-12 py-6 items-center   '
                    >
                        <h1
                            className='  text-black  text-2xl  dark:text-white'
                        >
                            Total Price :
                            <span
                                className='text-primary/100 ml-4'
                            >
                                $  {totalPrice.toFixed(2)}
                            </span>
                        </h1>
                        <div
                            className='flex gap-4 items-center  '
                        >
                            <div className='flex justify-center  '
                                data-aos='zoom-in'>
                                <button
                                    className=' bg-gradient-to-r from-primary to-secondary text-xl text-white text-center px-3 py-2 rounded-2xl drop-shadow-md  duration-300 hover:scale-110'
                                    onClick={() => handleOrderPopup()}>
                                    Order
                                </button>
                            </div>
                            <div className='flex justify-center  '
                                data-aos='zoom-in'>
                                <button
                                    className=' bg-gray-800 text-white  duration-300 hover:scale-125  text-2xl  px-4 py-1 rounded-xl dark:bg-white dark:text-primary/100'
                                    onClick={() => {
                                        dispatch(Clear())
                                    }} >
                                    Clear
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Cart;
