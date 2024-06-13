import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsFillCartCheckFill } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import { DeleteFromCart, addToCart } from "../../../rtk/slices/CartSLice";
import { FaStar } from "react-icons/fa";
import { fetchProducts } from "../../../rtk/slices/AllProductsSlice";
import { Link } from "react-router-dom";
import { Details } from "../../../rtk/slices/DetailsSlice";
import {
  DeleteFromSaved,
  addToSaved,
} from "../../../rtk/slices/SavedProductSlice";
import { IoHeartDislike } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";

const AllProducts = () => {
  const products = useSelector((state) => state.allProducts);
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

  // saved products
  const [savedProducts, setSavedProducts] = useState(() => {
    const storedProducts = localStorage.getItem("savedProducts");
    return storedProducts ? JSON.parse(storedProducts) : [];
  });
  useEffect(() => {
    localStorage.setItem("savedProducts", JSON.stringify(savedProducts));
  }, [savedProducts]);

  //cart
  const [clickedCart, setClickedCart] = useState(() => {
    const storedCart = localStorage.getItem("clickedCart");
    return storedCart ? JSON.parse(storedCart) : [];
  });
  useEffect(() => {
    localStorage.setItem("clickedCarts", JSON.stringify(clickedCart));
  }, [clickedCart]);

  // Define categories, colors, sizes, and ratings
  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
    "kid's wear",
  ];
  const colors = [
    "White",
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Black",
    "Purple",
    "Oliver",
  ];
  const sizes = ["S", "M", "L", "XL", "XXL"];
  const ratings = [1, 2, 3, 4, 5];

  // State for selected filters
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    color: [],
    size: [],
    rating: [],
  });

  // Function to handle filter selection
  const handleFilterSelect = (filterType, value) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: prevFilters[filterType].includes(value)
        ? prevFilters[filterType].filter((item) => item !== value)
        : [...prevFilters[filterType], value],
    }));
  };

  // Function to filter products based on selected filters
  const filteredProducts = products.filter((product) => {
    return (
      // Filter by category
      (selectedFilters.category.length === 0 ||
        selectedFilters.category.includes(product.category)) &&
      // Filter by color
      (selectedFilters.color.length === 0 ||
        selectedFilters.color.includes(product.color)) &&
      // Filter by size
      (selectedFilters.size.length === 0 ||
        selectedFilters.size.includes(product.size)) &&
      // Filter by rating
      (selectedFilters.rating.length === 0 ||
        selectedFilters.rating.includes(product.rating))
    );
  });

  return (
    <div className="dark:mt-32 dark:bg-gray-800 mt-32">
      <div
        id="best-selling"
        className="pt-0 dark:pt-16 pb-20 dark:bg-gray-800 dark:text-white"
      >
        {/* Body Section */}
        <div className="col-12 flex">
          {/* Sidebar */}
          <div className="col-2 h-[100vbr] inset-0">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              {/* Categories */}
              <h3 className="text-lg font-semibold mb-2 text-primary/100">
                Categories
              </h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category}>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        value={category}
                        onChange={() =>
                          handleFilterSelect("category", category)
                        }
                      />
                      <span>{category}</span>
                    </label>
                  </li>
                ))}
              </ul>

              {/* Colors */}
              <h3 className="text-lg font-semibold mb-2 text-primary/100">
                Colors
              </h3>
              <ul className="space-y-2">
                {colors.map((color) => (
                  <li key={color}>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        value={color}
                        onChange={() => handleFilterSelect("color", color)}
                      />
                      <span>{color}</span>
                    </label>
                  </li>
                ))}
              </ul>

              {/* Sizes */}
              <h3 className="text-lg font-semibold mb-2 text-primary/100">
                Sizes
              </h3>
              <ul className="space-y-2">
                {sizes.map((size) => (
                  <li key={size}>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        value={size}
                        onChange={() => handleFilterSelect("size", size)}
                      />
                      <span>{size}</span>
                    </label>
                  </li>
                ))}
              </ul>

              {/* Ratings */}
              <h3 className="text-lg font-semibold mb-2 text-primary/100">
                Ratings
              </h3>
              <ul className="space-y-2">
                {ratings.map((rating) => (
                  <li key={rating}>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        value={rating}
                        onChange={() => handleFilterSelect("rating", rating)}
                      />
                      <span>{rating}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Clothes ********** */}
          <div className="col-10 mt-5">
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4  gap-12 md:gap-1 md:gap-y-10 place-items-center items-start ">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white p-4 rounded-lg shadow-lg relative"
                >
                  <div className="mt-[12px]">
                    {/* Image */}
                    <div className="mx-auto">
                      <Link
                        to={"/details"}
                        onClick={() => {
                          dispatch(Details(product));
                        }}
                      >
                        <img
                          src={product.image || product.img}
                          alt=""
                          className={`w-[200px] h-[250px] bg-top shadow-md hover:scale-110 rounded-lg px-1 ${
                            product.image ? "object-contain" : "object-cover"
                          }`}
                        />
                      </Link>
                    </div>

                    <div
                      id="photoDetails"
                      className="mt-3 flex flex-col sm:block"
                    >
                      {/* Title */}
                      <h3 className="font-semibold text-2xl sm:text-xl line-clamp-1 hover:line-clamp-3 mb-2 pt-1">
                        {product.title}
                      </h3>
                      {/* Category */}
                      <h3 className="text-xs mb-2 dark:text-secondary/70">
                        {product.category}
                      </h3>
                      {/* Price */}
                      <p className="text-2xl">$ {product.price}</p>

                      {/* Rating */}
                      <div className="">
                        {/* ICONS */}
                        <div className="flex items-end gap-0 justify-end -mt-2 sm:justify-end w-full absolute bottom-10 right-4">
                          <div className="flex flex-col gap-2 items-center">
                            <div className="flex items-center gap-1">
                              <FaStar className="text-yellow-400 dark:text-yellow-400" />
                              <span className="text-md">
                                {product.rating.rate
                                  ? product.rating.rate
                                  : product.rating}
                              </span>
                            </div>

                            {/* Heart Saved Product */}
                            <FaHeart
                              className={`heart1 text-xl ${
                                clickedHearts[product.id]
                                  ? "text-primary/100"
                                  : "text-primary/50 dark:text-gray-50"
                              }   cursor-pointer
                                hover:fill-primary/100 
                                `}
                              onClick={() => {
                                setClickedHearts((prev) => ({
                                  ...prev,
                                  [product.id]: !prev[product.id],
                                }));

                                if (!clickedHearts[product.id]) {
                                  dispatch(addToSaved(product));
                                  setSavedProducts((prev) => [
                                    ...prev,
                                    product,
                                  ]);
                                } else {
                                  // Remove from saved products in local storage
                                  const updatedSavedProducts =
                                    savedProducts.filter(
                                      (productt) => productt.id !== product.id
                                    );
                                  localStorage.setItem(
                                    "savedProducts",
                                    JSON.stringify(updatedSavedProducts)
                                  );

                                  // Remove from state
                                  setSavedProducts(updatedSavedProducts);

                                  dispatch(DeleteFromSaved(product));
                                }
                              }}
                            />
                            {/* Cart icon */}
                            <div className=" ">
                              {clickedCart.includes(product.id) ? (
                                <BsFillCartCheckFill
                                  className={`text-2xl text-center mx-auto
                                                    text-primary/100 cursor-pointer
                                                        dark:text-white
                                                        `}
                                  onClick={() => {
                                    dispatch(DeleteFromCart(product));
                                    setClickedCart((prev) =>
                                      prev.filter((id) => id !== product.id)
                                    );
                                  }}
                                />
                              ) : (
                                <BsCart
                                  className="text-2xl cursor-pointer  text-center mx-auto text-primary/100
                                                    dark:text-white"
                                  onClick={() => {
                                    dispatch(addToCart(product));
                                    setClickedCart((prev) => [
                                      ...prev,
                                      product.id,
                                    ]);
                                  }}
                                />
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
