import Button from "./Button";
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import axios from 'axios';


function AddSurvey() {

    // create empty survey
    async function submitSurvey() {
        var title = document.getElementById("survey_name").value;
        if (title == "") {
            alert('Enter name !');
        } else {
            try {

                await axios.post(`http://127.0.0.1:8000/api/admin/addsurvey`, { title: title })
                    .then(res => {
                        const mydata = res.data;
                        if (mydata['success']) {
                            localStorage.setItem('survey_id', mydata['survey']['id']);
                            // navigate to the new empty survey
                            document.location.href = '/surveyquestions'
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
                <input type={"text"} id={"survey_name"} className={'form-control'}></input>
                <Button
                    text={'submit'}
                    onClick={() => { submitSurvey() }}
                />
            </div>
        </center>
    );
}

export default AddSurvey;