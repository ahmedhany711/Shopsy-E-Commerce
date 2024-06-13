import React, { useEffect, useRef, useState } from "react";
import { IoCloseOutline, IoSearchSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Details } from "../../rtk/slices/DetailsSlice";

const SearchBar = ({ data }) => {
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(true);
  const searchRef = useRef(null);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setShowResults(event.target.value !== "");
  };

  const filteredData = data.filter((item) => {
    return (
      item.category.toString().toLowerCase().includes(searchQuery) ||
      item.id.toString().toLowerCase().includes(searchQuery) ||
      item.title.toString().toLowerCase().includes(searchQuery)
    );
  });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };
    document.addEventListener("mouseout", handleClickOutside);
    return () => {
      document.removeEventListener("mouseout", handleClickOutside);
    };
  }, [showResults]);

  return (
    <div
      className="flex justify-between items-center gap-5 text-gray-800  "
      ref={searchRef}
    >
      <div className="group relative hidden sm:block z-[99999]">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearch}
          className="w-[200px] sm:[200px]  px-3 py-1 group-hover:w-[360px] rounded-full  group-hover:rounded-none transition-all duration-500  border border-gray-300 focus:outline-none focus:border-2 focus:border-primary relative"
        />
        <IoSearchSharp className="absolute top-1/2 -translate-y-1/2 right-3 text-gray-400 group-hover:text-primary" />
      </div>

      {searchQuery && (
        <div className=" m-0 p-0 ">
          {/* Overlay */}
          <div className="w-screen h-screen bg-black/30 fixed top-0 left-0 backdrop-blur-sm z-10 ">
            <ul className="  fixed top-[56px] bg-white shadow-md left-[550px] w-[355px] z-[100] h-[300px] overflow-y-scroll  pt-4 px-0 text-gray-700 border-2  border-primary/100 ring-1 ring-primary/100 cursor-pointer">
              {/*  X Icon */}
              <div className="absolute right-8 top-0 block ml-2 mb-2">
                <IoCloseOutline
                  onClick={() => {
                    setSearchQuery("");
                  }}
                  className="absolute top-2 left-2 text-2xl text-gray-800 
                                            dark:text-white cursor-pointer   duration-300 hover:scale-110 hover:text-primary/100 
                                        dark:hover:text-primary/100  z-10"
                />
              </div>

              {filteredData.map((item) => (
                <li key={item.id} className=" my-3 hover:bg-primary/20      ">
                  {/* Render your search results here */}

                  <div className="flex gap-3 justify-between mx-4 items-center text-gray-700 hover:text-white   ">
                    {/* product name */}
                    <Link
                      className="no-underline   duration-300   text-gray-700 hover:text-white"
                      to={"/details"}
                      onClick={() => {
                        dispatch(Details(item));
                        setSearchQuery("");
                        setShowResults(false);
                      }}
                    >
                      {item.title}
                    </Link>

                    {/* product category */}
                    <Link
                      className="no-underline  text-sm text-gray-700 hover:text-white"
                      to={`/${item.link}`}
                      onClick={() => {
                        dispatch(Details(item));
                        setSearchQuery("");
                        setShowResults(false);
                      }}
                    >
                      ( {item.category} )
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
