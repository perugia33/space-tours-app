import React from "react";
import logo from './logo.svg';
import { Link } from "react-router-dom";
import './App.css';
import LandingPage from "./components/LandingPage";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="logo">
          <img  alt= "logo"></img>
        </div>
      <nav class=" nav_container  flex uppercase " >
            <ul class="letter-spacing-2  ff-barlow-conden ">
                <li  ><a href="/"  class="underline"> <span>01</span>  Home</a></li>
                <li><a href="/"  class="underline"> <span>02</span>  Destination</a></li>
                <li><a href="/" class="underline" > <span>03</span>  Crew</a></li>
                <li><a href="/"  class="underline"> <span>04</span>  Passenger Manifest</a></li>
            </ul>
        </nav>     
      </header>
      <main className="container ">
        <h1 class=" sub-headiing2 letter-spacing-1 text-azure  uppercase">Explore Far Off Galaxies With
       <span class= "heading1 text-white ">  Space Tours  </span> 
        </h1>
        <p class="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad suscipit, 
        commodi magnam perspiciatis in, nesciunt consectetur error atque 
        beatae, natus quam. Nemo minima repellat exercitationem!
        </p>
        <div>
        <a href="/"    class="lg-button ">Explore</a>
        </div>
      </main>
\
    </div>
  );
}

export default App;
