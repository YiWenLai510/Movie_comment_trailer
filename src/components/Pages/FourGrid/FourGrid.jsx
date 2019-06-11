import React from "react";
import PropTypes from "prop-types";

import "./FourGrid.css";

const FourGrid = props => {
    const renderElements = () => {
        const gridElements = props.children.map((element, i) => {
            return (
                <div key={element.key} className="grid">
                    {element}
                </div>
            );
        });
        return gridElements;
    };
    return (
        <div className="rmdb-grid">
            <input type="checkbox" id="actor_input"></input>
            <label htmlFor="actor_input" className="first"><h1>{props.header}</h1></label>
            <ul className="four-col-grid">{renderElements()}</ul>
            
            {/*{props.header && !props.loading ? <h1>{props.header}</h1> : null}
            <div className="four-col-grid">{renderElements()}</div>*/}
        </div>
    );
};

FourGrid.propTypes = {
    header: PropTypes.string.isRequired,
    children: PropTypes.array.isRequired
};

export default FourGrid;
