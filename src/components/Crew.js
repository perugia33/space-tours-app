import React from 'react'
import   "./Crew.css"
import { Link } from "react-router-dom";
import image6 from  "../images/crew-Nichelle-Nichols-3.jpeg"
import image7 from  "../images/crew-lt-uhura.webp"



function Crew() {

  return (
         <main  className="crew   grid-container-crew   ff-barlow-reg text-white">
        
          
              <div className= "flex ml mr">

                <article className= "crew-info mt mr">
                    <h1  className= "heading4 mb">Introducing Our</h1>
                    {/* <h3> Meet Our -</h3> */}
                      <h3 className= "heading5 ">Founder and CEO</h3>
                      <h2 className= "heading3   mt-3 mb2">Commander Nyota Uhura</h2>
                      <p className = "sub-heading6"> Space Tours was founded through the vision of Commander Uhura 
                      who wanted to increase deep space exploration and bring a wealth of knowledge
                      and understanding to the citizens of Earth about the ever expanding universes.
                       She has had a long and distinguished career, rising to the rank 
                       of Starship Commander in the late 23rd century. Commander Uhura 
                       has operational authority over our entire star fleet. Her first assignment 
                       was aboard the USS Enterprise where she served brillantly as a communications 
                       officer.  Later, she was given command of the USS Leondegrance 
                       until her retirement, upon which she founded Space Tours.

                      </p>

                  <div class="dot-indicators flex">
                      
                      <Link    to="/Crew"  class="dot-indicators  aspect" style={{textDecoration: 'none' , color: 'white'}}> 
                      <button  ></button>
                       </Link>   
          
                      
                      <Link   to="/Captain"  className= " dot-indicators aspect" style={{textDecoration: 'none' , color: 'white'}}>  
                      <button ></button>
                      </Link>  

                      
                      <Link   to="/Pilot"   className= "dot-indicators  aspect" style={{textDecoration: 'none' , color: 'white'}}> 
                      <button ></button>
                       </Link>  
                  
                     
                      <Link   to="/Engineer"   className= " dot-indicators aspect" style={{textDecoration: 'none' , color: 'white'}}>  
                      <button > </button>
                      </Link>  
                     
                  </div>
                </article>
                <div className= "image-container--crew ml">
                  <figure id= "crew1" >
                    <img  className= "images mt" src={image6} alt= "Admiral  Nyota Uhura"></img>
                    <figcaption className= "sub-heading3">Commander Uhura - Commander in Chief</figcaption>
                  </figure>

                  <figure className = "crew2 mt" >
                    <img  className= "images " src={image7} alt= "Lieutenant Uhura"></img>
                    <figcaption  className= "sub-heading3">Lieutenant Uhura - Communications Officer</figcaption>
                  </figure>

              
                </div>
            </div>
            
        </main>
  )
}

export default Crew