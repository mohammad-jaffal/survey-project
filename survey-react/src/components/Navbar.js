import React from "react";
import Button from "./Button";


const Header = ({ isAdmin}) => {
    
    return (
        <div className="navbar">
            <div className="main-logo">Survey</div>

            <span
            className="navbar-li"
            onClick={()=>{
                console.log('login');
            }}>
                Login
            </span>
        </div>
    );
};

export default Header;
