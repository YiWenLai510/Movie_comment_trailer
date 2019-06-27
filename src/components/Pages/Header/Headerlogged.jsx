import React ,  { useState }from "react";
import { Link } from "react-router-dom";
import Favorite from "../Favorite/favorite";
import "./Header.css";

    

const Header = ({profilePicURL,name,logout,userId}) => { 
    const [showFavorite,set_showFavorite] = useState(false);
    return (
        <React.Fragment>
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
            <button onClick={()=>set_showFavorite(!showFavorite) }>
                Favorite
            </button>
            <div className="user_bar">
                <i className="fas fa-sign-out-alt login-icon  fa-3x" style={{color:"#16a150"}} onClick={logout}></i>
                <img
                    src={profilePicURL}
                    alt=""
                    className="profileimg"
                />
            </div>
        </header>
        <div style={ {display:showFavorite?"block":"none"} }>
            <Favorite userId={userId} />
        </div>
        
        </React.Fragment>
        
    );
};

export default Header;
