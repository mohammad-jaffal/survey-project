import React, { Component } from "react";
import SurveyItem from "./SurveyItem";

// import { Link } from 'react-router-dom';

import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';



const SurveysContainer = ({ isAdmin, surveys }) => {

    // save the survey id in local storage 
    function clicked(sId) {
        localStorage.setItem("survey_id", sId);
    };

    try {
        // create a card for each survey and redirect the user to corresponding questions page
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

    }
    catch (err) {
        // console.log(err)
        return (<div className="surveys-container">Loading...</div>);
    }


};

export default SurveysContainer;
