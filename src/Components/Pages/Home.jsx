import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Products from '../products/TrendingProducts';
import TopRatedProducts from '../TopRatedProducts/TopRatedProducts';
import Banner from '../Banner/Banner';
import TopSelling from '../products/TopSelling';
import Testimonials from '../Testimonials/Testimonials';
import Footer from '../Footer/Footer';
import Popup from '../Popup-Order/Popup';
import Hero from '../Hero/Hero';
import Landing from '../Landing/Landing';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {

    // Order Now Window
    const [orderPopup, setOrderPopup] = useState(false);

    return (
        <div>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Hero />
                            <Landing />
                            <Products showButton={true} showFooter={false} showSlider={true} inHome={true} />
                            <Subscribe />
                            <TopRatedProducts showButton={true} showFooter={false} inHome={true} />
                            <Banner />
                            <TopSelling showButton={true} showFooter={false} inHome={true} />
                            <Testimonials />
                            <Footer />
                            <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
                        </>
                    }
                ></Route>
            </Routes>
        </div>
    );
}

export default Home;

