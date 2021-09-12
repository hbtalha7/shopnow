import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav>
      <div className="Band">
        <input 
        type="checkbox" 
        id="checkbar" />
        <label htmlFor="checkbar" className="checkbtn">
          <i className="fa fa-bars" aria-hidden="true"></i>
        </label>
        <Link to="/">
          <h2 id="BandName">Up North</h2>
        </Link>
        <Link to="/cart">
          <input 
          type="checkbox" 
          id="checkcart" />
          <label htmlFor="checkcart" className="checkcart">
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          </label>
        </Link>
        <ul id="navul">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/about">Service</Link>
          </li>
          <li>
            <Link to="/about">Login</Link>
          </li>
          <li>
            <Link to="/about">SignUp</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
