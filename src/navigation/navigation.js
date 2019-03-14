import React, { Component } from 'react';
import '../assets/css/bootstrap.min.css';
import '../assets/css/main-gallery.css';
import {Link} from "react-router-dom"
const Navigation = props => {
  return (
    <header>
    <h3>Movies</h3>
    <nav>
        <ul>
            <li className="listnav"><Link to="/">Home</Link></li>
            <li className="listnav"><Link to="/profile">Profile</Link></li>
            <li className="listnav"><Link to="/signin">Sign In</Link></li>
            <li className="listnav"><Link to="/" onClick={() => props.postSignout()}>Log Out</Link></li>
        </ul>
    </nav>
  </header>
  )
}


export default Navigation;