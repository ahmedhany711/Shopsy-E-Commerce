import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoMdEye } from "react-icons/io";
import { Details } from "../../../rtk/slices/DetailsSlice";
import { Link } from "react-router-dom";

import { IoHeartDislike } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { BsFillCartCheckFill } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import { DeleteFromCart, addToCart } from "../../../rtk/slices/CartSLice";
import {
  DeleteFromSaved
} from "../../../rtk/slices/SavedProductSlice";

export default function SavedProducts() {
  //Data From Store (Redux)
  var data = useSelector((state) => state.saved);
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


  const [savedProducts, setSavedProducts] = useState(() => {
    const storedProducts = localStorage.getItem("savedProducts");
    return storedProducts ? JSON.parse(storedProducts) : [];
  });
  useEffect(() => {
    localStorage.setItem("savedProducts", JSON.stringify(savedProducts));
  }, [savedProducts]);


  const storedProducts = localStorage.getItem("savedProducts");
  const stored = JSON.parse(storedProducts);

  useEffect(() => {
    localStorage.setItem("savedProducts", JSON.stringify(stored));
  }, [stored]);


  data = [...data, ...stored];

  
  const uniqueProducts = data.reduce((acc, current) => {
    const isDuplicate = acc.some((product) => product.id === current.id);

    
    if (!isDuplicate) {
      acc.push(current);
    }

    return acc;
  }, []);

  return (
    <div className="mt-36">
      <div className="container py-10">
        <div
          className={`
        ${
          data.length <= 3 ? "grid grid-cols-3 gap-3" : "grid grid-cols-4 gap-5"
        }
          `}
        >
          {uniqueProducts.map((data) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="mt-[12px] mx-4 mb-4 group w-[80%]"
              >
                {/* Image */}
                <Link
                  to={"/details"}
                  onClick={() => {
                    dispatch(Details(data));
                  }}
                >
                  <img
                    src={data.img || data.image}
                    alt=""
                    className={`w-full h-[250px] object-contin   shadow-md rounded-lg `}
                  />
                  <IoMdEye className="absolute top-3    right-3 text-gray-50 dark:text-gray-50 text-sm group-hover:text-primary/100" />
                </Link>

                <div
                  id="photoDetails"
                  className="mt-3 flex flex-col  sm:block  "
                >
                  {/* Title */}
                  <h3 className=" font-heading font-semibold text-xl line-clamp-1 hover:line-clamp-3">
                    {data.title}
                  </h3>
                  {/* Color */}
                  <p className="text-sm text-gray-600 dark:text-gray-200">
                    {data.color || "  "}
                  </p>
                  <p className="text-2xl mt-3 text-gray-600 dark:text-gray-200">
                    ${data.price}
                  </p>
                  {/* ICONS */}
                  <div className="flex items-end gap-0 justify-end -mt-2 sm:justify-end w-full absolute bottom-0 right-0">
                    <div className="flex flex-col gap-2 items-center">
                      {/* Rating */}
                      <div className="flex items-center gap-1  ">
                        <FaStar className="text-yellow-400 dark:text-yellow-400" />
                        <span className="text-md">
                          {data.rating.rate ? data.rating.rate : data.rating}
                        </span>
                      </div>

                      {/* Heart Saved Product */}
                      <IoHeartDislike
                        className={`heart1 text-2xl ${
                          clickedHearts[data.id]
                            ? "text-primary/100"
                            : "text-primary/50 dark:text-gray-50"
                        }   cursor-pointer
          hover:fill-primary/100 
          `}
                        onClick={() => {
                          if (clickedHearts[data.id]) {
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

                            // Toggle clicked heart state
                            setClickedHearts((prev) => ({
                              ...prev,
                              [data.id]: !prev[data.id],
                            }));
                          }
                        }}
                      />

                      {/* Cart icon */}
                      <div className=" ">
                        {clickedCart.includes(data.id) ? (
                          <BsFillCartCheckFill
                            className={`text-22 text-center mx-auto
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
                            className="text-2xl cursor-pointer  text-center mx-auto text-primary/100
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
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
