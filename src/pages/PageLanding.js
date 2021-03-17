import React, { Component } from "react";

import Header from "parts/Header";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";
import landingPage from 'json/landingPage.json';

export default class PageLanding extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    componentDidMount() {
        document.title = "Staycation | Home";
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <>
                <Header {...this.props}></Header>
                <Hero refMostPicked={this.inputRef} data={landingPage.hero} />
                <MostPicked
                    refMostPicked={this.inputRef}
                    data={landingPage.mostPicked}
                />
                <Categories data={landingPage.categories} />
                <Testimony data={landingPage.testimonial} />
                <Footer />
            </>
        );
    }
}