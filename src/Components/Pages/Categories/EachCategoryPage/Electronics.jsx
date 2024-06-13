import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsFillCartCheckFill } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { fetchProducts } from "../../../../rtk/slices/AllProductsSlice";
import { DeleteFromCart, addToCart } from "../../../../rtk/slices/CartSLice";
import { Link } from "react-router-dom";
import img1 from "../../../../photos/Elctroncis/ele1.jpg";
import img2 from "../../../../photos/Elctroncis/ele2.jpg";
import { IoMdEye } from "react-icons/io";
import { Details } from "../../../../rtk/slices/DetailsSlice";
import Footer from "../../../Footer/Footer";
import {
  DeleteFromSaved,
  addToSaved,
} from "../../../../rtk/slices/SavedProductSlice";
import { FaHeart } from "react-icons/fa6";

const Electronics = () => {
  const products = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

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
      <div className=" mt-0 dark:mt-34 dark:pt-32 dark:bg-gray-900 h-[255vh] dark:h-[275vh] overflow-hidden ">
        {/* Body  */}
        <div className="container pb-20">
          {/* Title of Page */}
          <div
            data-aos="fade-up"
            className=" font-heading my-10 pt-10 flex items-center relative"
          >
            <div className="text-9xl absolute left-0 font-bold  text-primary/50 opacity-50 ">
              NEW
            </div>
            <h1 className="text-5xl font-medium  absolute left-10 top-5 text-gray-700 dark:text-white">
              Electronics
            </h1>
          </div>

          {/* Banners */}
          <div className="font-heading grid grid-cols-1 sm:grid-cols-2 py-10 gap-5">
            {/* 1st img */}
            <div data-aos="zoom-in" className="relative w-full">
              {/* Image */}
              <img
                src={img1}
                alt=""
                className="rounded-3xl w-full h-[400px] bg-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 rounded-3xl w-full "></div>
              {/* Text */}
              <div className="absolute top-6  inset-0 flex items-center justify-start flex-col text-white text-3xl  font-semibold sm:text-xl md:text-3xl">
                Premium Quality
              </div>
              <div className="absolute top-16  inset-0 flex items-center justify-start flex-col text-white  font-bold text-4xl sm:text-2xl md:text-4xl ">
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
                className="rounded-3xl w-full h-[400px] bg-cover bg-center"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 rounded-3xl w-full"></div>

              {/* Text */}
              <div className="absolute top-4  inset-0 flex items-center flex-col justify-start text-white  font-bold text-4xl sm:text-2xl md:text-2xl lg:text-4xl">
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

          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12 place-items-center items-start ">
            {products.map((data) => (
              <>
                {data.category === "electronics" ? (
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
                            className={`w-[220px] h-[250px]     shadow-md  hover:scale-110  rounded-lg p-1 object-contain `}
                          />
                          <IoMdEye className="absolute top-3    right-3 text-gray-200 text-sm group-hover:text-primary/100" />
                        </Link>
                      </div>

                      <div
                        id="photoDetails"
                        className="mt-3 flex flex-col  sm:block  "
                      >
                        {/* Title */}
                        <h3 className="font-heading font-semibold text-2xl sm:text-xl line-clamp-1 hover:line-clamp-3 mb-4">
                          {data.title}
                        </h3>

                        {/* Category */}
                        <h3 className=" text-xs   mb-2 dark:text-secondary/70">
                          {data.category}
                        </h3>

                        {/* Price */}
                        <p className="text-xl "> $ {data.price} </p>

                        {/* Rating */}
                        <div className="flex items-center gap-1 ">
                          <FaStar className="text-yellow-400 dark:text-yellow-400" />
                          <span className="text-md">
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
        <Footer />
      </div>

      <Footer />
    </>
  );
};

export default Electronics;
