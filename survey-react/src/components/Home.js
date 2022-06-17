import React from "react";
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';


function Home  ({ isAdmin }) {
    
    console.log(localStorage.getItem("qid"))
    return (
       <div><Link to={"/"}>
      Go back
       </Link></div>
    );
};

export default Home;
