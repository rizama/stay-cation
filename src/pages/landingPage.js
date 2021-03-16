import React, { useRef, useEffect } from 'react';

import Header from 'parts/Header';
import landingPage from 'json/landingPage.json';
import Hero from 'parts/Hero';
import MostPicked from 'parts/MostPicked';
import Categories from 'parts/Categories';
import Testimony from 'parts/Testimony';
import Footer from 'parts/Footer';

export default function LandingPage(props) {
    const inputRef = useRef(null);

    useEffect(() => {
        document.title = "Staycation | Home";
        window.scrollTo(0, 0);
    });

    return (
        <>
            <Header {...props}></Header>
            <Hero refMostPicked={inputRef} data={landingPage.hero} ></Hero>
            <MostPicked refMostPicked={inputRef} data={landingPage.mostPicked} />
            <Categories data={landingPage.categories} />
            <Testimony data={landingPage.testimonial} />
            <Footer />
        </>
    );
}