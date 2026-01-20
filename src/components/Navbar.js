import React from "react";
import logo from "../assets/logo.svg"
import Link from "next/link"
import PageLinks from "../constants/links"
import Image from "next/image"

const Navbar = () =>{
    return (
      <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
    )
  }

export default Navbar
