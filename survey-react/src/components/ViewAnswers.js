
import axios from 'axios';
import { React, useState, useEffect, Link } from "react";
import AnswerItem from './AnswerItem';
import Button from './Button';

import PageTitle from "./PageTitle";
import QuestionsContainer from "./QuestionsContainer";



function ViewAnswers() {


    var sId = localStorage.getItem("survey_id");

    // console.log(sId)


    const [questions, setQuestions] = useState('');

    const fetchQuestions = async () => {

        try {
            // get all questions for the survey the user clicked on
            await axios.post(`http://127.0.0.1:8000/api/getquestions`, { survey_id: sId })
                .then(res => {
                    const mydata = res.data;
                    //   console.log(mydata)
                    setQuestions(mydata['questions']);
                })

        } catch (err) {
            //   console.log(err)
        }

    }

    useEffect(() => {
        fetchQuestions();
    }, []);


    //  create question card for each question
    try {
        return ( 
            <div className="answers-container">
                {questions.map((value, index) => {
                    return (
                        <div key={index} className={'ans-item-container'}>
                            {value['question']}
                            <AnswerItem question_id={value['id']}/>
                        </div>
                    )
                })}

            </div>

        );

    } catch (err) {
        // console.log(err)
        // show loading sign while the questions are being loaded
        return (<div className="surveys-container">Loading...</div>);
    }
};




export default ViewAnswers;
