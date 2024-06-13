import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitOrder } from '../../../rtk/slices/CheckSlice';
import countryCodes from 'country-codes-list';
import { Link } from 'react-router-dom';

const CheckoutPage = ({ orderNumber }) => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        country: '',
        postalCode: '',
        cardNumber: '',
        paymentMethod: ''
    });

    useEffect(() => {
        // Set default country and phone code
        const defaultCountry = 'Egypt';
        const defaultCountryCode = countryCodes.customList('countryNameEn', '{countryCode} : +{countryCallingCode}')['Egypt'];
        setFormData(prevData => ({
            ...prevData,
            country: defaultCountry,
            phone: defaultCountryCode
        }));
    }, []);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = e => {
        e.preventDefault();
        // Dispatch action to submit order data
        dispatch(submitOrder(formData, cart));

        // Process order and generate order number
        const orderNumber = generateOrderNumber();

    };


    const generateOrderNumber = () => {
        // Generate a random order number (you can use any method here)
        return Math.floor(Math.random() * 1000000);
    };


    const handleCountryChange = e => {
        const selectedCountry = e.target.value;
        const countryCode =
            countryCodes.customList('countryNameEn', '{countryCode} : +{countryCallingCode}')[selectedCountry];
        setFormData(prevData => ({
            ...prevData,
            country: selectedCountry,
            phone: countryCode
        }));
    };

    const countryOptions = Object.keys(countryCodes.customList('countryNameEn', '{countryCode}'));

    return (
        <div className='mb-20 dark:mb-0 pb-16 dark:bg-gray-800 dark:text-white dark:mt-32 pt-6'>
            < div className="container mx-auto mt-8 " >

                {/* Title */}
                <h1 className="text-3xl font-semibold mb-10 text-center text-primary/100">
                    Checkout
                </h1>
                {/* Body */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    {/* Shipping Information  */}
                    <div className='flex flex-col px-2 '>
                        <div className=" ">
                            <div className='w-lg'>
                                {/* Title */}
                                <h2 className="text-xl font-semibold mb-4">
                                    Shipping Information
                                </h2>

                                {/* Form Body */}
                                <form onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 gap-4">

                                        {/* Name */}
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            placeholder="Full Name"
                                            className="input-field appearance-none rounded-none relative block w-full px-2 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                                        />

                                        {/* Email */}
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Email"
                                            className="input-field appearance-none rounded-none relative block w-full px-2 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                                        />

                                        {/* Country selection */}
                                        <select
                                            name="country"
                                            value={formData.country}
                                            onChange={handleCountryChange}
                                            className="input-field appearance-none rounded-none relative block w-full px-2 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                                            placeholder="Country"
                                        >
                                            <option value="" disabled>Select Country</option>
                                            {countryOptions.map(country => (
                                                <option key={country} value={country}>+{country}</option>
                                            ))}
                                        </select>

                                        {/* Phone number */}
                                        <input
                                            type="text"
                                            name="phone"
                                            maxLength={25}
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Phone number"
                                            className="input-field appearance-none rounded-none relative block w-full px-2 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                                        />

                                        {/* City */}
                                        <input
                                            type="text"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                            placeholder="City"
                                            className="input-field appearance-none rounded-none relative block w-full px-2 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                                        />

                                        {/* Address */}
                                        <input
                                            type="text"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleChange}
                                            placeholder="Address"
                                            className="input-field appearance-none rounded-none relative block w-full px-2 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                                        />

                                        {/* postalCode */}
                                        <input
                                            type="text"
                                            name="postalCode"
                                            value={formData.postalCode}
                                            onChange={handleChange}
                                            placeholder="Postal Code"
                                            className="input-field appearance-none rounded-none relative block w-full px-2 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                                        />

                                        {/* Payment Method */}
                                        <div>
                                            <select
                                                name="paymentMethod"
                                                onChange={handleChange}
                                                value={formData.paymentMethod}
                                                className="appearance-none rounded-none relative block w-2xl px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm "
                                            >
                                                <option
                                                    value=""
                                                    className=" text-primary/100 font-semibold focus:bg-white focus:text-primary/100"

                                                >
                                                    Select Payment Method
                                                </option>
                                                <option className=" text-primary/100 font-semibold focus:bg-white focus:text-primary/100" value="cash">Cash
                                                </option>
                                                <option
                                                    className=" text-primary/100 font-semibold focus:bg-white focus:text-primary/100"
                                                    value="creditCard">Credit Card
                                                </option>
                                                <option
                                                    className=" text-primary/100 font-semibold focus:bg-white focus:text-primary/100" value="paypal">PayPal
                                                </option>
                                            </select>

                                            {formData.paymentMethod === 'creditCard' || formData.paymentMethod === 'paypal' ? (
                                                <>
                                                    <label className='mt-4 mb-1 text-sm px-2 text-primary/100'
                                                        for="cardNumber ">
                                                        Credit Card Number
                                                    </label>
                                                    < input
                                                        id="cardNumber"
                                                        pattern="\d{4}-\d{4}-\d{4}-\d{2}"
                                                        type="text"
                                                        name="cardNumber"
                                                        value={formData.cardNumber}
                                                        onChange={handleChange}
                                                        maxLength={17}
                                                        placeholder="xxxx - xxxx -  xxxx - xx"
                                                        className="input-field appearance-none mt-1 rounded-none relative block w-full px-2 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                                                    />
                                                </>

                                            ) : null}
                                        </div>
                                    </div>

                                    {/* Button */}
                                    <div className='mt-10'>
                                        <Link
                                            to={'/confirm'}
                                            type="submit"
                                            className=' bg-gradient-to-r from-primary to-secondary text-xl text-white text-center px-3 py-2 rounded-2xl drop-shadow-md  duration-300  no-underline hover:scale-110'>
                                            Continue to Payment
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className='pl-3'>
                        <h2 className="text-xl font-semibold mb-4">
                            Order Summary
                        </h2>
                        {/* table */}
                        <div className="border border-gray-200 p-4 rounded">
                            {cart && cart.map((item, index) => (
                                <div key={item.id}
                                    className={`flex justify-between md:justify-start lg:justify-between items - center my - 2 p - 3 
                                    ${index === cart.length - 1 ? '' : 'border-b-2'}`}>

                                    {/* Image +Title */}
                                    <div className='flex gap-5 sm:gap-2 items-center my-3 md:gap-0 lg:gap-5'>

                                        <img src={item.image || item.img} alt={item.title} className="w-14 h-16 object-cover mr-4" />
                                        {/* Text */}
                                        <div className='w-40 mr-20 sm:mr-36 md:-mr-2 lg:mr-28 xl:mr-40 line-clamp-1 hover:line-clamp-4'>
                                            {item.title}
                                        </div>
                                        {/* Price */}
                                        <div>${item.price}</div>
                                    </div>
                                </div>
                            ))}
                            <hr className="my-4" />
                            <div className="flex justify-between items-center font-semibold">
                                <div>Total:</div>
                                <div className='mr-[75px] sm:mr-10 md:mr-0 lg:mr-4'>${cart.reduce((acc, item) => acc + item.price, 0)}</div>
                            </div>
                        </div>
                    </div>
                </div >

            </ div >
        </ div >

    );
};

export default CheckoutPage;
