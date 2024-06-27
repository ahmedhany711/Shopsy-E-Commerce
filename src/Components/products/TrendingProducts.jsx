import React, { useEffect, useState } from "react";
import "../../App.css";
import { FaStar } from "react-icons/fa";
import { BsFillCartCheckFill } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import { DeleteFromCart, addToCart } from "../../rtk/slices/CartSLice";
import "aos/dist/aos.css";
import "aos/dist/aos.js";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Details } from "../../rtk/slices/DetailsSlice";
import { IoMdEye } from "react-icons/io";
import Footer from "../Footer/Footer";
import { FaHeart } from "react-icons/fa6";
import {
  DeleteFromSaved,
  addToSaved,
} from "../../rtk/slices/SavedProductSlice";

const Products = ({ showButton, showFooter, showSlider, inHome }) => {
  const menProducts = useSelector((state) => state.trendingProducts);
  const dispatch = useDispatch();

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

  // saved products
  const [savedProducts, setSavedProducts] = useState(() => {
    const storedProducts = localStorage.getItem("savedProducts");
    return storedProducts ? JSON.parse(storedProducts) : [];
  });
  useEffect(() => {
    localStorage.setItem("savedProducts", JSON.stringify(savedProducts));
  }, [savedProducts]);

  // Update clicked hearts and saved products
  // const updateSavedProducts = () => {
  //   const updatedSavedProducts = Object.keys(clickedHearts).reduce(
  //     (result, productId) => {
  //       if (clickedHearts[productId]) {
  //         // If the heart is clicked, add the product to savedProducts
  //         const productToAdd = menProducts.find(
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
  //   setSavedProducts(updatedSavedProducts);
  // };

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <>
      <div
        id="trending-products"
        className={`pt-14 pb-20 dark:bg-gray-900 dark:text-white   ${
          inHome ? "dark:mt-0" : "dark:mt-32"
        }`}
      >
        <div className="container">
          {/* Header Section */}
          <div className=" mb-5 text-left">
            <p
              className="text-primary/100 text-md mb-2"
              data-aos="fade-zoom-in"
            >
              Top Trendy Products for you
            </p>
            <h1 className="text-4xl font-bold font-heading" data-aos="fade-up ">
              {" "}
              Trendy Products
            </h1>
            <p
              className="text-xs text-gray-500 dark:text-gray-300"
              data-aos="fade-up"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Similique id maxime omnis neque repellendus eligendi.
            </p>
          </div>

          {/* Body Section */}
          <div>
            {/* SLider */}
            {showSlider ? (
              <Slider {...settings} className="z-10 my-4">
                {menProducts.map((data) => (
                  <>
                    <div
                      data-aos="fade-up"
                      data-aos-delay={data.aosDelay}
                      key={data.id}
                      className="mt-[12px] mx-4 mb-4 group"
                    >
                      {/* Heart Saved Product */}
                      <FaHeart
                        className={`heart1 absolute top-8  right-3 ${
                          clickedHearts[data.id]
                            ? "text-primary/100"
                            : "text-gray-50 dark:text-gray-50"
                        }  
                        text-sm cursor-pointer
                                hover:fill-primary/100 
                                `}
                        onClick={() => {
                          setClickedHearts((prev) => ({
                            ...prev,
                            [data.id]: !prev[data.id],
                          }));

                          if (!clickedHearts[data.id]) {
                            dispatch(addToSaved(data));
                            setSavedProducts((prev) => [...prev, data]);
                          } else {
                            // Remove from saved products in local storage
                            const updatedSavedProducts = savedProducts.filter(
                              (product) => product.id !== data.id
                            );
                            localStorage.setItem(
                              "savedProducts",
                              JSON.stringify(updatedSavedProducts)
                            );

                            // Remove from state
                            setSavedProducts(updatedSavedProducts);

                            dispatch(DeleteFromSaved(data));
                          }
                        }}
                      />
                      {/* Image */}
                      <Link
                        to={"/details"}
                        onClick={() => {
                          dispatch(Details(data));
                        }}
                      >
                        <img
                          src={data.img}
                          alt=""
                          className={`w-[180px] h-[300px] object-cover shadow-md rounded-lg `}
                        />
                        <IoMdEye className="absolute top-3    right-3 text-gray-50 dark:text-gray-50 text-sm group-hover:text-primary/100" />
                      </Link>

                      <div
                        id="photoDetails"
                        className="mt-3 flex flex-col  sm:block  "
                      >
                        {/* Title */}
                        <h3 className=" font-heading font-semibold text-2xl">
                          {data.title}
                        </h3>
                        {/* Color */}
                        <p className="text-sm text-gray-600 dark:text-gray-200">
                          {data.color}
                        </p>

                        {/* Rating */}
                        <div className="flex items-center gap-1 justify-between -mt-2 sm:justify-between ">
                          <div className="flex items-center gap-1 ">
                            <FaStar className="text-yellow-400 dark:text-yellow-400" />
                            <span className="text-md">{data.rating}</span>
                          </div>

                          {/* Cart icon */}
                          <div className=" p-1">
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
                      </div>
                    </div>
                  </>
                ))}
              </Slider>
            ) : (
              <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 place-items-center items-start ">
                  {menProducts.map((data) => (
                    <>
                      <div
                        data-aos="fade-up"
                        data-aos-delay={data.aosDelay}
                        key={data.id}
                        className="mt-[12px] mx-4 mb-4 group"
                      >
                        {/* Image */}
                        <Link
                          to={"/details"}
                          onClick={() => {
                            dispatch(Details(data));
                          }}
                        >
                          <img
                            src={data.img}
                            alt=""
                            className={`w-[180px] h-[300px] object-cover shadow-md rounded-lg `}
                          />
                          <IoMdEye className="absolute top-3    right-3 text-gray-200 text-sm group-hover:text-primary/100" />
                        </Link>

                        <div
                          id="photoDetails"
                          className="mt-3 flex flex-col  sm:block  "
                        >
                          {/* Title */}
                          <h3 className=" font-heading font-semibold text-2xl">
                            {data.title}
                          </h3>
                          {/* Color */}
                          <p className="text-sm text-gray-600 dark:text-gray-200">
                            {data.color}
                          </p>
                          {/* Rating */}
                          <div className="flex items-center gap-1 justify-between -mt-2 sm:justify-between ">
                            <div className="flex items-center gap-1 ">
                              <FaStar className="text-yellow-400 dark:text-yellow-400" />
                              <span className="text-md">{data.rating}</span>
                            </div>
                            {/* Cart icon */}
                            <div className=" p-1">
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
                                    setClickedCart((prev) => [
                                      ...prev,
                                      data.id,
                                    ]);
                                  }}
                                />
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </>
            )}
          </div>
          {/* Button */}
          {showButton && (
            <div className="flex justify-center mt-10 mb-6" data-aos="fade-up">
              <Link
                to={"/trending-products"}
                className="font-heading  no-underline bg-gradient-to-r from-primary to-secondary text-xl text-white text-center px-3 py-2 rounded-2xl mt-4 drop-shadow-md  duration-300 hover:scale-110"
              >
                Trendy Products
              </Link>
            </div>
          )}
        </div>
      </div>
      {/* Show footer or not */}
      {showFooter && <Footer />}
    </>
  );
};

export default Products;
