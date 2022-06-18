import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar = ({ isAdmin }) => {


    var token = localStorage.getItem("token");


    return (
        <div className="navbar">
            <div className="main-logo">Survey</div>

            <span
                className="navbar-li"
                onClick={() => {
                    // if the admin already logged in
                    if (isAdmin) {
                        // console.log('logout');
                        // logout api to destroy token
                        fetch("http://127.0.0.1:8000/api/logout", {

                            method: 'POST',
                            headers: {
                                Authorization: 'Bearer ' + token,
                                Accept: 'application/json',
                            },

                        }).then(res => {
                            // set admin as false 
                            isAdmin = false;
                            document.location.reload()
                        })
                            .catch(err => {
                                console.log(err)
                            })


                    } else {
                        document.location.href = '/login'
                    }
                }}>
                {/* show login or logout depending if admin is logged in  */}
                {isAdmin ? 'Logout' : 'Login'}

            </span>
        </div>
    );
};

export default Navbar;
