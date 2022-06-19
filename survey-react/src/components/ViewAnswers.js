
import axios from 'axios';
import { React, useState, useEffect } from "react";
import Button from './Button';

import PageTitle from "./PageTitle";
import QuestionsContainer from "./QuestionsContainer";



function ViewAnswers() {

    var sId = localStorage.getItem("survey_id");

    const [answers, setAnswers] = useState('');

    const fetchAnswers = async () => {
        console.log('fetching for '+sId)
        // try {
        //     // get the survey to show title
        //     await axios.post(`http://127.0.0.1:8000/api/getsurvey`, {
        //         survey_id: sId,
        //     })
        //         .then(res => {
        //             const mydata = res.data;
        //             // console.log(mydata['surveys'])
        //             setAnswers(mydata['survey']['title']);
        //         })

        // } catch (err) {
        //     // console.log(err)
        // }

    }

    useEffect(() => {

        fetchAnswers();

    }, []);


    return (
        <div className="body-container">
            
         aaaaaaaaannnnnnnnnnnnnnnsssssssssssssss
            
        </div>
    );
};

export default ViewAnswers;
