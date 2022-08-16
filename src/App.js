import React from "react";
import logo from './logo.svg';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Crew from "./components/Crew";
import Destination from "./components/Destination";
import Register from "./components/Register";
import Manifest from "./components/Manifest"
import Stephans from "./components/Stephans";
import Carina from "./components/Carina";
import Southern  from "./components/Southern";
import Captain from "./components/Captain";
import Pilot from "./components/Pilot";
import Engineer from "./components/Engineer";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
              <header className="App-header">
                <div id="logo">
                  <img  alt= "logo"></img>
                </div>         
              <Navbar /> 
              </header>
            


              <Routes>
            
                      <Route  path="/" element={<LandingPage />} />
                      <Route path="/destination" element={<Destination/>} />
                      <Route path="/crew" element={<Crew/>} />
                      <Route path="/register" element={<Register />} /> 
                      <Route path="/manifest" element={<Manifest />} /> 
                      <Route path="/stephans" element={<Stephans />} /> 
                      <Route path="/carina" element={<Carina />} /> 
                      <Route path="/southern" element={<Southern />} /> 
                      <Route path="/captain" element={<Captain />} /> 
                      <Route path="/pilot" element={<Pilot />} /> 
                      <Route path="/engineer" element={<Engineer />} /> 

   
             </Routes>

       
       </BrowserRouter>
    </div>
  );
}

export default App;
