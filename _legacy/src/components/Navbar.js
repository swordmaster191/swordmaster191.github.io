import React from "react";
import logo from "../assets/logo.svg"
import { Link } from "gatsby"
import PageLinks from "../constants/links"

const Navbar = () =>{
    return (
      <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
             <img src={logo} alt="logo"/>
          </Link>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
    )
  }

export default Navbar