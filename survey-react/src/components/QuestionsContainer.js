import React, { Component } from "react";
import QuestionItem from "./QuestionItem";

// import { Link } from 'react-router-dom';




const QuestionsContainer = ({ isAdmin }) => {

    const elements = [1, 2, 3, 4];

   

    return (

        <div className="questions-container">

            {elements.map((value, index) => {
                return (
                    <QuestionItem key={index} text={value+" question is written here"}/>
                )
            })}
        </div>
    );
};

export default QuestionsContainer;
