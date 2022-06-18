import Button from "./Button";
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import axios from 'axios';


function AddOptions() {
    
    var qId = localStorage.getItem("question_id");
    
    async function submitOption(){
        var text = document.getElementById("option_text").value;
        if(text == ""){
            alert('Enter option !');
        }else{

            try {

                await axios.post(`http://127.0.0.1:8000/api/admin/addoption`,{ 
                    option: text,
                    question_id: qId,
             })
                  .then(res => {
                    const mydata = res.data;
                    if(mydata['success']){
                        document.getElementById("option_text").value = " "
                    }
                  })
          
              } catch (err) {
                console.log(err)
              }


        }
    }


    return (
        <div className="add-Options">
            <input type={"text"} id={"option_text"} className="form-control"></input>
            <Button
                text={'submit'}
                onClick={()=>{submitOption()}}
            />
        </div>
    );
}

export default AddOptions;