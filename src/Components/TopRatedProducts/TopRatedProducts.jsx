import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../rtk/slices/ProductSlice";
import { FaStar } from "react-icons/fa";
import { BsFillCartCheckFill } from "react-icons/bs";
import { BsCart } from "react-icons/bs";

import { DeleteFromCart, addToCart } from "../../rtk/slices/CartSLice";
import { IoMdEye } from "react-icons/io";
import { Details } from "../../rtk/slices/DetailsSlice";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import { FaHeart } from "react-icons/fa6";
import {
  DeleteFromSaved,
  addToSaved,
} from "../../rtk/slices/SavedProductSlice";

const TopRatedProducts = ({ showButton, showFooter, inHome }) => {
  const topProducts = useSelector((state) => state.topProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Heart
  const [clickedHearts, setClickedHearts] = useState(() => {
    const storedState = localStorage.getItem("clickedHearts");
    return storedState ? JSON.parse(storedState) : {};
  });
  useEffect(() => {
    localStorage.setItem("clickedHearts", JSON.stringify(clickedHearts));
  }, [clickedHearts]);

  //cart
  const [clickedCart, setClickedCart] = useState(() => {
    const storedCart = localStorage.getItem("clickedCart");
    return storedCart ? JSON.parse(storedCart) : [];
  });
  useEffect(() => {
    localStorage.setItem("clickedCarts", JSON.stringify(clickedCart));
  }, [clickedCart]);

  //saved products
  const [topRatedSavedProducts, setTopRatedSavedProducts] = useState(() => {
    const storedProducts = localStorage.getItem("topRatedSavedProducts");
    return storedProducts ? JSON.parse(storedProducts) : [];
  });
  useEffect(() => {
    localStorage.setItem(
      "topRatedSavedProducts",
      JSON.stringify(topRatedSavedProducts)
    );
  }, [topRatedSavedProducts]);

  // Update clicked hearts and saved products
  // const updateSavedProducts = () => {
  //   const updatedSavedProducts = Object.keys(clickedHearts).reduce(
  //     (result, productId) => {
  //       if (clickedHearts[productId]) {

  //         const productToAdd = topProducts.find(
  //           (product) => product.id === productId
  //         );
  //         if (productToAdd) {
  //           result.push(productToAdd);
  //         }
  //       }
  //       return result;
  //     },
  //     []
  //   );
  //   setTopRatedSavedProducts(updatedSavedProducts);
  // };
  return (
    <>
      <div
        id="top-rated"
        className={`pt-12 pb-24 bg-gray-50 dark:bg-gray-900 dark:text-white  ${
          inHome ? "dark:mt-0" : "dark:mt-32"
        }`}
      >
        <div className="container ">
          {/* Header Section */}
          <div className=" mb-3 text-left">
            <p
              className="text-primary/100 text-md mb-2"
              data-aos="fade-zoom-in"
            >
              Top Rated Products for you
            </p>
            <h1 className="text-4xl font-bold font-heading" data-aos="fade-up ">
              Best Products
            </h1>
            <p
              className="text-xs text-gray-500 dark:text-gray-300"
              data-aos="fade-up"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Similique id maxime omnis neque repellendus eligendi.
            </p>
          </div>
          {/* Body section */}
          <div className="flex flex-col">
            <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:grid-row-1  overflow-hidden gap-20 sm:gap-8 place-items-center items-center z-100 pt-[60px] mt-10 ">
              {topProducts.map((data) => {
                return (
                  <div
                    data-aos="zoom-in"
                    key={data.id}
                    className="relative group max-w-[300px]  bg-white hover:bg-black/80 hover:text-white  rounded-3xl shadow-xl p-4  duration-300  dark:bg-secondary dark:text-white dark:hover:text-white dark:hover:bg-primary/20 my-4 pt-[45px]"
                  >
                    {/* Heart Saved Product */}
                    <FaHeart
                      className={`heart1 absolute top-8  right-3 ${
                        clickedHearts[data.id]
                          ? "text-primary/100"
                          : "text-gray-50 dark:text-gray-50"
                      }  text-sm cursor-pointer
                                hover:fill-primary/100 
                                `}
                      onClick={() => {
                        setClickedHearts((prev) => ({
                          ...prev,
                          [data.id]: !prev[data.id],
                        }));

                        if (!clickedHearts[data.id]) {
                          dispatch(addToSaved(data));
                          setTopRatedSavedProducts((prev) => [...prev, data]);
                        } else {
                          const updatedSavedProductss =
                            topRatedSavedProducts.filter(
                              (product) => product.id !== data.id
                            );

                          setTopRatedSavedProducts(updatedSavedProductss);
                          localStorage.setItem(
                            "savedProducts",
                            JSON.stringify(updatedSavedProductss)
                          );

                          dispatch(DeleteFromSaved(data));
                        }
                      }}
                    />
                    {/* Image Section */}
                    <div className="h-[120px]">
                      <Link
                        to={"/details"}
                        onClick={() => {
                          dispatch(Details(data));
                        }}
                      >
                        <img
                          src={data.img}
                          alt=""
                          className={`block 
                                        ${
                                          (data.id === 7) & (data.id !== 6)
                                            ? "max-w-[250px] "
                                            : "max-w-[160px]"
                                        }
                                        ${
                                          (data.id === 6) & (data.id !== 7)
                                            ? "max-w-[210px] -translate-y-32"
                                            : "max-w-[160px]"
                                        } 
                                        mx-auto  transform -translate-y-24 group-hover:scale-110 duration-300 drop-shadow-md z-100 `}
                        />
                        <IoMdEye className="absolute top-3    right-3 text-gray-200 text-sm group-hover:text-primary/100" />
                      </Link>
                    </div>

                    {/* details Section */}
                    <div className="p-4 text-center">
                      {/* star rating */}
                      <div className="flex justify-center items-center gap-2 mx-auto -mt-4 mb-3">
                        {Array.from({ length: 5 }).map((_, index) => {
                          const starValue = index + 1;

                          if (starValue <= data.rating) {
                            return (
                              <FaStar
                                key={index}
                                className="text-2xl text-yellow-400"
                              />
                            );
                          }
                          return (
                            <FaStar
                              key={index}
                              className="text-2xl text-yellow-400"
                            />
                          );
                        })}
                      </div>
                      {/* title */}
                      <h1 className="font-heading font-bold text-2xl">
                        {data.title}
                      </h1>
                      <p className="text-sm  text-gray-500 group-hover:text-white dark:text-white/60  duration-300 line-clamp-2">
                        {data.description}
                      </p>
                    </div>
                    {/* Cart section */}
                    <div className="text-center mx-auto w-full">
                      {clickedCart.includes(data.id) ? (
                        <BsFillCartCheckFill
                          className={`text-3xl text-center mx-auto
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
                          className="text-3xl cursor-pointer  text-center mx-auto text-primary/100
                                                    dark:text-white"
                          onClick={() => {
                            dispatch(addToCart(data));
                            setClickedCart((prev) => [...prev, data.id]);
                          }}
                        />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Button */}
            {showButton && (
              <div className="mx-auto my-4" data-aos="fade-up">
                <Link
                  to={"/top-rated"}
                  className=" font-heading no-underline bg-gradient-to-r from-primary to-secondary text-xl text-white px-3 py-2 rounded-2xl drop-shadow-md  duration-300 hover:scale-125"
                >
                  All Products
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Show footer or not */}
      {showFooter && <Footer />}
    </>
  );
};

export default TopRatedProducts;
