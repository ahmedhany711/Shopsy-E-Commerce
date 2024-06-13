import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';
function Popup({ orderPopup, setOrderPopup }) {

    return (
        <>
            {orderPopup && (
                <>
                    {/* Backdrop */}
                    <div className='w-screen h-screen bg-black/50 fixed top-0 left-0 backdrop-blur-sm z-50'>

                        {/* Modal */}
                        <div className='fixed w-[300px] bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 rounded-md shadow-md z-50'>
                            {/* Header Section */}
                            <div className='flex gap-4 justify-between items-center dark:text-gray-700'>
                                <h3>Order Now</h3>
                                <IoCloseOutline
                                    onClick={() => setOrderPopup(false)}
                                    className='text-3xl cursor-pointer'
                                />
                            </div>

                            {/* Body Section */}
                            <div className='mt-4 dark:text-gray-700'>
                                <input type='text' placeholder='Name' className='px-2 py-1 mb-3 w-full border border-gray-300 rounded-xl' />
                                <input type='email' placeholder='Email' className='px-2 py-1 mb-3 w-full border border-gray-300 rounded-xl' />
                                <input type='text' placeholder='Address' className='px-2 py-1 w-full border border-gray-300 rounded-xl' />
                            </div>

                            <div className='mt-4 flex justify-center'>
                                <button className='bg-gradient-to-r from-primary to-secondary text-xl text-white text-center px-3 py-1 rounded-2xl drop-shadow-md duration-300 hover:scale-110'>
                                    Order Now
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}


export default Popup;


