import React from "react";
import { NavLink } from 'react-router-dom';
import icon from "../../image/icon.jpg"

function NavBar(props){
  return(
<main className="NavBar">
    <figure className="menu-icon" >
        <img className="icon" src={icon} alt="biddr icon"/>

    </figure>
    <NavLink to="/" className="menu-item"> Home </NavLink>
      <NavLink to="/auctions" className="menu-item"> Auctions</NavLink>
    
</main>
  )
}

export default NavBar;