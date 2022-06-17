import React from "react";
import Button from "./Button";


const Navbar = ({ isAdmin}) => {
    if(isAdmin){
        // console.log('admin');
    }
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

export default Navbar;
