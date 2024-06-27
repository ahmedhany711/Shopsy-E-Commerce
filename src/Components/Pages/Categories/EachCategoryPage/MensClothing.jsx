import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsFillCartCheckFill } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { fetchProducts } from "../../../../rtk/slices/AllProductsSlice";
import { DeleteFromCart, addToCart } from "../../../../rtk/slices/CartSLice";
import { Link } from "react-router-dom";
import img1 from "../../../../photos/mens-clothing.jpg";
import img2 from "../../../../photos/the-nix-company-4Hmj9gkyM6c-unsplash.jpg";
import { IoMdEye } from "react-icons/io";
import { Details } from "../../../../rtk/slices/DetailsSlice";
import Footer from "../../../Footer/Footer";
import {
  DeleteFromSaved,
  addToSaved,
} from "../../../../rtk/slices/SavedProductSlice";
import { FaHeart } from "react-icons/fa6";

const MensClothing = () => {
  const products = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  });

  //cart
  const [clickedCart, setClickedCart] = useState([]);

  useEffect(() => {
    localStorage.setItem("clickedCarts", JSON.stringify(clickedCart));
  }, [clickedCart]);

  // Heart
  const [clickedHearts, setClickedHearts] = useState(() => {
    const storedState = localStorage.getItem("clickedHearts");
    return storedState ? JSON.parse(storedState) : {};
  });
  useEffect(() => {
    localStorage.setItem("clickedHearts", JSON.stringify(clickedHearts));
  }, [clickedHearts]);

  // saved products
  const [savedProducts, setSavedProducts] = useState(() => {
    const storedProducts = localStorage.getItem("savedProducts");
    return storedProducts ? JSON.parse(storedProducts) : [];
  });
  useEffect(() => {
    localStorage.setItem("savedProducts", JSON.stringify(savedProducts));
  }, [savedProducts]);

  return (
    <>
      <div
        className=" mt-32 dark:mt-32  dark:bg-gray-900
                h-[400vh] dark:h-[422vh] overflow-hidden "
      >
        {/* Body  */}

        <div className="container pb-20">
          {/* Title of Page */}
          <div
            data-aos="fade-up"
            className=" font-heading my-10 pt-10 flex items-center relative "
          >
            <div className="font-heading text-9xl absolute left-0 font-bold  text-primary/50 opacity-50 ">
              {" "}
              NEW
            </div>
            <h1 className="font-heading text-3xl font-medium  absolute left-10 top-7 text-gray-700 dark:text-white">
              Men's <span className="font-bold">Clothing</span>
            </h1>
          </div>

          {/* Banners */}
          <div className="font-heading grid grid-cols-1 lg:grid-cols-2 py-10 gap-5">
            {/* 1st img */}
            <div data-aos="zoom-in" className="relative w-full">
              {/* Image */}
              <img
                src={img1}
                alt=""
                className="rounded-3xl w-full h-[400px] bg-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/70 rounded-3xl w-full "></div>
              {/* Text */}
              <div className="absolute -top-28  inset-0 flex items-center justify-center text-white text-3xl  font-semibold sm:text-xl md:text-3xl ">
                Premium Quality
              </div>
              <div className="absolute top-2  inset-0 flex items-center justify-center text-white  font-bold text-4xl sm:text-2xl md:text-4xl ">
                All Case Details
              </div>
              {/* Buy Now Button */}
              <div className="absolute bottom-16  sm:bottom-12 left-1/2 transform -translate-x-1/2">
                <Link
                  to={"/orderNow"}
                  className="text-white border border-white px-4 py-2 rounded-lg bg-transparent hover:bg-white hover:text-black transition-colors duration-300 no-underline"
                >
                  Buy Now
                </Link>
              </div>
            </div>

            {/* 2nd img */}
            <div data-aos="zoom-in" className="relative w-full">
              {/* Image */}
              <img
                src={img2}
                alt=""
                className="rounded-3xl w-full h-[400px] bg-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/70 rounded-3xl w-full"></div>

              {/* Text */}
              <div className="absolute -top-20  inset-0 flex items-center justify-center text-white  font-bold text-4xl sm:text-2xl md:text-2xl lg:text-4xl">
                Up To 70% Discount
              </div>

              {/* Buy Now Button */}
              <div className="absolute bottom-16  sm:bottom-12 left-1/2 transform -translate-x-1/2">
                <Link
                  to={"/orderNow"}
                  className="text-white border border-white px-4 py-2 rounded-lg bg-transparent hover:bg-white hover:text-black transition-colors duration-300 no-underline"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  gap-12 place-items-center items-start">
            {products.map((data) => (
              <>
                {data.category === "men's clothing" ? (
                  <>
                    <div
                      data-aos="fade-up"
                      // data-aos-delay={data.aosDelay}
                      key={data.id}
                      className="mt-[12px] group relative"
                    >
                      {/* Image */}
                      <div className="mx-auto ">
                        <Link
                          to={"/details"}
                          onClick={() => {
                            dispatch(Details(data));
                          }}
                        >
                          <img
                            src={data.image || data.img}
                            alt=""
                            className={`w-[200px] h-[250px]  bg-top  shadow-md  hover:scale-110  rounded-lg px-1 ${
                              data.image ? "object-contain p-0" : "object-cover"
                            } `}
                          />
                          <IoMdEye className="absolute top-3    right-3 text-gray-200 text-sm group-hover:text-primary/100" />
                        </Link>
                      </div>

                      <div
                        id="photoDetails"
                        className="mt-3 flex flex-col  sm:block  "
                      >
                        {/* Title */}
                        <h3 className="font-heading font-semibold text-2xl sm:text-xl line-clamp-1 hover:line-clamp-3 mb-2">
                          {data.title}
                        </h3>

                        {/* Category */}
                        <h3 className=" text-xs   mb-2 dark:text-secondary/70">
                          {data.category}
                        </h3>

                        {/* Price */}
                        <p className="text-2xl "> $ {data.price} </p>

                        {/* Rate */}
                        <div className="flex items-center gap-1 ">
                          <FaStar className="text-yellow-400 dark:text-yellow-400 text-xl" />
                          <span className="text-xl">
                            {data.rating.rate ? data.rating.rate : data.rating}
                          </span>
                        </div>
                        {/* Icons */}
                        <div className="flex items-center gap-2 justify-end  sm:justify-end  absolute bottom-0 right-0">
                          <div className="flex flex-col items-center gap-1">
                            {/* Heart Saved Product */}
                            <FaHeart
                              className={`heart1 text-xl ${
                                clickedHearts[data.id]
                                  ? "text-primary/100"
                                  : "text-primary/50 dark:text-gray-50"
                              }   cursor-pointer
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
                                  const updatedSavedProducts =
                                    savedProducts.filter(
                                      (productt) => productt.id !== data.id
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
                    </div>
                  </>
                ) : null}
              </>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MensClothing;
