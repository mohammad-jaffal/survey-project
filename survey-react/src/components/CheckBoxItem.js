
import React from "react";
function CheckBoxItem({text}) {
    return ( 
        <div className="mcq-item">
            
            <span><div className="check-box"/>{text}</span>
        </div>
     );
}

export default CheckBoxItem;
