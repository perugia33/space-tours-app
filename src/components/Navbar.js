import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar() {
  return (

    <div   className=" nav_container  ">    
        <nav className=" flex uppercase " >
            <ul classname="letter-spacing-2  nav-text ">
                <li  className= "nav-text">
                    <Link   to="/"   className="underline">
                    <span>00</span>  
                    Home
                    </Link>
                </li>
                <li className= "nav-text">
                    <Link  to ="/destination"  className="underline" >
                         <span>01</span> 
                          Destinations     
                    </Link> 
                </li>
                <li className= "nav-text">
                    <Link to="/crew" className="underline" >
                     <span>02</span> 
                      Crew
                    </Link>
                    
                </li>
                <li className= "nav-text">
                    <Link to ="/register"  className="underline"> 
                    <span>03</span>  
                    Register
                    </Link>
                    </li>
            </ul>
        </nav>   
      
    </div>
  )
}

export default Navbar;




 