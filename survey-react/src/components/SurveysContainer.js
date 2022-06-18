import React, { Component } from "react";
import SurveyItem from "./SurveyItem";

// import { Link } from 'react-router-dom';

import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';



const SurveysContainer = ({ isAdmin, surveys }) => {
    if (surveys == null) {
        console.log("gottem")
    }
    console.log(surveys)

    function clicked(x) {
        // 👇️ navigate to /
        // console.log(x);
        localStorage.setItem("survey_id", x);

    };
    
    try {
        return (

            <div className="surveys-container">
                {/* {
            isAdmin ? <Button
            text={btn_text}
            onClick={onclick}
      /> :""} */}

                {surveys.map((value, index) => {
                    return (
                        <Link key={index} to={"./surveyquestions"} style={{ textDecoration: 'none', color: 'black' }}>
                            <SurveyItem text={value['title']} isAdmin={isAdmin} onClick={() => { clicked(value['id']) }} />
                        </Link>)

                })

                }

            </div>

        );

    } 
    catch (err) {
        console.log(err)
        return (<div className="surveys-container">NOTHING HERE TO SHOW!</div>);
    }


};

export default SurveysContainer;
