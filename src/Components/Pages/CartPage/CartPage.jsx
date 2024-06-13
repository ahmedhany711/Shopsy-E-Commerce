import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";
import {
  Decrement,
  DeleteFromCart,
  increment,
} from "../../../rtk/slices/CartSLice";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import {
  DeleteFromCheckOut,
  addToCheckOut,
} from "../../../rtk/slices/CheckSlice";

const Cartt = ({ handleOrderPopup }) => {
  const cartProduct = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  
  const totalPrice = cartProduct.reduce((acc, data) => {
    acc += data.price * data.quantity;
    return acc;
  }, 0);
  
  return (
    <div className="mb-28 mt-36 dark:mt-32  dark:mb-0 dark:pt-4 dark:pb-20 dark:bg-gray-900 dark:text-white ">
      <div className="container mx-auto">
        {/* Title */}
        <div className="flex justify-center mt-5 ">
          <h1 className="text-4xl  mb-7 items-center  text-primary/100 dark:text-white font-heading ">
            {" "}
          </h1>
        </div>
        {/*  Body */}
        <table className="w-full ">
          <thead>
            <tr className="bg-gray-800 dark:bg-gradient-to-r from-primary to-secondary rounded-md">
              <th className="py-3 text-xl px-4  text-white text-normal">
                PRODUCT
              </th>
              <th className="py-3 text-xl px-4  text-white uppercase">PRICE</th>
              <th className="py-3 text-xl px-4   text-white uppercase">
                Quantity
              </th>
              <th className="py-3 text-xl px-4   text-white uppercase">
                Total
              </th>
            </tr>
          </thead>

          {/* Body of Table */}
          <tbody>
            {cartProduct.map((item) => (
              <tr
                key={item.id}
                className=" border-b-2  relative "
                onChange={() => {
                  dispatch(addToCheckOut(item));
                }}
              >
                {/* Image and title and  X Icon */}
                <td className="py-4 px-4  flex items-center mr-7 sm:mr-20 md:mr-10 lg:mr-0">
                  {/*  X Icon */}
                  <div className="flex mr-5">
                    <IoCloseOutline
                      onClick={() => {
                        dispatch(DeleteFromCart(item));
                        dispatch(DeleteFromCheckOut(item));
                      }}
                      className="absolute top-2 left-2 text-2xl text-gray-800 
                                            dark:text-white cursor-pointer   duration-300 hover:scale-110 hover:text-primary/100 
                                        dark:hover:text-primary/100  z-10"
                    />
                  </div>

                  {/* image */}
                  <img
                    src={item.img || item.image}
                    alt={item.title}
                    className="w-20 h-20 sm:w-24 sm:h-24 mr-6 "
                  />

                  <span className="text-sm sm:text-xl font-bold text-gray-700 dark:text-white">
                    {item.title}
                  </span>
                </td>

                {/* Price */}
                <td className="py-2 px-4 text-xl ml-7 sm:ml-0">
                  $ {item.price}
                </td>
                {/* Quantity + - */}
                <td className="py-2 px-4 ">
                  <div className=" text-md flex justify-start  items-end">
                    <FaCirclePlus
                      className="text-xl mr-3  text-gray-600 dark:text-primary/100 cursor-pointer"
                      onClick={() => {
                        dispatch(increment(item));
                      }}
                    />
                    <p className="text-2xl m-0 text-bold text-gray-600 dark:text-white">
                      {item.quantity}
                    </p>
                    <FaCircleMinus
                      className="text-xl ml-3 text-gray-600  dark:text-primary/100 cursor-pointer"
                      onClick={() => {
                        dispatch(Decrement(item));
                      }}
                    />
                  </div>
                </td>
                {/* total price of each item */}
                <td className="py-2 px-2 sm:px-4 text-sm sm:text-xl font-bold sm:font-normal">
                  $ {item.price * item.quantity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Total price and Checkout button */}
        <div className="flex justify-end items-end flex-col mt-5">
          <h1 className="text-black  text-3xl  dark:text-white">
            <span className="text-primary/100 ml-4">
              $ {totalPrice.toFixed(2)}
              <span className="text-xl ml-2">USD</span>
            </span>
          </h1>
          <div className="text-sm text-gray-700 dark:text-gray-200">
            Shipping are not included
          </div>
          <div className="mt-5">
            <Link
              to={"/checkout"}
              className=" bg-gradient-to-r from-primary to-secondary text-xl text-white text-center px-3 py-3 rounded-md drop-shadow-md  transition-all duration-300  no-underline hover:scale-125 "
            >
              CHECKOUT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartt;
