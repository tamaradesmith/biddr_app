import React from "react";
import hammer from "../image/hammer.jpg"

function WelcomePage(props){
  return(
    <main className="home-icon" >
      <figure >
        <img src={hammer} alt="biddr Hammer" />

      </figure>
    </main>
  )
}

export default WelcomePage