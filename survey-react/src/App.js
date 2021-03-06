import './App.css';
import { React, useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import PageTitle from "./components/PageTitle";
import SurveysContainer from "./components/SurveysContainer";
import SurveyQuestions from "./components/SurveyQuestions";
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import AddSurvey from './components/AddSurvey';
import AddQuestion from './components/AddQuestion';
import AddOptions from './components/AddOptions';
import Login from './components/Login';
import ViewAnswers from './components/ViewAnswers';





function App() {


  const [surveys, setSurveys] = useState('');
  const [isAdmin, setAdmin] = useState('');


  // get token from local storage
  var token = localStorage.getItem("token");



  // check if admin logged in via jwt controller
  const checkAdmin = async () => {
    // check if token is still legit
    fetch("http://127.0.0.1:8000/api/profile", {

      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
        Accept: 'application/json',
      },

    }).then(res => {
      // set admin according to token
      setAdmin(false)

      if (res['status'] == "200") {
        setAdmin(true)
      }
    })
      .catch(err => {
        console.log(err)
      })

  }



  // var isAdmin = true;

  // getting all surveys
  const fetchSurveys = async () => {

    try {

      await axios.get(`http://127.0.0.1:8000/api/getsurveys`)
        .then(res => {
          const mydata = res.data;
          // console.log(mydata['surveys'])
          setSurveys(mydata['surveys']);
        })

    } catch (err) {
      // console.log(err)
    }
  }



  useEffect(() => {
    checkAdmin();
    fetchSurveys();

  }, []);



  function addSurvey() {

    document.location.href = '/addsurvey'

  }


  return (
    <BrowserRouter>

      <div className="body-container">
        <Navbar
          isAdmin={isAdmin}
        />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <PageTitle
                  isAdmin={isAdmin}
                  text={"All Surveys"}
                  btn_text={"Create"}
                  onClick={addSurvey}

                />
                <SurveysContainer isAdmin={isAdmin} surveys={surveys} />
              </>
            }
          ></Route>
          <Route path="/surveyquestions" element={<SurveyQuestions isAdmin={isAdmin} />} />
          <Route path="/addsurvey" element={<AddSurvey />} />
          <Route path="/addquestion" element={<AddQuestion />} />
          <Route path="/addoptions" element={<AddOptions />} />
          <Route path="/login" element={<Login />} />
          <Route path="/viewanswers" element={<ViewAnswers />} />
        </Routes>

      </div>
    </BrowserRouter>

  );
}

export default App;
