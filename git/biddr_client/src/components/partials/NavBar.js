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
      <NavLink to="/auctions/new">New Auction</NavLink>
      {currentUser ? (
        <>
          <p> {currentUser.full_name}</p>
          <a href="#sign_out" onClick={handleSignOutClick}>Sign Out</a>
        </>
      ) : (
          <>
            <NavLink to="/sign_in"> Sign In </NavLink>
          </>
        )}
    </main>
  )
}

export default NavBar;