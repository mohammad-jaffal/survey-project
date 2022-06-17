import './App.css';
import Navbar from "./components/Navbar";
import PageTitle from "./components/PageTitle";
import SurveysContainer from "./components/SurveysContainer";


function App() {
  var isAdmin = true;
  return (
    <div className="body-container">
      <Navbar
        isAdmin={isAdmin}
      />
      <PageTitle
        isAdmin={isAdmin}
        text={"All Surveys"}
      />
      <SurveysContainer isAdmin={isAdmin}/>
    </div>

  );
}

export default App;
