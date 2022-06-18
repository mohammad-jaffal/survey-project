
import axios from 'axios';
import { React, useState, useEffect } from "react";

import PageTitle from "./PageTitle";
import QuestionsContainer from "./QuestionsContainer";

function SurveyQuestions({ isAdmin }) {

    var sId = localStorage.getItem("survey_id");

    const [questions, setQuestions] = useState('');



    
  const fetchQuestions = async () => {

   
    try {

      await axios.post(`http://127.0.0.1:8000/api/getquestions`,{ survey_id: sId })
        .then(res => {
          const mydata = res.data;
          console.log(mydata)
          setQuestions(mydata['surveys']);
        })

    } catch (err) {
      console.log(err)
    }

  }



  useEffect(() => {
    
    fetchQuestions();
 
    // if (surveys == null) {
    //   console.log('still')
    // } else {
    //   console.log('surveys');

    //   console.log(surveys);
    // }
  }, []);


    console.log("loading "+sId)
    function addQuestion() {
        console.log("Adding quest for " + sId)
    }



    return (
        <div className="body-container">

            <PageTitle
                isAdmin={isAdmin}
                text={"Survey "+sId}
                btn_text={"Add"}
                onClick={addQuestion}
            />
            <QuestionsContainer isAdmin={isAdmin} questions={questions}/>

        </div>
    );
};

export default SurveyQuestions;
