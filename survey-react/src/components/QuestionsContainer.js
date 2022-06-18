
import QuestionItem from "./QuestionItem";

import axios from 'axios';
import { React, useState, useEffect } from "react";
// import { Link } from 'react-router-dom';




const QuestionsContainer = ({ isAdmin }) => {


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
      <div className="questions-container">
        {questions.map((value, index) => {
          return (
            <QuestionItem key={index} text={value['question']} question_id={value['id']} type_id={value['type_id']} />
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

export default QuestionsContainer;
