import React, { Component } from "react";
import SurveyItem from "./SurveyItem";

// import { Link } from 'react-router-dom';

import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';



const SurveysContainer = ({ isAdmin, surveys }) => {

    // save the survey id in local storage 
    function clicked(sId) {
        localStorage.setItem("survey_id", sId);
        document.location.href = '/surveyquestions';
    };

    try {
        // create a card for each survey and redirect the user to corresponding questions page
        return (
            <div className="surveys-container">
                {surveys.map((value, index) => {
                    return (
                        <SurveyItem key={index} text={value['title']} isAdmin={isAdmin} onClick={() => { clicked(value['id']) }} id={value['id']} />
                    )
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
