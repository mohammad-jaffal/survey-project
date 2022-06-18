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
            <OptionsContainer question_id={question_id} type_id={type_id}/>
            </div>
        );
    }
    if(type_id==2){
        x ="text";
        return (
            <div
                className='question-item'
            ><p>{text}</p>
            <input type={"text"} className={'text-input'} ></input>
            </div>
        );
    }
    if(type_id==3){
        x ="Check box";
        return (
            <div
                className='question-item'
            ><p>{text}</p>
            <OptionsContainer question_id={question_id} type_id={type_id}/>
            </div>
        );
    }
     

    
};

export default QuestionItem;
