import React from "react";
import axios from 'axios';


const SurveyItem = ({ isAdmin, text, onClick, id }) => {


    async function deleteSurvey() {

        try {

            await axios.post(`http://127.0.0.1:8000/api/admin/deletesurvey`, {
                survey_id: id,
            })
                .then(res => {
                    const mydata = res.data;
                    if (mydata['success']) {
                        alert("Survey Deleted")
                        document.location.reload();
                    }
                })

        } catch (err) {
            // console.log(err)
        }

    }


    return (
        <div
            className='survey-item'

        >
            <p onClick={onClick}>
                {text}
            </p>
            {
                isAdmin ? <img src={require('../assets/del.png')} className="del-icon"
                    onClick={() => { deleteSurvey(); }} /> : <div style={{ height: '40px' }} />}
        </div>
    );
};

export default SurveyItem;