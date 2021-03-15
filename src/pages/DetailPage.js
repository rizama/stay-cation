import React, { Component } from 'react';

import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import FeaturedImage from 'parts/FeaturedImage';

import ItemDetails from "json/itemDetails.json";

export default class DetailPage extends Component {

    componentDidMount() {
        window.title = "Detail Page";
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
                <FeaturedImage data={ItemDetails.imageUrls}/>
            </>
        );
    }
}
