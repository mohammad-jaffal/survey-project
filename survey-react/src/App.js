import './App.css';

import Navbar from "./components/Navbar";
import PageTitle from "./components/PageTitle";
import SurveysContainer from "./components/SurveysContainer";
import Home from "./components/Home";




import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';





function App() {
  var isAdmin = true;
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
                />
                <SurveysContainer isAdmin={isAdmin} />
              </>
            }
          ></Route>
          <Route path="/home" element={<Home isAdmin={isAdmin} />} />
        </Routes>
        
      </div>
    </BrowserRouter>

  );
}

export default App;
