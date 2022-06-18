import React from "react";

import PageTitle from "./PageTitle";
import QuestionsContainer from "./QuestionsContainer";

function SurveyQuestions({ isAdmin }) {

    var survey_id = localStorage.getItem("survey_id");
    console.log(survey_id)
    function addQuestion() {
        console.log("Adding quest for " + survey_id)
    }


    return (
        <div className="body-container">

            <PageTitle
                isAdmin={isAdmin}
                text={"Survey "+survey_id}
                btn_text={"Add"}
                onClick={addQuestion}
            />
            <QuestionsContainer isAdmin={isAdmin} />

        </div>
    );
};

export default SurveyQuestions;
