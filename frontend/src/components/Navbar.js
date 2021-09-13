import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signout } from "../actions/useractions";
import "./navbar.css";

export default function Navbar() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch=useDispatch()
  const signoutHandler = () => {
    console.log('hi signout')
    dispatch(signout());
  };
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
          {/* <li>
            <Link to="/login" >Login</Link>
          </li>
          <li>
            <Link to="/signup">SignUp</Link>
          </li> */}
          {/* <li> */}
          {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                {userInfo.isAdmin?(<li>
                    <Link to="/additem" >
                      Sale items
                    </Link>
                  </li>):null}
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <ul>
              <li>
              <Link to="/login" >Login</Link>
            </li>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
            </ul>
            )}
          {/* </li> */}
        </ul>
      </div>
    </nav>
  );
}
