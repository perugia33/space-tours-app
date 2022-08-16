import React from 'react'
import   "./Crew.css"
import { Link } from "react-router-dom";
import image11 from "../images/crew-aki-hoshide.jpeg"

function Engineer() {
  return (
    <main  className="crew   grid-container-crew   ff-barlow-reg text-white">
        
          
    <div className= "flex ml mr">

      <article className= "crew-info mt mr">
          <h1  className= "heading4 mb2">Meet Our Crew</h1>
          {/* <h3> Meet Our -</h3> */}
            <h3 className= "heading4 ">Chief Science Officer</h3>
            <h2 className= "heading3   mt-3 mb2">Lt Commander Aki Hoshide</h2>
            <p className = "sub-heading6">Commander Uhura is the senior most officer in our star fleet.  
            She has operational authority over the entire star fleet
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ducimus harum 
            nemo eaque dolores rem vero voluptatem magni doloribus aut illum 
            earum, atque unde eum totam, tempore dolorem voluptate? Mollitia i
            ncidunt, laudantium nesciunt eligendi minima soluta totam, 
            ad praesentium aspernatur adipisci dolor ipsam a in eveniet. 
            Architecto quis eligendi debitis quos totam voluptate numquam 
            doloribus eius, fugit illo cum?
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
      <div className= "image-container4--crew ">
        <figure>
          <img  className= "images mt"  id= "crew4"  src={image11} alt= "Lt Commander Sunita Williams"></img>
          <figcaption className= "sub-heading3">Aki Hoshide- Chief Science Officer</figcaption>
        </figure>

     
      </div>
  </div>
  
</main>
)
}



export default Engineer