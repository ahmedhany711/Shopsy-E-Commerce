import React from "react";
import "../../App.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import man from "../../photos/Hero Section/man.png";
import woman from "../../photos/Hero Section/woman.png";
import sale from "../../photos/offer-187b.png";

const imageList = [
  {
    id: 1,
    title: "Up to 50% off on all Men's Wear",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quibusdam unde eaque ratione natus vero aliquid.",
    image: man,
  },
  {
    id: 2,
    title: "Up to 30% off on all Women's Wear",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quibusdam unde eaque ratione natus vero aliquid.",
    image: woman,
  },
  {
    id: 3,
    title: "70% off on all products Sale",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quibusdam unde eaque ratione natus vero aliquid.",
    image: sale,
  },
];

const Hero = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <>
      <div
        id="Hero"
        className="mt-32 pb-10 lg:pb-0 dark:pb-0  dark:pt-5 w-full min-h-[650px] sm:min-h-[650px] relative overflow-hidden flex justify-center items-center duration-200 dark:bg-gray-900 dark:text-white dark:mt-32 "
      >
        {/* Rotate square */}
        <div className="absolute z-100 -top-[90%] right-[58%] translate-x-1/2  bg-secondary/100 dark:bg-gradient-to-r from-primary to-secondary  w-[700px] h-[850px] sm:w-[800px] sm:h-[800px]  md:w-[1400px] md:h-[650px] md:-top-[111%] md:right-[11%] mx-auto rotate-[135deg] rounded-3xl"></div>

        {/* Home Page */}

        <div
          id={imageList.id}
          className="container pb-8 sm:pb-4  -mt-[76px] dark:-mt-24"
        >
          <Slider {...settings} className="z-10 ">
            {imageList.map((data) => {
              return (
                <>
                  <div className="flex items-start gap-3 -mt-1">
                    <div className="grid grid-cols-1 mt-20 sm:grid-cols-2 sm:mt-0 gap-b-4 ">
                      {/* text area Content `*/}

                      <div
                        id="hero-text"
                        className="  relative flex flex-col  justify-center gap-2 pt-0   sm:pl-12  z-10 pb-2 dark:text-white "
                      >
                        <h1
                          className="text-4xl font-heading  sm:text-5xl lg:text-7xl"
                          data-aos="zoom-out"
                          data-aos-once="true"
                          data-aos-duration="500"
                        >
                          {data.title}
                        </h1>
                        <p
                          className=" text-sm sm:text-md"
                          data-aos="fade-up"
                          data-aos-once="true"
                          data-aos-duration="500"
                          data-aos-delay="100"
                        >
                          {data.description}
                        </p>

                        <div
                          data-aos="fade-up"
                          data-aos-once="true"
                          data-aos-duration="500"
                          data-aos-delay="300"
                        >
                          <Link
                            to={"/orderNow"}
                            className="bg-gradient-to-r from-primary to-secondary text-white text-xl md:text-xl  font-bold  rounded-full  transition-all duration-300 hover:scale-125  px-3 md:px-3 py-2 md:py-3 
                                                            no-underline"
                          >
                            Order Now
                          </Link>
                        </div>
                      </div>

                      {/* Image Section*/}
                      <div id="hero-img" className="mx-auto  z-30">
                        <div
                          className="mx-auto"
                          data-aos="zoom-in"
                          data-aos-once="true"
                          data-aos-duration="800"
                        >
                          <img
                            src={data.image}
                            alt="men img"
                            className={`w-[300px] h-[300px]  bg-transparent object-contain
                                                        ${
                                                          data.id === 1
                                                            ? "object-cover"
                                                            : null
                                                        }
                                                        
                                                        `}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Hero;
