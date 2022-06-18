import React, { Component } from "react";
import SurveyItem from "./SurveyItem";

// import { Link } from 'react-router-dom';

import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';



const SurveysContainer = ({ isAdmin }) => {

    const elements = [1, 2, 3, 4, 5, 6];

    function clicked(x) {
        // 👇️ navigate to /
        // console.log(x);
        localStorage.setItem("survey_id", x);

    };

    return (

        <div className="surveys-container">
            {elements.map((value, index) => {
                return (
                <Link key={index} to={"./home"} style={{ textDecoration: 'none', color: 'black' }}>
                    <SurveyItem text={`The title of ${value} is written here`} isAdmin={isAdmin} onClick={() => { clicked(value) }} />
                </Link>)

            })}

        </div>

    );
};

export default SurveysContainer;
