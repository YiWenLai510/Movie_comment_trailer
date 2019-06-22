import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = ({profilePicURL,name}) => {
    return (
        <header className="header">
            <div>
                <Link to="/">
                    <img
                        src="./images/reactMovie_logo.png"
                        alt=""
                        className="react-movie"
                    />
                </Link>
            </div>
            <div>
                <img
                    src={profilePicURL}
                    alt=""
                    className="profileimg"
                />
                <i className="fas fa-sign-out-alt login-icon"></i>
            </div>
        </header>
    );
};

export default Header;
