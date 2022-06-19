
import axios from 'axios';
import { React, useState, useEffect } from "react";
import Button from './Button';

import PageTitle from "./PageTitle";
import QuestionsContainer from "./QuestionsContainer";



function SurveyQuestions({ isAdmin }) {

    var sId = localStorage.getItem("survey_id");

    const [survey, setSurvey] = useState('');

    const fetchSurvey = async () => {

        try {
            // get the survey to show title
            await axios.post(`http://127.0.0.1:8000/api/getsurvey`, {
                survey_id: sId,
            })
                .then(res => {
                    const mydata = res.data;
                    // console.log(mydata['surveys'])
                    setSurvey(mydata['survey']['title']);
                })

        } catch (err) {
            // console.log(err)
        }

    }

    useEffect(() => {

        fetchSurvey();

    }, []);

    // console.log("loading "+sId)

    function addQuestion() {
        document.location.href = '/addquestion';
    }

    function viewAnswers() {
        window.location.href= '/viewanswers'
    }

    // document.getElementById("view_ans_btn").addEventListener("click", function(){})

    return (
        <div className="body-container">
            <PageTitle
                isAdmin={isAdmin}
                text={survey}
                btn_text={"Add"}
                onClick={addQuestion}
            />
            { isAdmin? <button className='li-btn'  onClick={()=>{viewAnswers()}}>Answers</button>: "" }
            <QuestionsContainer isAdmin={isAdmin} />
            <div className='btn-container'>
                <button className='li-btn'  id="ansr_btn">Submit</button>
                </div>
        </div>
    );
};

export default SurveyQuestions;
