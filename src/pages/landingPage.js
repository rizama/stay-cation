import React from 'react'
import Header from 'parts/Header'

import landingPage from 'json/landingPage.json';
import Hero from 'parts/Hero';
import MostPicked from 'parts/MostPicked';

export default function LandingPage(props) {
    return (
        <>
            <Header {...props}></Header>
            <Hero data={landingPage.hero}></Hero>
            <MostPicked data={landingPage.mostPicked}/>
        </>
    )
}
