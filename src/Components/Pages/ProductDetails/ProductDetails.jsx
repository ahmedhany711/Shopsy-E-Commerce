import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { BsFillCartCheckFill } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import { DeleteFromCart, addToCart } from "../../../rtk/slices/CartSLice";
import Footer from "../../Footer/Footer";

const ProductDetails = () => {
  const products = useSelector((state) => state.DetailsSlice);
  const dispatch = useDispatch();

  //cart
  const [clickedCart, setClickedCart] = useState([]);

  useEffect(() => {
    localStorage.setItem("clickedCarts", JSON.stringify(clickedCart));
  }, [clickedCart]);

  return (
    <>
      <div className="pt-16 pb-20 dark:bg-gray-800 dark:text-white dark:mt-32  mt-32">
        <div className="container">
          {/* Body Section */}
          <div>
            <div className="  place-items-center items-start">
              {products.map((data) => (
                <>
                  <div
                    data-aos="fade-up"
                    data-aos-delay={data.aosDelay}
                    key={data.id}
                    className="mt-[12px]  gap-5 items-center md:items-start justify-center flex flex-col md:flex-row"
                  >
                    <div className="flex justify-center items-center ">
                      <img
                        src={data.img || data.image}
                        alt=""
                        className={`w-[300px] h-[400px] object-contain shadow-sm rounded-lg  `}
                      />
                    </div>

                    <div
                      id="Details"
                      className=" flex flex-col  md:block text-center md:text-left w-[600px] "
                    >
                      {/* Title */}
                      <h3 className="font-semibold text-5xl">{data.title}</h3>

                      {/* Color
                                            <p
                                                className='text-xl mt-5 text-gray-900 dark:text-gray-200'>
                                                {data.color ? data.color : null}
                                            </p> */}
                      {/* Price */}
                      <p className="text-4xl mt-3 text-gray-600 dark:text-gray-200">
                        ${data.price}
                      </p>
                      {/* Rating */}
                      <div className="flex items-center gap-2 justify-center -mt-2 md:justify-between text-center md:text-left w-full">
                        <div className="flex items-center gap-1 mt-3 text-center md:text-left justify-center">
                          <FaStar className=" text-2xl text-yellow-400 dark:text-yellow-400" />
                          <span className="text-2xl text-center md:text-left">
                            {data.rating.rate ? data.rating.rate : data.rating}
                          </span>
                        </div>
                      </div>
                      {/* Cart icon */}
                      <div className=" p-1 mt-3 mx-auto md:mx-0">
                        {clickedCart.includes(data.id) ? (
                          <BsFillCartCheckFill
                            className={`text-3xl text-left 
                                                    text-primary/100 cursor-pointer
                                                        dark:text-white
                                                        `}
                            onClick={() => {
                              dispatch(DeleteFromCart(data));
                              setClickedCart((prev) =>
                                prev.filter((id) => id !== data.id)
                              );
                            }}
                          />
                        ) : (
                          <BsCart
                            className="text-3xl cursor-pointer  text-left  text-primary/100
                                                    dark:text-white"
                            onClick={() => {
                              dispatch(addToCart(data));
                              setClickedCart((prev) => [...prev, data.id]);
                            }}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
          {/* Button
                    <div className='flex justify-center mt-10 mb-6'
                        data-aos='fade-up'>
                        <Link
                            to={'/orderNow'}
                            className=' bg-gradient-to-r from-primary to-secondary text-xl text-white text-center px-3 py-2 rounded-2xl drop-shadow-md  duration-300 hover:scale-110 no-underline'>
                            Order Now
                        </Link>
                    </div> */}
        </div>
      </div>
    <Footer/>
    </>
  );
};

export default ProductDetails;
