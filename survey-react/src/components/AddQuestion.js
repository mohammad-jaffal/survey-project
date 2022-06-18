import Button from "./Button";
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import axios from 'axios';


function AddQuestion() {

    var sId = localStorage.getItem("survey_id");
    async function submitQuestion(){
        var q = document.getElementById("question_title").value;
        if(q == ""){
            alert('Enter question !');
        }else{


            try {

                await axios.post(`http://127.0.0.1:8000/api/admin/addquestion`,{
                    question: q,
                    survey_id: sId,
                    type_id: 2,
             })
                  .then(res => {
                    const mydata = res.data;
                    if(mydata['success']){
                        document.location.href = '/surveyquestions'

                    }
                  })
          
              } catch (err) {
                console.log(err)
              }





        }
    }


    return (
        <div className="add-survey">
            <div className="form-group">
             <label>Question:</label>
             <input type="text" id="li_email" className="form-control" required />
        </div>
            <input type={"text"} id={"question_title"}></input>
            <Button
                text={'add'}
                onClick={()=>{submitQuestion()}}
            />
        </div>


    //     <div id="login_form" className="login-form-container">
    //     <label>{count}</label>
    //     <div className="form-group">
    //         <label>Email:</label>
    //         <input type="text" id="li_email" className="form-control" required />
    //     </div>
    //     <div className="form-group">
    //         <label>Password:</label>
    //         <input type="password" id="li_password" className="form-control" required />
    //     </div>
    //     <Button
    //         color={'white'}
    //         className={"li-btn"}
    //         text={"Login"}
    //         onclick={clicked}
    //     />
    //     <Button
    //         color={'red'}
    //         className={"li-btn"}
    //         text={"pablo"}
    //         onclick={pablo}
    //     />
    // </div>
    );
}

export default AddQuestion;