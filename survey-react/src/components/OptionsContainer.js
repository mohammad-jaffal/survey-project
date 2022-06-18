
import MCQItem from "./MCQItem";

import axios from 'axios';
import { React, useState, useEffect } from "react";
// import { Link } from 'react-router-dom';


const OptionsContainer = ({ isAdmin, question_id }) => {

    const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const [options, setOptions] = useState('');

    const fetchOptions = async () => {

        try {

            await axios.post(`http://127.0.0.1:8000/api/getoptions`, { question_id: question_id })
                .then(res => {
                    const mydata = res.data;
                    console.log(mydata)
                    setOptions(mydata['options']);
                })

        } catch (err) {
            console.log(err)
        }

    }

    useEffect(() => {
        fetchOptions();
    }, []);


    try {
        return (

            <div className="options-container">
                

                {options.map((value, index) => {
                    return (
                        <MCQItem key={index} text={value['option']} Option_id={value['id']} />
                    )
                })}
            </div>
        );

    } catch (err) {
        console.log(err)
        return (<div className="surveys-container">NOTHING HERE TO SHOW!</div>);
    }




};

export default OptionsContainer;
