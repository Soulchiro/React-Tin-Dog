import React from "react";
import myimage6 from './images/lady-img.jpg' // wherever is it.
import myimage7 from './images/dog-img.jpg' // wherever is it.

function Avatar (props) {
    return ( 

  <section id="testimonials">
    <div id="testimonials-carousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <h2 className="testimonial-text">I no longer have to sniff other dogs for love. I've found the hottest Corgi on TinDog. Woof.</h2>
          <img className="dog" src={myimage6} alt="dog-profile" />
          <em>Pebbles, New York</em>
        </div>
        <div className="carousel-item">
          <h2 className="testimonial-text">My dog used to be so lonely, but with TinDog's help, they've found the love of their life. I think.</h2>
          <img className="dog testimonial-image" src={myimage7} alt="dog-profile" />
          <em>Beverly, Illinois</em>
        </div>

      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#testimonials-carousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#testimonials-carousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

</section>



    )
}

export default Avatar;