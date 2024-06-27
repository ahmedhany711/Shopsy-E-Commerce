import "./App.css";
import { Route, Routes } from "react-router-dom";
import NAV from "./Components/NavBar/Navbar";

import Products from "./Components/products/TrendingProducts";
import Aos from "aos";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import "aos/dist/aos.js";

import Home from "./Components/Pages/Home";
import Cart from "./Components/Pages/Cart";
import AllProducts from "./Components/Pages/AllProducts/AllProducts";
import TopRatedProducts from "./Components/TopRatedProducts/TopRatedProducts";
import TopSelling from "./Components/products/TopSelling";
import AllCategories from "./Components/Pages/Categories/AllCategories";
import MensClothing from "./Components/Pages/Categories/EachCategoryPage/MensClothing";
import Womans from "./Components/Pages/Categories/EachCategoryPage/Womens";
import Electronics from "./Components/Pages/Categories/EachCategoryPage/Electronics";
import KidsWear from "./Components/Pages/Categories/EachCategoryPage/KidsWear";
import Jewelry from "./Components/Pages/Categories/EachCategoryPage/Jewelery";
import ProductDetails from "./Components/Pages/ProductDetails/ProductDetails";
import SignUpAndLoginPage from "./Components/Login_Signup/Login_Signup";
import Cartt from "./Components/Pages/CartPage/CartPage";
import CheckoutPage from "./Components/Pages/Checkout/CheckOut";
import About from "./Components/Pages/About/About";
import ContactUs from "./Components/Pages/ContactUs/ContactUs";

//photos
import product1 from "./photos/Mens/green.png";
import product2 from "./photos/Mens/T-shirt.png";
import product3 from "./photos/Mens/babyblue.png";
import product4 from "./photos/Mens/caarow.png";
import woman1 from "./photos/Women/imag1jpeg.jpeg";
import woman2 from "./photos/Women/img2.jpeg";
import woman3 from "./photos/Women/img33.jpg";
import woman4 from "./photos/Women/img44.jpg";
import woman5 from "./photos/Women/img5.jpg";
import woman6 from "./photos/Women/img10.jpg";
import woman7 from "./photos/Women/img11.jpg";
import woman8 from "./photos/Women/img12.jpg";
import woman9 from "./photos/Women/img13.jpg";
import woman10 from "./photos/Women/img14.jpg";
import woman11 from "./photos/Women/img15.jpg";
import woman12 from "./photos/Women/Land1.jpg";
import woman13 from "./photos/Women/Land2.jpg";

import men1 from "./photos/Mens/clem-onojeghuo-YhgXfs80RJo-unsplash.jpg";
import men2 from "./photos/Mens/man-navy-jacket-jeans-streetwear.jpg";
import men3 from "./photos/Mens/hassan-ouajbir-MkmcxwwCepY-unsplash.jpg";
import men4 from "./photos/Mens/mark-west-yTbfXZN27Ow-unsplash.jpg";
import men5 from "./photos/Mens/logan-weaver-lgnwvr-G5RSe8i_Id8-unsplash.jpg";
import men6 from "./photos/Mens/red_Shirt.jpg";
import men7 from "./photos/Mens/shirt1.jpg";
import men8 from "./photos/Mens/T-shirt1.jpg";
import men9 from "./photos/Mens/land1.jpg";
import men10 from "./photos/Mens/land2.jpg";
import OrderConfirmation from "./Components/OrderConfirmation/OrderConfirmation";
import OrderPlaced from "./Components/OrderPlaced/OrderPlaced";
import SavedProducts from "./Components/Pages/SavedProducts/SavedProducts";

function App() {
  const data = [
    {
      id: 1,
      category: "men's clothing",
      link: "MensClothing",
      img: product1,
      price: 25,
      color: "Green",
      title: "Causal Shirt",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
      rating: 5,
      aosDelay: 0,
    },
    {
      id: 2,
      category: "men's clothing",
      link: "MensClothing",
      img: product2,
      price: 15,
      color: "White",
      title: " T-Shirt",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
      rating: 4,
      aosDelay: 200,
    },
    {
      id: 3,
      category: "men's clothing",
      link: "MensClothing",

      img: product3,
      price: 35,
      color: "Baby-BLue",
      title: "Causal Jacket",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
      rating: 5,
      aosDelay: 400,
    },
    {
      id: 4,
      link: "MensClothing",
      category: "men's clothing",
      img: product4,
      title: "Causal Jacket",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
      price: 35,
      color: "white",
      rating: 4,
      aosDelay: 600,
    },
    //      woman
    {
      id: 5,
      img: woman1,
      category: "women's clothing",
      link: "WomansClothing",

      size: "L",
      color: "White",
      title: "Causal Skirt",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
      rating: 5,
      price: 30,
      aosDelay: 0,
    },
    {
      id: 6,
      img: woman2,
      category: "women's clothing",
      link: "WomansClothing",

      size: "XL",
      color: "Pink",
      title: " Causal Dress",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
      rating: 4,
      price: 20,
      aosDelay: 150,
    },
    {
      id: 7,
      img: woman3,
      category: "women's clothing",
      size: "XXL",
      link: "WomansClothing",

      color: "Purple",
      title: "Causal Dress",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
      rating: 5,
      price: 40,
      aosDelay: 300,
    },
    {
      id: 8,
      img: woman4,
      link: "WomansClothing",
      color: "Oliver",
      category: "women's clothing",
      size: "M",
      title: "Causal Dress",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
      rating: 4,
      price: 29,
      aosDelay: 450,
    },
    {
      id: 9,
      category: "women's clothing",
      size: "S",
      link: "WomansClothing",
      img: woman5,
      color: "Black",
      title: "Black Jacket",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
      rating: 4,
      price: 70,
      aosDelay: 600,
    },
    {
      id: 10,
      img: woman13,
      category: "women's clothing",

      color: "Dark Blue",
      link: "WomansClothing",
      size: "S",
      title: "Dark Blue Hody",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
      rating: 4,
      price: 70,
      aosDelay: 600,
    },

    {
      id: 11,
      img: woman11,
      color: "White",
      title: "White T-Shirt",
      category: "women's clothing",

      link: "WomansClothing",
      size: "S",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
      rating: 4,
      price: 70,
      aosDelay: 600,
    },
    {
      id: 12,
      img: woman9,
      color: "Blue",
      title: "Blue Blouse",
      category: "women's clothing",

      link: "WomansClothing",
      size: "S",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
      rating: 4,
      price: 29,
      aosDelay: 450,
    },
    {
      id: 13,
      img: woman10,
      color: "Pink",
      title: "Pink Cardigan",
      category: "women's clothing",

      link: "WomansClothing",
      size: "S",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
      rating: 4,
      price: 70,
      aosDelay: 600,
    },
    {
      id: 14,
      img: woman8,
      color: "Black",
      title: "Black Jacket",
      link: "WomansClothing",
      size: "S",
      category: "women's clothing",

      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
      rating: 5,
      price: 40,
      aosDelay: 300,
    },
    {
      id: 15,
      img: woman7,
      color: "Oliver",
      link: "WomansClothing",
      size: "S",
      category: "women's clothing",

      title: " Causal pants",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
      rating: 4,
      price: 20,
      aosDelay: 150,
    },
    {
      id: 16,
      img: woman6,
      color: "Beige",
      category: "women's clothing",

      link: "WomansClothing",
      size: "S",
      title: " Women's coat",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
      rating: 5,
      price: 30,
      aosDelay: 0,
    },

    //      men
    {
      id: 17,
      img: men1,
      category: "men's clothing",
      size: "M",
      link: "MensClothing",
      title: "BLack Jacket",
      rating: 5,
      color: "Black",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
      price: 50,
      aosDelay: 0,
    },
    {
      id: 18,
      category: "men's clothing",
      size: "XL",
      link: "MensClothing",

      img: men2,
      price: 30,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
      title: "Jeans Jacket",
      rating: 5,
      color: "Dark Blue",
      aosDelay: 200,
    },
    {
      id: 19,
      category: "men's clothing",
      img: men3,
      price: 25,
      size: "L",
      link: "MensClothing",

      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
      title: "Polo Shirt",
      rating: 4.5,
      color: "White",
      aosDelay: 400,
    },
    {
      id: 20,
      category: "men's clothing",
      size: "L",
      img: men4,
      link: "MensClothing",
      price: 15,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
      title: "Jeans Jacket",
      rating: 4,
      color: "Light Blue",
      aosDelay: 600,
    },
    {
      id: 21,
      size: "XXL",
      link: "MensClothing",
      img: men5,
      category: "men's clothing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
      title: " Classic Jacket",
      price: 65,
      rating: 4,
      color: "Black",
      aosDelay: 800,
    },
    {
      id: 22,
      size: "L",
      img: men6,
      category: "men's clothing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
      title: "Red Shirt",
      price: 50,
      rating: 5,
      link: "MensClothing",
      color: "Red",
      aosDelay: 820,
    },
    {
      id: 23,
      img: men7,
      size: "L",
      link: "MensClothing",

      category: "men's clothing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
      title: "Gray T-Shirt",
      price: 39,
      aosDelay: 830,
      rating: 5,
      color: "Gray",
    },
    {
      id: 24,
      size: "XL",
      link: "MensClothing",
      img: men8,
      category: "men's clothing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
      title: "Gray T-Shirt",
      price: 29,
      aosDelay: 840,
      rating: 3,
      color: "Gray",
    },
    {
      id: 25,
      link: "MensClothing",
      size: "XL",
      img: men9,
      category: "men's clothing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
      title: "Oliver Shirt",
      rating: 4,
      color: "Oliver",
      price: 35,
      aosDelay: 850,
    },
    {
      id: 26,
      size: "M",
      link: "MensClothing",
      img: men10,
      category: "men's clothing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
      title: "White Shirt",
      rating: 5,
      color: "White",
      price: 69,
      aosDelay: 860,
    },
    {
      id: 27,
      img: woman12,
      color: "Black",
      title: "Black Shoes",
      link: "WomansClothing",
      category: "women's clothing",

      size: "S",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
      rating: 4,
      price: 70,
      aosDelay: 600,
    },
  ];

  const [orderPopup, setOrderPopup] = useState(false);
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
    Aos.refresh();
  }, []);

  return (
    <div
      id="body"
      className="bg-white  dark:text-white duration-200 font-content text-gray-800 "
    >
      <NAV handleOrderPopup={handleOrderPopup} data={data} />
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route
          path="/top-rated"
          element={
            <TopRatedProducts
              showButton={false}
              showFooter={true}
              inHome={false}
            />
          }
        />
        <Route
          path="/trending-products"
          element={
            <Products
              showButton={false}
              showFooter={true}
              showSlider={false}
              inHome={false}
            />
          }
        />


        <Route path="checkout" element={<CheckoutPage />} />{" "}
        <Route
          path="/best-selling"
          element={
            <TopSelling showButton={false} showFooter={true} inHome={false} />
          }
        />
        {/* <Route path="/kids-wear" element={< />} / > */}{" "}
        {/* <Route path="/electronics" element={< />} / > */}{" "}
        <Route path="cart" element={<Cart />} />{" "}
        <Route path="cartt" element={<Cartt />} />{" "}
        <Route path="allProducts" element={<AllProducts />} />{" "}
        <Route path="allCategories" element={<AllCategories />} />{" "}
        <Route path="MensClothing" element={<MensClothing />} />{" "}
        <Route path="WomansClothing" element={<Womans />} />{" "}
        <Route path="electronics" element={<Electronics />} />{" "}
        <Route path="jewelery" element={<Jewelry />} />{" "}
        <Route path="Kids Wear" element={<KidsWear />} />{" "}
        <Route path="details" element={<ProductDetails />} />{" "}
        <Route path="signIn" element={<SignUpAndLoginPage />} />{" "}
        <Route path="about" element={<About />} />{" "}
        <Route path="contact" element={<ContactUs />} />{" "}
        <Route path="confirm" element={<OrderConfirmation />} />{" "}
        <Route path="OrderPlaced" element={<OrderPlaced />} />{" "}
        <Route path="saved" element={<SavedProducts />} />
      </Routes>
    </div>
  );
}

export default App;
