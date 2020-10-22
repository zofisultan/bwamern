import React, { Component } from 'react';
import {connect} from 'react-redux';

import Header from 'parts/Header';
//import landingPage from 'json/landingPage.json';
import Hero from 'parts/Hero';
import MostPicked from 'parts/MostPicked';
import Categories from 'parts/Categories';
import Testimony from 'parts/Testimony';
import Footer from 'parts/Footer';

import {fetchPage} from 'store/actions/page';

// export default class Landingpage extends Component {
class Landingpage extends Component {    
    constructor(props){
        super(props);
        this.refMostPicked = React.createRef();
    }

    componentDidMount(){
        window.title = "Staycation | Home";
        window.scrollTo(0,0);

        if(!this.props.page.landingPage)
            this.props.fetchPage(`${process.env.REACT_APP_HOST}/api/v1/member/landing-page`, "landingPage")
    };

    render() {
        //console.log(this.props);
        const {page} = this.props;        

        if(!page.hasOwnProperty("landingPage")) return null;

        return <>
           <Header {...this.props}></Header>  
           <Hero 
                 refMostPicked={this.refMostPicked} 
                 data={page.landingPage.hero}
            />
           <MostPicked 
                refMostPicked={this.refMostPicked}
                data={page.landingPage.mostPicked}
            />
            <Categories                 
                data={page.landingPage.category}
            />
            <Testimony data={page.landingPage.testimonial}/>
            <Footer />
        </>
    }
}

const mapStateToProps = (state) =>({
    page: state.page //? state.page.landingPage : null
});

export default connect(mapStateToProps,{fetchPage})(Landingpage)
