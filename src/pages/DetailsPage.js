import React, { Component } from 'react';
import Header from 'parts/Header';
import PageDetailTitle from 'parts/PageDetailTitle';
import itemDetails from 'json/itemDetails.json';
import FeaturedImage from 'parts/FeaturedImage';
import PageDetailDescription from 'parts/PageDetailDescription';
import BookingForm from 'parts/BookingForm';

export default class DetailsPage extends Component {
    
    componentDidMount(){
        window.title = "Details Page";
        window.scrollTo(0,0);
    };

    render() {
        const breadcrumb = [
            {pageTitle: "Home", pageHref:""},
            {pageTitle: "Home Details", pageHref:""}
        ];

        return (
            <>
                <Header {...this.props}></Header>
                <PageDetailTitle
                    breadcrumb={breadcrumb}
                    data={itemDetails}
                >
                </PageDetailTitle>   
                <FeaturedImage data={itemDetails.imageUrls}></FeaturedImage>
                <section className="container">
                    <div className="row">
                        <div className="col-7 pr-5">
                            <PageDetailDescription data={itemDetails}>
                            </PageDetailDescription>
                        </div>
                        <div className="col-5"><BookingForm itemDetails={itemDetails}></BookingForm></div>
                    </div>
                </section>
            </>
        );
    }
}
