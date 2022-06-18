import React from "react";
import OptionsContainer from "./OptionsContainer";


const QuestionItem = ({isAdmin, text, question_id , type_id}) => {

    var x;
    if(type_id==1){
        x ="mcq";
        return (
            <div
                className='question-item'
            ><p>{text}</p>
            <OptionsContainer question_id={question_id}/>
            </div>
        );
    }
    if(type_id==2){
        x ="text";
        return (
            <div
                className='question-item'
            ><p>{text}</p>
            <input type={"text"}></input>
            </div>
        );
    }
     
     


    
};

export default QuestionItem;
