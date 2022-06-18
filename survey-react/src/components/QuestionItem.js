

import axios from 'axios';
import { React, useState, useEffect } from "react";

const QuestionItem = ({ isAdmin, text, question_id, type_id }) => {

    const [options, setOptions] = useState('');
    const fetchOptions = async () => {

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




    var x;
    if (type_id == 1) {
        x = "mcq";
        try {
        return (
            <div
                className='question-item'
            ><p>{text}</p>
                <div className={'radio-group'}>
                    {options.map((value, index) => {
                        return (
                            <span key={index} ><input type="radio" value={value['id']} name={'q' + question_id} className="checkbox-option" />
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
    if (type_id == 2) {
        x = "text";
        return (
            <div
                className='question-item'
            ><p>{text}</p>
                <input type={"text"} className={'text-input'} ></input>
            </div>
        );
    }
    if (type_id == 3) {
        x = "Check box";
        try {
            return (
                <div
                    className='question-item'
                ><p>{text}</p>
                    <div className={'checkbox-group'}>
                        {options.map((value, index) => {

                            return (
                                <span key={index} ><input type="checkbox" value={value['id']} name={'q' + question_id} className="checkbox-option" />
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
