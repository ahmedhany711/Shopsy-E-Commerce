import React from 'react';
import { MdOutlineMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";

const ContactUs = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="font-heading text-3xl font-bold mb-8">Contact Us</h1>
                <p className="mb-8">
                    We'd love to hear from you! If you have any questions, feedback, or inquiries, please feel free to reach out to us.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h2 className="font-heading text-xl font-semibold mb-4">Send us a Message</h2>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-800">Your Name</label>
                                <input type="text" id="name" name="name" className="mt-1 p-2 block w-full border border-gray-700 rounded-md focus:outline-none focus:ring-primary focus:border-primary" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-800">Your Email</label>
                                <input type="email" id="email" name="email" className="mt-1 p-2 block w-full border border-gray-700 rounded-md focus:outline-none focus:ring-primary focus:border-primary" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-800">Message</label>
                                <textarea id="message" name="message" rows="4" className="mt-1 p-2 block w-full border border-gray-700 rounded-md focus:outline-none focus:ring-primary focus:border-primary "></textarea>
                            </div>
                            <button type="submit" className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300">Send Message</button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h2 className="font-heading text-xl font-semibold mb-4">Contact Information</h2>
                        <div className="flex gap-3 items-center mb-4 ">
                            <FaLocationArrow className='text-gray-900 text-2xl p-0 m-0 ' />
                            <p className="text-gray-700 p-0 m-0  "> 53   Main Street, Cairo , Egypt</p>
                        </div>
                        <div className="flex gap-3 items-center mb-4 ">
                            <MdOutlineMail className='text-gray-900 text-2xl p-0 m-0 ' />
                            <p className="text-gray-700 p-0 m-0  ">Shopsy@gmail.com</p>
                        </div>
                        <div className="flex gap-3 items-center mb-4 ">
                            <FaPhone className='text-gray-900 text-2xl p-0 m-0 ' />
                            <p className="text-gray-700 p-0 m-0  ">+91 123 456 8799</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ContactUs;