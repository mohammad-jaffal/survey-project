import React from "react";
import Button from "./Button";

const Navbar = ({ isAdmin}) => {
    return (
        <div className="navbar">
            <div className="main-logo">Survey</div>

            <span
            className="navbar-li"
            onClick={()=>{
                if(isAdmin){
                    window.location.replace("/");
                    console.log('logout');
                    isAdmin=false;
                }else{
                    console.log('logout');
                    isAdmin=true;

                }
            }}>
                {isAdmin? 'Logout' : 'Login'}
                
            </span>
        </div>
    );
};

export default Navbar;
