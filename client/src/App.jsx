// import React, {useEffect, useState} from "react";
import Home from "./components/home/Home";
import Room from "./components/room/Room";
import NoMatch from "./components/NoMatch/NoMatch";
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import NotFound from './pages/NotFound';



const App = () => {
  
  return (
    
    <div>
      
      
        <Router>
          
          <Routes>
            <Route exact path="/" element= {<Home/>}/>
            <Route exact path="/:id" element={<Room />} />
            <Route exact path="*" element={<NoMatch/>} />    
          </Routes>
        
        </Router>
      
      </div>
  
    
  );
}

export default App;
