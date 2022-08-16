import React from 'react'
import   "./Destination.css"
import { Link } from "react-router-dom";
// import image3 from "../images/background-register.jpeg"

function Southern() {
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
                <div className= "image-container3">
                  {/* <img className= "images" src={image3} alt= "Southern Ring Nebula"></img> */}
                </div>
               
                     <div className= "text-container3">
                          <div class="tab-list   ff-barlow-conden   flex fs-300">
                              <p   class="uppercase  letter-spacing-2">
                              <Link   to="/Carina"  style={{textDecoration: 'none' , color: 'white'}}   >
                                Carina Nebula
                              </Link>                             
                                </p>

                              <p  class="uppercase letter-spacing-2" >
                              <Link   to="/Stephans"  style={{textDecoration: 'none' , color: 'white'}}  >
                                Stephan's Quintet
                                </Link>  
                                </p>

                              <p  class="uppercase  letter-spacing-2" >
                              <Link   to="/Southern"  style={{textDecoration: 'none' , color: 'white'}}  >
                                Southern Ring Nebula
                                </Link>  
                                </p>
                          </div>

                        <article>
                            <h1 className= " heading1">Southern Ring Nebula</h1>

                            <p className="text-azure sub-heading5 mb">Enjoy the explostion of light and color
                            emanating from the Southern Ring Nebula, also know as the Eight-Burst Nebula in the
                            Constellation Vela.  Witness upclose the dissolution of these brillant stars.
                            </p>
                            <hr></hr>
                        <div className="flex gap mt">
                              <div>
                                <h3 className="sub-heading2">Travel Distance</h3>
                                <p className="sub-heading2">2000 Light Years</p>
                              </div>
                              <div>
                                <h3 className="sub-heading2">Travel Time</h3>
                                <p className="sub-heading2">12 Days</p>
                              </div>
                        </div>
                        <div>
                                <button className =" fs-3  text-white btn btn-dark mb-5  ms-4">
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

export default Southern;