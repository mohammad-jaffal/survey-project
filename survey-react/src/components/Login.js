// import React from "react";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from "./Button";
import axios from 'axios';



const Login = () => {

    async function loginFunction() {
        var email = document.getElementById("li_email").value;
        var password = document.getElementById("li_password").value;
        if (email == "" || password == "") {
            alert('Fill All')
        } else {

                await axios.post(`http://127.0.0.1:8000/api/login`, {
                    email: email,
                    password: password,
                }).then(res => {
                        if (res['status'] == 200) {
                            // save access token in local storage for later use
                            localStorage.setItem('token', res.data['access_token'])
                            document.location.href = '/';
                        }
                    })
                    .catch(err => {
                        alert("Wrong Credentials!");
                    })

        }

    }




    return (
        <div id="login_form" className="login-form-container">
            <Link to={-1}>back</Link>
            <div className="form-group">
                <label>Email:</label>
                <input type="text" id="li_email" className="form-control" required />
            </div>
            <div className="form-group">
                <label>Password:</label>
                <input type="password" id="li_password" className="form-control" required />
            </div>
            <div className="form-group">
                <button className='li-btn' onClick={loginFunction}>Login</button>
            </div>

        </div>
    );
};

Login.defaultProps = {
    color: "red", //If no prop specified this will be selected
};

export default Login;
