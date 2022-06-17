import './App.css';
import Navbar from "./components/Navbar";
import PageTitle from "./components/PageTitle";


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
    </div>

  );
}

export default App;
