import React from 'react'
// import '../App.css';
import  "./LandingPage.css"

function LandingPage() {
  return (
    <main className="home">
        <div className="grid-container grid-container--new ">

          <div>
              <h2 className=" heading5  letter-spacing-1 text-azure  uppercase">Explore Far Off Galaxies With
            <span className= "heading2  text-white  d-block">  Space Tours  </span> 
              </h2>
              {/* <p className="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad suscipit, 
              commodi magnam perspiciatis in, nesciunt consectetur error atque 
              beatae, natus quam. Nemo minima repellat exercitationem!
              </p> */}
          </div>
        <div>
        <a href="./Destination"    className="lg-button-hover  bg-white">Explore</a>
        </div>
      </div>


    </main>
  )
}

export default LandingPage;

