import React from "react";


const QuestionItem = ({isAdmin, text, id}) => {

   


    return (
        <div
            className='question-item'
        ><p>{text}</p>
        </div>
    );
};

export default QuestionItem;
