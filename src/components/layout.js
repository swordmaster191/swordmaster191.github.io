import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Navbar from "./Navbar"
import "./layout.css"

const Layout = ({ children }) => {
  return(
    <>
    <Navbar />
    {children}
    </>
  )
  }
  

export default Layout
