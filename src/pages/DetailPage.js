import React, { Component } from 'react';

import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import FeaturedImage from 'parts/FeaturedImage';

import ItemDetails from "json/itemDetails.json";
import PageDetailDescription from 'parts/PageDetailDescription';

export default class DetailPage extends Component {

    componentDidMount() {
        document.title = "Detail Page";
        window.scrollTo(0, 0);
    }

    render() {

        const breadcrumb = [
            { pageTitle: "Home", pageRef: "" },
            { pageTitle: "House Detail", pageRef: "" },
        ];

        return (
            <>
                <Header {...this.props} />
                <PageDetailTitle
                    breadcrumb={breadcrumb}
                    data={ItemDetails}
                />
                <FeaturedImage data={ItemDetails.imageUrls} />
                <section className="container">
                    <div className="row">
                        <div className="col-7 pr-5">
                            <PageDetailDescription data={ItemDetails}></PageDetailDescription>
                        </div>
                        <div className="col-5">Booking Form</div>
                    </div>
                </section>
            </>
        );
    }
}
