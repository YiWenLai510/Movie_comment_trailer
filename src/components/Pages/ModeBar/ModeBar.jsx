import React, { Component } from "react";
import PropTypes from "prop-types";

import "./ModeBar.css";
export default class SearchBar extends Component {
    componentDidMount(){
        console.log(this.props.changemode)
    }
    componentDidUpdate(){
    }

    render() {
        return (
            <div className="mode-bar">
                <ul>
                    <button onClick={()=>this.props.changemode('popular')}>POPULAR</button>
                    <button onClick={()=>this.props.changemode('top_rated')}>TOP-RATED</button>
                    <button onClick={()=>this.props.changemode('upcoming')}>UPCOMING</button>
                </ul>
            </div>
        );
    }
}

SearchBar.popTypes = {
    searchTerms: PropTypes.func.isRequired
};
