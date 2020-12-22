 import React from 'react';
 import Home from "./Home";
 import About from "./About";
 import Service from "./Service";
 import Contact from "./Contact";
 import {Switch,Route} from "react-router-dom"; 
 import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
 import Navbar from './Navbar';
 import './index.css';
//  import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
 
 const App=()=>{
   return (
     <>
     <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact  path="/About" component={About}/>
        <Route exact path="/Service" component={Service}/>
        <Route exact path="/Contact" component={Contact}/>
      </Switch>
      
     </>
   )
 }
 export default App;

