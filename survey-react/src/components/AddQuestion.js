import Button from "./Button";
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import axios from 'axios';


function AddQuestion() {

    var sId = localStorage.getItem("survey_id");

    var type_select = document.getElementById("question_type");
      function typeSelected () {
        console.log(type_select.value)
    }



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
                            localStorage.setItem('question_id', mydata['question']['id']);
                            document.location.href = '/addoptions';

                        }
                    })

            } catch (err) {
                console.log(err)
            }





        }
    }


    return (
        <div className="add-survey">
            <div className="form-group">
                <label>Question:</label>
                <input type={"text"} id={"question_title"} className="form-control" />
            </div>
            <div className="form-group">
                <label>Question Type:</label>
                <select id="question_type" className="form-control" onChange={()=>{typeSelected()}}>
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


        //     <div id="login_form" className="login-form-container">
        //     <label>{count}</label>
        //     <div className="form-group">
        //         <label>Email:</label>
        //         <input type="text" id="li_email" className="form-control" required />
        //     </div>
        //     <div className="form-group">
        //         <label>Password:</label>
        //         <input type="password" id="li_password" className="form-control" required />
        //     </div>
        //     <Button
        //         color={'white'}
        //         className={"li-btn"}
        //         text={"Login"}
        //         onclick={clicked}
        //     />
        //     <Button
        //         color={'red'}
        //         className={"li-btn"}
        //         text={"pablo"}
        //         onclick={pablo}
        //     />
        // </div>
    );
}

export default AddQuestion;