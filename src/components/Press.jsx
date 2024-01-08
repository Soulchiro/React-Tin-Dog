import React from "react";
import myimage1 from './images/TechCrunch.png'; // wherever is it.
import myimage2 from './images/tnw.png' // wherever is it.
import myimage3 from './images/bizinsider.png' // wherever is it.
import myimage4 from './images/mashable.png' // wherever is it.


function Press () {
    return (

<section id="press">

    <img className="press-logo" src={myimage1} alt="tc-logo"/>
    <img className="press-logo" src={myimage2} alt="tnw-logo"/>
    <img className="press-logo" src={myimage3} alt="biz-insider-logo"/>
    <img className="press-logo" src={myimage4} alt="mashable-logo"/>
    
 </section>


    )
}


export default Press;