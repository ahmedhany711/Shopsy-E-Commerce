import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import '../../../src/App.css'

const Testimonials = () => {

    const testimonials = useSelector((state) => state.testimonials)
    const dispatch = useDispatch();

    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    };

    return (
        <div className='py-10  dark:bg-gray-800'>
            <div className='container' >
                {/* Header Section */}
                <div className=' max-w-[600px] mx-auto mb-12 text-center font-heading'>
                    <p className='text-primary/100 text-sm mb-2' data-aos='fade-zoom-in'>
                        What Our Customer are Saying
                    </p>
                    <h1 className='text-3xl font-bold dark:text-white' data-aos='fade-up'>Testimonials
                    </h1>
                    <p className='text-xs text-gray-400 dark:text-gray-100 ' data-aos='fade-up'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique id maxime omnis neque repellendus eligendi.
                    </p>
                </div>
                {/* Body Section */}
                <div>
                    <Slider {...settings} className='z-10 my-4'>
                        {testimonials.map((data) => {
                            return (
                                <div data-aos="zoom-in"
                                    className='py-12'>
                                    <div
                                        className='flex flex-col gap-1 bg-gray-600 rounded-2xl shadow-2xl mx-3 px-4  pt-1 pb-2  text-white mt-2  dark:bg-secondary relative'
                                        key={data.id}
                                    >
                                        {/* image */}
                                        <div className=' mx-auto -mt-6 transform -translate-y-7'>
                                            <img src={data.img} alt=""
                                                className='w-24 h-24 rounded-full' />
                                        </div>

                                        {/* Text */}
                                        <div>
                                            <p className='text-xs  text-gray-100 '>
                                                {data.text}
                                            </p>
                                            <h1 className='font-heading text-[18px] font-bold text-left mt-6'>
                                                {data.name}
                                            </h1>
                                        </div>

                                        {/* Quotes */}
                                        <div className='flex items-center mb-2 '>
                                            <p className='text-5xl absolute top-[120px] right-6 font-serif'>,,</p>

                                            <p className='text-5xl absolute top-12 left-4 font-serif -rotate-[180deg]'>,,</p>
                                        </div>
                                    </div>

                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>
        </div >
    );
}

export default Testimonials;

