import Button from "./Button";
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import axios from 'axios';


function AddQuestion() {

    var sId = localStorage.getItem("survey_id");

    var type_select = document.getElementById("question_type");
    function typeSelected() {
        // console.log(type_select.value)
    }


    // create a question
    async function submitQuestion() {
        var q = document.getElementById("question_title").value;
        if (q == "") {
            alert('Enter question !');
        } else {

            try {

                await axios.post(`http://127.0.0.1:8000/api/admin/addquestion`, {
                    question: q,
                    survey_id: sId,
                    type_id: type_select.value,
                })
                    .then(res => {
                        const mydata = res.data;
                        if (mydata['success']) {
                            // navigate to add options if question is mcq or check box
                            if (type_select.value == 1 || type_select.value == 3) {
                                localStorage.setItem('question_id', mydata['question']['id']);
                                document.location.href = '/addoptions';
                            }
                            // navigate back to survey questions if question is text
                            if (type_select.value == 2) {
                                document.location.href = '/surveyquestions';
                            }

                        }
                    })

            } catch (err) {
                // console.log(err)
            }

        }
    }


    return (
        <center className='login-background'>
            <div className="add-survey">
                <div className="form-group">
                    <label>Question:</label>
                    <input type={"text"} id={"question_title"} className="form-control" />
                </div>
                <div className="form-group">
                    <label>Question Type:</label>
                    <select id="question_type" className="form-control" onChange={() => { typeSelected() }}>
                        <option value="1">MCQ</option>
                        <option value="2">Text</option>
                        <option value="3">CheckBox</option>
                    </select>
                </div>




                <Button
                    text={'add'}
                    onClick={() => { submitQuestion() }}
                />
            </div>
        </center>
    );
}

export default AddQuestion;