import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import {
    AppProvider
} from "@shopify/polaris";

class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return(
            <>
                <div className="nav-bar-container">
                    <Link className="nav-bar-link" to={`/`}>Home</Link>
                    <Link className="nav-bar-link" to={`/staff`}>Staff</Link>
                    <Link className="nav-bar-link" to={`/picks`}>Picks</Link>
                </div>
            </>
        );
    }
}

export default NavBar;