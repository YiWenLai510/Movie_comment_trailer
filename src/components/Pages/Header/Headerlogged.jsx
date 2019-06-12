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
                <Link to="/login" className="link-left">
                        <img
                        src={profilePicURL}
                        alt=""
                        className="profileimg"
                    />
                </Link>
                
            </div>
        </header>
    );
};

export default Header;
