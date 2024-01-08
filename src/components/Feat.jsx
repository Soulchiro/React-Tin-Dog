import React from "react";

function Feat (props) {
    return ( 
      
        <section id="features">
        <div className="row">
          <div className="feature-box col-lg-4">
            <h3><i className="fa-solid fa-circle-check fa-2x"></i> <br /> Easy to use.</h3>
            <p>So easy to use, even your dog could do it.</p>
          </div>
          <div className="feature-box col-lg-4">
            <h3><i className="fa-solid fa-bullseye fa-2x"></i> <br /> Elite Clientele</h3>
            <p>We have all the dogs, the greatest dogs.</p>
          </div>
          <div className="feature-box col-lg-4">
            <h3><i className="fa-solid fa-heart fa-2x"></i> <br /> Guaranteed to work.</h3>
            <p>Find the love of your dog's life or your money back.</p>
          </div>
         </div>
      </section>

    )
}

export default Feat;