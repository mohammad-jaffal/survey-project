import React, { Component } from "react";
import SurveyItem from "./SurveyItem";

// import { Link } from 'react-router-dom';

import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';



const SurveysContainer = ({ isAdmin, surveys }) => {

    const elements = [1, 2, 3, 4, 5, 6];
    console.log(surveys[0])

    function clicked(x) {
        // 👇️ navigate to /
        // console.log(x);
        localStorage.setItem("survey_id", x);

    };

    return (

        <div className="surveys-container">
            {surveys.map((value, index) => {
                return (
                <Link key={index} to={"./surveyquestions"} style={{ textDecoration: 'none', color: 'black' }}>
                    <SurveyItem text={value['title']} isAdmin={isAdmin} onClick={() => { clicked(value['id']) }} />
                </Link>)

            })}

        </div>

    );
};

export default SurveysContainer;
