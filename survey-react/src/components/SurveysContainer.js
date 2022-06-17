import React, { Component } from "react";
import Button from "./Button";
import SurveyItem from "./SurveyItem";
import Home from "./Home";

// import { Link } from 'react-router-dom';

import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';



const SurveysContainer = ({ isAdmin }) => {

    const elements = [1, 2, 3,4, 5, 6];

    function clicked(x) {
        // 👇️ navigate to /
        console.log(x)

    };


    return (

        <div className="surveys-container">
            {elements.map((value, index) => {
                return <SurveyItem key={index} text={'The title of this su '} isAdmin={isAdmin} onClick={()=>{clicked(value)}} />
            })}

            {/* <SurveyItem text={'The title of this su '} isAdmin={isAdmin} onClick={clicked} id={2} />
            <SurveyItem text={'The tis survey is written here '} isAdmin={isAdmin} onClick={clicked} id={3} />
            <SurveyItem text={'The title of this survey is written here '} isAdmin={isAdmin} onClick={clicked} id={4} />
            <SurveyItem text={'The title survey is written here '} isAdmin={isAdmin} onClick={clicked} id={5} />
            <SurveyItem text={'The title of this survey is written here '} isAdmin={isAdmin} onClick={clicked} id={6} /> */}


        </div>

    );
};

export default SurveysContainer;



{/* <Link to={"./home"}>
            <SurveyItem text={'The title of this survey is written here '} isAdmin={isAdmin} onClick={clicked} id={1}/>
            </Link> */}