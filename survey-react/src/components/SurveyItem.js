import React from "react";


const SurveyItem = ({isAdmin, text, onClick, id}) => {

   


    return (
        <div
            className='survey-item'
            onClick={onClick}
        >{
            <div style={{height: '40px'}} />}
            
            <p>
            {text}
            </p>
        </div>
    );
};

export default SurveyItem;
