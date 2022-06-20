import { React, useState, useEffect } from "react";
import axios from 'axios';



const AnswerItem = ({ question_id }) => {

    const [answers, setAnswers] = useState('');

    const fetchAnswers = async () => {

        try {
            // get all Answers for the survey the user clicked on
            await axios.post(`http://127.0.0.1:8000/api/admin/getanswers`, { question_id: question_id })
                .then(res => {
                    const mydata = res.data;
                    //   console.log(mydata)
                    setAnswers(mydata['answers']);
                })

        } catch (err) {
            //   console.log(err)
        }

    }

    useEffect(() => {
        fetchAnswers();
    }, []);







    try {
        return (
            <div
                className='answer-item'
            >
                {answers.map((value, index) => {
                    return (
                        <div key={index}>
                            {"- " + value['answer']}
                        </div>
                    )
                })}
            </div>
        );
    } catch (err) {
        // show loading sign while the questions are being loaded
        return (<div className="surveys-container">Loading...</div>);
    }
};

export default AnswerItem;
