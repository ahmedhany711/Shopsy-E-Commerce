import React from 'react';
import img1 from '../../../photos/ui ux home/whyChooseUs1.jpg'
import img2 from '../../../photos/ui ux home/whyChooseUs2.jpg'
const WHyChoose = () => {
    const videoLink = "https://www.youtube.com/embed/FK2RaJ1EfA8?autoplay=1";

    return (
        <div>
            <div className='py-20 '>
                <div className='grid grid-rows-1 grid-cols-2'>
                    {/* 1 st Column */}
                    <div className='relative ps-0 pe-5 mb-3'>
                        <div className='mb-5 pb-5 pe-5'>
                            <img src={img1} alt="image" className='' />
                        </div>
                    </div>




                    {/* 2nd Column */}
                    <div>
                        <div>
                            <h1>hi</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WHyChoose;
