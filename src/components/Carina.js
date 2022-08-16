import React from 'react'
import   "./Destination.css"
import { Link } from "react-router-dom";
import image from  "../images/carina-2400x1200.jpeg"
import "bootstrap/dist/css/bootstrap.css";

function Carina() {
  return (

    <main  className="destination   grid-container-xxxxxxxx   ff-barlow-reg text-white">
        <div className="title letter-spacing-2">
            <h1  className="numbered-title"> 
            {/* <span  aria-hidden="true">01</span> */}
            {/* screen-readers will not read the value inside the  <span> tag */}
            Select Your Destination
            </h1>
         </div>
        
        <div className="flex">
                <div className= "image-container mt-2">
                  <img  className= "images" src={image} alt= "Carina Nebula"></img>
                </div>
               
                     <div className= "text-container">
                          <div class="tab-list   ff-barlow-conden flex fs-300">
                              <p   class="uppercase  letter-spacing-2">
                              <Link   to="/Carina"  className="accent-line "  style={{textDecoration: 'none' , color: 'white'}} >
                                Carina Nebula
                              </Link>                             
                                </p>

                              <p  class="uppercase ff-sans-cond  letter-spacing-2" >
                              <Link   to="/Stephans" style={{textDecoration: 'none' , color: 'white'}}   >
                                Stephan's Quintet
                                </Link>  
                                </p>

                              <p  class="uppercase ff-sans-cond  letter-spacing-2" >
                              <Link   to="/Southern"  style={{textDecoration: 'none' , color: 'white'}}  >
                                Southern Ring Nebula
                                </Link>  
                                </p>
                          </div>

                        <article>
                            <h1 className= " heading1">Carina Nebula</h1>

                            <p className="text-azure sub-heading5 mb">Travel amonst mountains and valleys of "glittering stars". Relax in our
                                      newest starcruiser- The Intrepid - while exploring dazzling stellar
                                      nurseries, the birthplace of brillant newly-formed stars. The Carina Nebula is
                                      located in the constellation Carina,  in the Carina–Sagittarius Arm of the Milky Way galaxy.
                            </p>
                            <hr></hr>
                        <div className="flex gap mt">
                              <div>
                                <h3 className="sub-heading2">Travel Distance</h3>
                                <p className="sub-heading2">7500 Light Years</p>
                              </div>
                              <div>
                                <h3 className="sub-heading2">Travel Time</h3>
                                <p className="sub-heading2">15 Days</p>
                              </div>
                        </div>
                        <div>
                                <button  className =" fs-3  text-white btn btn-dark mb-5  ms-4">
                                <Link   to="/Register"    >
                                Register Here
                                </Link>  
                                </button>
                              </div>
                      </article>
                </div>
          </div>
  </main>
  )
}

export default Carina;