import React from "react";
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';


function Home  ({ isAdmin }) {
    console.log(isAdmin)
    return (
       <div><Link to={"/"}>
      Go back
       </Link></div>
    );
};

export default Home;
