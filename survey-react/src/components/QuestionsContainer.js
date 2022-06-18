import React, { Component } from "react";
import QuestionItem from "./QuestionItem";

// import { Link } from 'react-router-dom';




const QuestionsContainer = ({ isAdmin, questions}) => {

    const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9];

   console.log("ahh"+questions)

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
