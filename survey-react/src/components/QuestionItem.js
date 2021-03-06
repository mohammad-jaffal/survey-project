
import { click } from '@testing-library/user-event/dist/click';
import axios from 'axios';
import { React, useState, useEffect } from "react";

const QuestionItem = ({ isAdmin, text, question_id, type_id }) => {


    const [options, setOptions] = useState('');
    const fetchOptions = async () => {
        // get all options for the question
        try {
            await axios.post(`http://127.0.0.1:8000/api/getoptions`, { question_id: question_id })
                .then(res => {
                    const mydata = res.data;
                    // console.log(mydata)
                    setOptions(mydata['options']);
                })
        } catch (err) {
            // console.log(err)
        }
    }
    useEffect(() => {
        fetchOptions();
    }, []);












    //  if question type is mcq, show the options in radio button
    var x;
    if (type_id == 1) {
        x = "mcq";
        // on submit button add answer 
        document.getElementById('ansr_btn').addEventListener("click", async function () {
            // console.log(question_id)
            var mcqs = document.getElementsByName('q' + question_id);
            for (var x of mcqs) {
                if (x.checked) {
                    // console.log(x.value)
                    try {
                        await axios.post(`http://127.0.0.1:8000/api/addanswer`, {
                            question_id: question_id,
                            answer: x.value
                        })
                            .then(res => {
                            })
                    } catch (err) {
                        // console.log(err)
                    }
                }
            }
        })


        try {
            return (
                <div
                    className='question-item'
                ><p>{text}</p>
                    <div className={'radio-group'}>
                        {options.map((value, index) => {
                            return (
                                <span key={index} ><input type="radio" value={value['option']} name={'q' + question_id} className="checkbox-option" />
                                    {value['option']}
                                </span>
                            )
                        })}
                    </div>
                </div>
            );
        } catch (err) {
            // console.log(err)
            return (<div className="surveys-container">Loading...</div>);
        }
    }















    //  if question type is text, show input type text
    if (type_id == 2) {
        x = "text";
        document.getElementById('ansr_btn').addEventListener("click", async function () {
            // console.log(question_id)
            var text_ansr = document.getElementById('q' + question_id);


            // console.log(text_ansr.value)
            try {
                await axios.post(`http://127.0.0.1:8000/api/addanswer`, {
                    question_id: question_id,
                    answer: text_ansr.value
                })
                    .then(res => {
                    })
            } catch (err) {
                // console.log(err)
            }


        })


        return (
            <div
                className='question-item'
            ><p>{text}</p>
                <input type={"text"} className={'text-input'} id={'q' + question_id} ></input>
            </div>
        );
    }


















    //  if question type is checkbox, show the options in checkbox
    if (type_id == 3) {
        x = "Check box";

        document.getElementById('ansr_btn').addEventListener("click", async function () {
            // console.log(question_id)
            var chbs = document.getElementsByName('q' + question_id);
            for (var x of chbs) {
                if (x.checked) {
                    // console.log(x.value)
                    try {
                        await axios.post(`http://127.0.0.1:8000/api/addanswer`, {
                            question_id: question_id,
                            answer: x.value
                        })
                            .then(res => {
                            })
                    } catch (err) {
                        // console.log(err)
                    }
                }
            }
        })



        try {
            return (
                <div
                    className='question-item'
                ><p>{text}</p>
                    <div className={'checkbox-group'}>
                        {options.map((value, index) => {

                            return (
                                <span key={index} ><input type="checkbox" value={value['option']} name={'q' + question_id} className="checkbox-option" />
                                    {value['option']}
                                </span>
                            )
                        })}
                    </div>
                </div>
            );
        } catch (err) {
            // console.log(err)
            return (<div className="surveys-container">Loading...</div>);
        }
    }



};

export default QuestionItem;
