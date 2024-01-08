import React from "react";
import Avatar from "./Avatar";



function Card () {
    return (

  <section id="pricing">

      <h1 className="headingtitle"> A Plan for Every Dogs Needs </h1>
      <p className="headingtitle"> Simple and affordable price plans for you and your dog </p>
      
    <div className="row">


          <div className="pricing-column col-lg-4 col-md-6">
            <div className="card" >
              <div className="card-body">
            <h3 className="card-title">Chihuahua</h3>
            <h2>Free</h2>
            <p>5 Matches Per Day</p>
            <p>10 Messages Per Day</p>
            <p>Unlimited App Usage</p>
            <p> </p>
              </div>
          </div>
        </div>



        <div className="pricing-column col-lg-4 col-md-6">
            <div className="card" >
            <h3 className="card-title">Labrador</h3>
            <h2>$49 / mo</h2>
            <p>Unlimited Matches</p>
            <p>Unlimited Messages</p>
            <p>Unlimited App Usage</p>
            <p> </p>
            <button className="btn btn-lg btn-block btn-dark" type="button">Sign Up</button>
        </div>
      </div>



        <div className="pricing-column col-lg-4 col-md-6">
            <div className="card" >
            <h3 className="card-title">Mastiff</h3>
            <h2>$99 / mo</h2>
            <p>Pirority Listing</p>
            <p>Unlimited Matches</p>
            <p>Unlimited Messages</p>
            <p>Unlimited App Usage</p>
            <button className="btn btn-lg btn-block btn-dark" type="button">Sign Up</button>
          </div>
        </div>


  </div>

  </section>

    )

    }




    
export default Card;