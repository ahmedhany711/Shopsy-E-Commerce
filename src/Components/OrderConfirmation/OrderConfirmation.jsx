import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const OrderConfirmation = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const generateOrderNumber = () => {
        // Generate a random order number (you can use any method here)
        return Math.floor(Math.random() * 1000000);
    };
    const orderNumber = generateOrderNumber();
    const correctlyPlaced = () => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Order Placed Successfully",
            text: ` Order Number (  ${orderNumber}  ) `,
            showConfirmButton: false,
            timer: 3500,
        });
    }

    return (
        <div className='pb-20'>
            {/* Confirm Payment */}
            <div className='pl-5 mt-10 '>
                <h2 className="text-xl font-semibold mb-4 text-center">
                    Confirm Payment
                </h2>
                {/* table */}
                <div className="border border-gray-200 p-4 rounded mx-auto max-w-xl ">
                    {cart && cart.map((item, index) => (
                        <div key={item.id}
                            className={`flex justify- between md: justify - start lg: justify - between items - center my - 2 p - 3 
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
                    {/* Prices */}
                    <div className='flex flex-col gap-3'>
                        <div className="flex justify-between items-center font-semibold">
                            <div>Products Price:</div>
                            <div className='mr-[75px] sm:mr-10 md:mr-0 lg:mr-4'>${cart.reduce((acc, item) => acc + item.price, 0)}</div>
                        </div>
                        <div className="flex justify-between items-center font-semibold">
                            <div>Shipping:</div>
                            <div className='mr-[75px] sm:mr-10 md:mr-0 lg:mr-4'>$10</div>
                        </div>
                        <div className="flex justify-between items-center font-semibold">
                            <div className='text-xl'>Total:</div>
                            <div className='mr-[75px] sm:mr-10 md:mr-0 lg:mr-4 text-xl'>${cart.reduce((acc, item) => acc + item.price, 0) + 10} </div>
                        </div>
                    </div>
                    {/* Buy Button */}
                    <div className='mt-10 text-center'>
                        <Link
                            onClick={() => correctlyPlaced()}
                            className=' bg-gradient-to-r from-primary to-secondary text-xl text-white text-center px-3 py-2 rounded-2xl drop-shadow-md  duration-300  no-underline hover:scale-110'>
                            Buy Now
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default OrderConfirmation;
