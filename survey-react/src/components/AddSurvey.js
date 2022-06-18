import Button from "./Button";
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import axios from 'axios';


function AddSurvey() {
    
    
    async function submitSurvey(){
        var title = document.getElementById("survey_name").value;
        if(title == ""){
            alert('Enter name !');
        }else{


            try {

                await axios.post(`http://127.0.0.1:8000/api/admin/addsurvey`,{ title: title })
                  .then(res => {
                    const mydata = res.data;
                    if(mydata['success']){
                        document.location.href = '/'

                    }
                  })
          
              } catch (err) {
                console.log(err)
              }





        }
    }


    return (
        <div className="add-survey">
            <input type={"text"} id={"survey_name"}></input>
            <Button
                text={'submit'}
                onClick={()=>{submitSurvey()}}
            />
        </div>
    );
}

export default AddSurvey;