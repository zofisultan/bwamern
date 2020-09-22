import React, { Component } from 'react';
import Breadcrumb from 'elements/Breadcrumb';

export default class Example1 extends Component{
    render() {
        const breadcrumb = [
            {pageTitle: "Home", pageHref:""},
            {pageTitle: "Home Details", pageHref:""}
        ];

        return(
            <div className="container">
                <div
                    className="row align-items-center justify-content-center"
                    style={{height: "100vh"}}
                >
                    <div className="col-auto">
                        <Breadcrumb data={breadcrumb}/>
                    </div>
                </div>
            </div>
        );
    }
}