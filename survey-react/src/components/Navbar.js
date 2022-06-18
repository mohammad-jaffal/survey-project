import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar = ({ isAdmin}) => {
    return (
        <div className="navbar">
            <div className="main-logo">Survey</div>

            <span
            className="navbar-li"
            onClick={()=>{
                if(isAdmin){
                    console.log('logout'); 
                }else{
                    document.location.href = '/login'
                }
            }}>
                
                {isAdmin? 'Logout' : 'Login'}
                
            </span>
        </div>
    );
};

export default Navbar;
