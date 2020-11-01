import React, { useRef } from 'react'
import Header from 'parts/Header'

import landingPage from 'json/landingPage.json';
import Hero from 'parts/Hero';
import MostPicked from 'parts/MostPicked';
import Categories from 'parts/Categories';
import Testimony from 'parts/Testimony';

export default function LandingPage(props) {
    const ref = useRef(null)

    return (
        <>
            <Header {...props}></Header>
            <Hero refMostPicked={ref} data={landingPage.hero}></Hero>
            <MostPicked refMostPicked={ref} data={landingPage.mostPicked} />
            <Categories data={landingPage.categories}/>
            <Testimony/>
        </>
    )
}
