import React from "react";
import "../../App.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import man from "../../photos/Hero Section/man.png";
import woman from "../../photos/Hero Section/woman.png";
// import sale from "../../photos/offer-187b.png";
import woman2 from '../../photos/Women/img15-removebg-preview.png'
import './Hero.scss'
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
    image: woman2,
  },
  {
    id: 3,
    title: "70% off on all products Sale",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quibusdam unde eaque ratione natus vero aliquid.",
    image: woman,
  },
];

const Hero = () => {
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
        <div
          id="square" className="absolute z-100  translate-x-1/2  bg-secondary/100 dark:bg-gradient-to-r from-primary to-secondary  w-[900px] h-[850px] -top-[98%] right-[49%] sm:right-[45%]  sm:w-[950px] sm:h-[850px]  md:w-[1050px] md:h-[900px] md:-top-[111%] md:right-[42%]
          lg:w-[1200px] lg:h-[850px] lg:-top-[120%] lg:right-[18%]
          xl:w-[1350px] xl:h-[850px] xl:-top-[120%] xl:right-[14%]
          mx-auto rotate-[135deg] rounded-3xl"></div>

        {/* Home Page */}

        <div
          id={imageList.id}
          className="container pb-8 sm:pb-4  -mt-[76px] dark:-mt-24"
        >
          <Slider {...settings} className="z-10 ">
            {imageList.map((data) => {
              return (
                <>
                  <div id="text" className="flex items-center justify-center gap-3 lg:gap-0 -mt-1">
                    <div className="grid grid-cols-1 mt-32 lg:grid-cols-2 lg:mt-0 gap-4 lg:gap-0 order-4">
                      {/* Text Area Content */}
                      <div
                        id="hero-text"
                        className="relative flex flex-col lg:justify-center  gap-2 pt-0 sm:pl-12 z-10 pb-2 dark:text-white "
                      >
                        <h1
                          className="text-4xl font-heading lg:text-6xl"
                          data-aos="zoom-out"
                          data-aos-once="true"
                          data-aos-duration="500"
                        >
                          {data.title}
                        </h1>
                        <p
                          className="text-sm sm:text-md"
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
                            className="bg-gradient-to-r from-primary to-secondary text-white text-xl lg:text-3xl font-bold rounded-full transition-all duration-300 hover:scale-125 px-3 lg:px-4 py-2 lg:py-5 no-underline"
                          >
                            Order Now
                          </Link>
                        </div>
                      </div>

                      {/* Image Section */}
                      <div id="hero-img" className="mx-auto z-30 ">
                        <div
                          className="mx-auto"
                          data-aos="zoom-in"
                          data-aos-once="true"
                          data-aos-duration="800"
                        >
                          <img
                            src={data.image}
                            alt="men img"
                            className={`w-[400px] h-[400px] lg:w-[650px] lg:h-[650px]bg-transparent  ${data.id === 3 ? "object-contain" : "object-cover"
                              }`}
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
