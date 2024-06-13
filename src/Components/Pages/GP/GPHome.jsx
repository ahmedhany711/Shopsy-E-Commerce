import React from 'react';
import '../../../App.css';

const GPHome = () => {


    return (

        <div id='gpBanner' className='relative px-0 py-16'>
            {/* OverLay */}
            <div id='overlay' className='absolute top-0 left-0 w-full h-full bg-homeOverly opacity-65 px-8 py-16'></div>
            {/* Text area */}
            <div className='container mx-auto w-[1400px]'>
                <div className='text-white absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <div className='flex flex-col justify-center items-center gap-4 text-center'>
                        {/* Title */}
                        <div className='font-headingFont text-8xl font-medium w-[1050px]'>
                            Conquer depression with our guidance
                        </div>
                        {/* Content */}
                        <div className='font-contentFont text-sm max-w-[900px] mt-2'>
                            <p>Explore, overcome, and thrive with our platform. Connect with psychologists, receive expert advice, and join a supportive community. Access resourceful content for a brighter, healthier future.</p>
                        </div>
                        {/* Buttons */}
                        <div className='flex justify-center gap-3'>

                            {/* 1st */}
                            <button className='bg-navbarColor hover:bg-transparent hover:border-2 hover:border-white px-3 h-14 rounded-md text-xl font-contentFont font-light'>
                                CONSULTATION
                            </button>

                            {/* 2nd */}
                            <button className='bg-transparent hover:bg-white hover:text-navbarColor border-2 hover:border-0 border-white px-3 h-14 rounded-md text-xl font-contentFont font-light'>
                                MAKE APPOINTMENT
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GPHome;

