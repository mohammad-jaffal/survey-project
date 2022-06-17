import React from "react";


const SurveyItem = ({isAdmin, text, onClick}) => {
    
    return (
        <div
            className='survey-item'
            onClick={onClick}
        >{
            isAdmin ? <img src={require('../assets/del.png')} className="del-icon"/> :<div style={{height: '40px'}} />}
            
            <p>
            {text}
            </p>
        </div>
    );
};

export default SurveyItem;
