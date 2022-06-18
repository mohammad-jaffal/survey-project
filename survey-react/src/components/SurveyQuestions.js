
import axios from 'axios';
import { React, useState, useEffect } from "react";

import PageTitle from "./PageTitle";
import QuestionsContainer from "./QuestionsContainer";





function SurveyQuestions({ isAdmin }) {

    var sId = localStorage.getItem("survey_id");



    // console.log("loading "+sId)

    function addQuestion() {
        console.log("Adding quest for " + sId)
        document.location.href = '/addquestion';
    }



    return (
        <div className="body-container">

            <PageTitle
                isAdmin={isAdmin}
                text={"Survey "+sId}
                btn_text={"Add"}
                onClick={addQuestion}
            />
            <QuestionsContainer isAdmin={isAdmin}/>

        </div>
    );
};

export default SurveyQuestions;
