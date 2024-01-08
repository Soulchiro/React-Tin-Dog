import React from "react";
import myimage5 from './images/iphone6.png' // wherever is it.

function Title () {
    return (

<section id="title">

    <div className="container-fluid">

  <nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand" href="">tindog</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="#footer">Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#pricing">Pricing</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#cta">Download</a>
          </li>
        </ul>
      </div>
  </nav>

    <div className="row">

        <div className="col-lg-6">
          <h1 className="headingtitle">Meet new and interesting dogs nearby.</h1>
          <button className="btn btn-dark btn-lg download-button" type="button"><i class="fa-brands fa-apple"></i> Download</button>
          <button className="btn btn-outline-light btn-lg download-button" type="button"><i class="fa-brands fa-google-play"></i> Download</button>
        </div>


        <div className="col-lg-6 title-image-container">
          <img className="title-image" src={myimage5} alt="iphone-mockup"/>
        </div>
      </div>
    </div>

</section>

    )
}


export default Title;