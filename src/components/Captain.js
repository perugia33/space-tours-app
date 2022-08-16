import React from 'react'
import   "./Crew.css"
import { Link } from "react-router-dom";
import image14 from "../images/crew-Jeanette-Epps2.jpeg"
import image8 from  "../images/crew-Jeanette-Epps3.jpeg"




function Captain() {
    return (
      <main  className="crew   grid-container-crew   ff-barlow-reg text-white">
        
          
              <div className= "flex ml mr">

                <article className= "crew-info mt mr">
                    <h1  className= "heading4 mb2">Meet Our Crew</h1>
                    {/* <h3> Meet Our -</h3> */}
                      <h3 className= "heading4 mb2">Ship's Captain</h3>
                      <h2 className= "heading3   mt-3 mb2">Captain Jeanette Epps</h2>
                      <p className = "sub-heading6">Jeannette Epps is a former Starfleet commander and one of 
                      its most decorated officers. She trained at the Starfleet Academy 
                      and received both her M.S. and PH.D in aerospace engineering . 
                      As a Starfleet cadet she was instrumental in the completion of 
                      several critical missions and later was commissioned to the rank 
                      of Captain.  
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
                <div className= "image-container2--crew ">
                  <figure id= "crew2" >
                    <img  className= "images mt" src={image8} alt= "Jeanette Epps"></img>
                    <figcaption className= "sub-heading3">Captain Jeanette Epps -  Ship's Captain</figcaption>
                  </figure>

               
                </div>
            </div>
            
        </main>
  )
}

export default Captain