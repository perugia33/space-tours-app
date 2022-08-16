import React from 'react'
import   "./Destination.css"
import { Link } from "react-router-dom";
import image2 from  "../images/stephans_quintet.jpeg"

function Stephans() {
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
                <div className= "image-container2 ">
                  <img className= "images" src={image2} alt= "Stephans Quintet"></img>
                </div>
               
                     <div className= "text-container">
                          <div class="tab-list   ff-barlow-conden   flex  fs-300" >
                              <p   class="uppercase  letter-spacing-2">
                              <Link   to="/Carina"   style={{textDecoration: 'none' , color: 'white'}} >
                                Carina Nebula
                              </Link>                             
                                </p>

                              <p  class="uppercase  letter-spacing-2" >
                              <Link   to="/Stephans" style={{textDecoration: 'none' , color: 'white'}}   >
                                Stephan's Quintet
                                </Link>  
                                </p>

                              <p  class="uppercase  letter-spacing-2" >
                              <Link   to="/Southern"   style={{textDecoration: 'none' , color: 'white'}} >
                                Southern Ring Nebula
                                </Link>  
                                </p>
                          </div>

                        <article>
                            <h1 className= " heading1">Stephan's Quintet</h1>

                            <p className="text-azure sub-heading5 mb">Explore the fabulous five galaxies know as Stephan's Quintet. Relax in our
                                      newest starcruiser- The Intrepid - while exploring sparkling clusters of young stars 
                                      in these stellar nurseries. The five  compact galaxies are found in the
                                      Pegasus Constellation and are a  "must-see" destination for any  avid stargazer.
                            </p>
                            <hr></hr>
                        <div className="flex gap mt">
                              <div>
                                <h3 className="sub-heading2">Travel Distance</h3>
                                <p className="sub-heading2"> 2 Million Light Years</p>
                              </div>
                              <div>
                                <h3 className="sub-heading2">Travel Time</h3>
                                <p className="sub-heading2"> 30 Days</p>
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

export default Stephans;