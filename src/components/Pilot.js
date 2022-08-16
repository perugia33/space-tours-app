import React from 'react'
import   "./Crew.css"
import { Link } from "react-router-dom";
import image12 from "../images/crew-victor-glover.png"

function Pilot() {
  return (
    <main  className="crew   grid-container-crew   ff-barlow-reg text-white">
        
          
    <div className= "flex ml mr">

      <article className= "crew-info mt mr">
          <h1  className= "heading4 mb2">Meet Our Crew</h1>
          {/* <h3> Meet Our -</h3> */}
            <h3 className= "heading4 ">Navigation Officer</h3>
            <h2 className= "heading3   mt-3 mb2"> Lt Commander Victor Glover</h2>
            <p className = "sub-heading6">Lt Commander Glover completed advance training 
            at the Starfleet Academy, receiving a  Master of Science in Flight Test 
            Engineering, a Master of Science in Systems Engineering and a 
            Master of Military Operational Art and Science. He has served as 
            test pilot on several of Starfleet's most advance starships like the Intrepid.
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
      <div className= "image-container3--crew ">
        <figure id= "crew3" >
          <img  className= "images mt" src={image12} alt= "Lt Commander Victor Glover"></img>
          <figcaption className= "sub-heading3">Lt Commander Victor Glover - Navigation Officer</figcaption>
        </figure>

     
      </div>
  </div>
  
</main>
)
}


export default Pilot