import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "../../../App"
import Footer from '../../Footer/Footer';

const About = () => {
    // Fetch categories from Redux store
    const categories = useSelector((state) => state.categories);

    return (
        <div className='dark:mt-32 dark:text-white dark:bg-gray-900'>
            {/* Image */}
            <div
                data-aos="zoom-in"
                id='aboutBanner' className='relative '>
                {/* Overlay */}
                <div className='absolute inset-0 bg-black/50 rounded-2xl w-full ' ></div>
                {/* Text */}
                <div className='absolute -top-10  inset-0 flex items-center justify-center text-white text-3xl  font-semibold sm:text-xl md:text-3xl '>
                    <h1 data-aos="zoom-out" className="font-heading">About /
                        <span className='text-6xl pl-3'>Shopsy</span></h1>
                </div>
            </div>
            {/* Body */}
            < div className="container mx-auto px-4 py-8" >
                <div className="max-w-3xl mx-auto ">
                    {/* Title
                    <h1 className="text-3xl font-bold mb-8 font-heading">About Our <span className='text-4xl'>Shopsy</span></h1> */}
                    {/* Description */}
                    <p data-aos="fade-up" className="mb-8 text-xl">
                        Our e-commerce store provides a wide range of products to cater to your needs. From electronics and
                        fashion to home decor and more, we offer high-quality products at competitive prices.
                    </p>
                    <p data-aos="fade-up" className="mb-8 font-semibold">
                        Quality Products ,   Fast Delivery , Easy Payment Method  ,   Good Offers   ,   Free shipping , High speed ,   Reliability  .
                    </p>

                    {/* Categories  */}
                    <h2 data-aos="fade-up"
                        className="text-3xl font-semibold mb-4 font-heading text-primary/100 dark:text-white">
                        Our Categories</h2>

                    <div className="grid grid-cols-2 md:grid-cols-2 gap-4 pb-20">
                        {categories.map((category) => (
                            <div key={category.id}
                                data-aos="fade-up"
                                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-800 rounded  hover:shadow-lg h-[250px] w-[300px]">
                                {/* image */}
                                <div className=''>
                                    <Link to={category.link}>
                                        <img src={category.image} alt={category.name} className="w-full h-40  object-cover mb-8" />
                                    </Link>
                                </div>
                                {/* Text */}
                                < div className=' text-center flex flex-col justify-center' >
                                    <p className="font-heading text-xl font-semibold dark:text-white ">{category.name}</p>

                                </div>
                            </div>
                        ))}
                    </div>
                </div >
            </ div >
            <Footer />
        </ div >
    );
};

export default About;

