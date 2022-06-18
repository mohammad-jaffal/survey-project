
import React from "react";
function MCQItem({text}) {
    return ( 
        <div className="mcq-item">
            
            <span><div className="mcq-circle"/>{text}</span>
        </div>
     );
}

export default MCQItem;
