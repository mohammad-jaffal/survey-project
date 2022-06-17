import React from "react";
import Button from "./Button";
import SurveyItem from "./SurveyItem";


const SurveysContainer = ({isAdmin}) => {
    if(isAdmin){
        console.log('admin');
    }
    function clicked(){
        console.log('clicked')
    }
    return (
        <div className="surveys-container">
            <SurveyItem text={'The title of this survey is written here '} isAdmin={isAdmin} onClick={clicked}/>
            <SurveyItem text={'The title of this su '} isAdmin={isAdmin} onClick={clicked}/>
            <SurveyItem text={'The tis survey is written here '} isAdmin={isAdmin} onClick={clicked}/>
            <SurveyItem text={'The title of this survey is written here '} isAdmin={isAdmin} onClick={clicked}/>
            <SurveyItem text={'The title survey is written here '} isAdmin={isAdmin} onClick={clicked}/>
            <SurveyItem text={'The title of this survey is written here '} isAdmin={isAdmin} onClick={clicked}/>
        </div>
    );
};

export default SurveysContainer;
