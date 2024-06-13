import React, { useState } from 'react';
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SignUpAndLoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isSignUp, setIsSignUp] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSignUp = (e) => {
        e.preventDefault();
        // Perform sign-up logic here
        console.log('Sign-up details:', email, password, fullName, phoneNumber);
        setIsLoggedIn(false);
        setIsSignUp(false);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // Perform login logic here
        console.log('Login details:', email, password);
        setIsLoggedIn(true);
    };

    if (isLoggedIn) {
        // Redirect to home page or any other authenticated page
        window.location.href = '/'; // Change '/home' to your desired URL
    }

    return (
        <div className="min-h-screen flex items-start justify-center py-4 px-4 sm:px-6 lg:px-8 dark:mt-24 dark:bg-gray-900 dark:py-14">
            <div className="max-w-md w-full space-y-8">
                {/* Header */}
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white/100">{isSignUp ? 'Sign Up' : 'Log In'}</h2>
                </div>
                {/* Form Body */}
                <form className="mt-8 space-y-6" onSubmit={isSignUp ? handleSignUp : handleLogin}>
                    <input type="hidden" name="remember" value="true" />
                    <div className="rounded-md shadow-sm space-y-1">
                        {/* Email */}
                        <div className='relative flex items-center'>
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-8 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <MdOutlineMail className='text-gray-400' />
                            </div>
                        </div>
                        {/* Password */}
                        <div className='relative flex items-center'>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none rounded-none relative block w-full px-8 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <RiLockPasswordLine className='text-gray-400' />
                            </div>
                        </div>
                        {/* Full name & Phone */}
                        {isSignUp &&
                            <>
                                <div className='relative flex items-center'>
                                    <label htmlFor="full-name" className="sr-only">Full Name</label>
                                    <input
                                        id="full-name"
                                        name="full-name"
                                        type="text"
                                        autoComplete="name"
                                        required
                                        className="appearance-none rounded-none relative block w-full px-8 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                                        placeholder="Full Name"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                    />
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaPen className='text-gray-400' />
                                    </div>
                                </div>
                                {/* Phone */}
                                <div className='relative flex items-center'>

                                    <label htmlFor="phone-number" className="sr-only">Phone Number
                                    </label>
                                    <input
                                        id="phone-number"
                                        name="phone-number"
                                        type="tel"
                                        autoComplete="tel"
                                        required
                                        className="appearance-none rounded-none relative block w-full px-8 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                                        placeholder="Phone Number"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                    />
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaPhone className='text-gray-400' />
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                    {/* Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4  rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-primary to-secondary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                        >
                            <p className='font-semibold text-[16px] py-1 m-0'>{isSignUp ? 'Sign Up' : 'Log In'}</p>
                        </button>
                    </div>
                    {/* Forget password */}
                    <div>
                        {isSignUp ? <div></div> :
                            <div className='text-gray-500 dark:text-primary/90'>
                                Lost Password ?
                                <Link className='ml-1 text-gray-800 no-underline text-sm dark:text-primary/100'> Click Here!
                                </Link>
                            </div>
                        }
                    </div>
                    {/* have an account */}
                    <div className="text-center">
                        <button
                            type="button"
                            className="text-sm  text-primary/100 hover:text-primary-dark"
                            onClick={() => setIsSignUp(!isSignUp)}
                        >
                            {isSignUp ? 'Already have an account? Log In' : 'Don\'t have an account? Sign Up'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUpAndLoginPage;
