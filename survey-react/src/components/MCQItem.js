
import React from "react";
function MCQItem({text}) {
    return ( 
        <div className="mcq-item">
            <div className="mcq-circle"/>
            {text}
        </div>
     );
}

export default MCQItem;
