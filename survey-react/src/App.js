import './App.css';
import { React, useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import PageTitle from "./components/PageTitle";
import SurveysContainer from "./components/SurveysContainer";
import SurveyQuestions from "./components/SurveyQuestions";
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import axios from 'axios';





async function App() {

  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);

  // Initialize all tasks into state from backend at component load
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      console.log(tasksFromServer);
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  //Fetch All Tasks from Backend
  const fetchTasks = async () => {
    try {
      const res = await fetch("http://localhost:5000/tasks");
      const data = await res.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  };





  

  function addSurvey(){
    console.log('creating survey');
  }
  var isAdmin = false;
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
                <SurveysContainer isAdmin={isAdmin} />
              </>
            }
          ></Route>
          <Route path="/surveyquestions" element={<SurveyQuestions isAdmin={isAdmin} />} />
        </Routes>
        
      </div>
    </BrowserRouter>

  );
}

export default App;
