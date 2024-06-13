import React from 'react';
import orangeBanner from '../../photos/Orange.jpg'

const Subscribe = () => {
    return (
        <div data-aos="zoom-in"
            id='Subscribe'
            className='w-full h-full bg-cover py-10 pt-12  bg-no-repeat backdrop-blur-3xl shadow-md'>
            <div className='container py-8 text-center'>
                <div className='flex flex-col gap-3 max-w-xl mx-auto'>
                    <h1 className='text-2xl sm:text-4xl text-white'>Get Notified About New Product</h1>
                    <input
                        data-aos="fade-up"
                        type="text"
                        name="subscribe"
                        placeholder='Enter Your Email ...'
                        className='px-4 py-2 rounded-lg w-full
                        text-primary/100 placeholder:text-primary placeholder:opacity-70 hover:placeholder:opacity-100  outline-primary/40' />
                </div>
            </div>
        </div>
    );
}

export default Subscribe;
