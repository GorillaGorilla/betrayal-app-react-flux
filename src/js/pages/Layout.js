/**
 * Created by frederickmacgregor on 28/07/2017.
 */
"use strict";

import React from "react";


import Nav from '../components/layout/Nav';


export default class Layout extends React.Component {
    render() {
        const {location} = this.props;
        const containerStyle = {
            marginTop: "60px"
        };
        return (
            <div>
                <Nav location={location} />
                <div class="container" style={containerStyle}>
                    <div class="row">
                        <div class="col-lg-12">
                            <h1></h1>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        )
    }



}