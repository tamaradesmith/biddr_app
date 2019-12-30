import React from "react";
import { NavLink } from 'react-router-dom';
import icon from "../../image/icon.jpg"

function NavBar(props) {

  const { currentUser, onSignOut } = props;
  const handleSignOutClick = (event) => {
    event.preventDefault();
    if (typeof onSignOut === "function") {
      onSignOut(currentUser.id);
    }
  }

  return (
    <main className="NavBar">
      <figure className="menu-icon" >
        <img className="icon" src={icon} alt="biddr icon" />

      </figure>
      <NavLink to="/" className="menu-item"> Home </NavLink>
      <NavLink to="/auctions" className="menu-item"> Auctions</NavLink>
      <NavLink to="/auctions/new" className="menu-item">New Auction</NavLink>
      {currentUser ? (
        <>
          <p className="menu-item"> {currentUser.full_name}</p>
          <a href="#sign_out" onClick={handleSignOutClick} className="menu-item">Sign Out</a>
        </>
      ) : (
          <>
            <NavLink to="/sign_in" className="menu-item"> Sign In </NavLink>
          </>
        )}
    </main>
  )
}

export default NavBar;