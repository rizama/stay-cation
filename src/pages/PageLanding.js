import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from 'parts/Header';
import Hero from 'parts/Hero';
import MostPicked from 'parts/MostPicked';
import Categories from 'parts/Categories';
import Testimony from 'parts/Testimony';
import Footer from 'parts/Footer';
// import landingPage from 'json/landingPage.json';

import { fetchPage } from 'store/actions/page';
class PageLanding extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    componentDidMount() {
        document.title = 'Staycation | Home';
        window.scrollTo(0, 0);

        if (!this.props.page.landingPage)
            this.props.fetchPage(`${process.env.REACT_APP_HOST}api/v1/member/landingpage`, 'landingPage');

    }

    render() {
        const { page } = this.props;

        if (!page.hasOwnProperty('landingPage')) return null;

        return (
            <>
                <Header {...this.props}></Header>
                <Hero refMostPicked={this.inputRef} data={page.landingPage.hero} />
                <MostPicked
                    refMostPicked={this.inputRef}
                    data={page.landingPage.mostPicked}
                />
                <Categories data={page.landingPage.categories} />
                <Testimony data={page.landingPage.testimonial} />
                <Footer />
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(PageLanding);
