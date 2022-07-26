import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
      <main className="error-page">
        <div className="error-container">
          <h1>Oh dear!</h1>
          <h3>It seems that you have broken the matrix to my website.</h3>
          <h1></h1>
          <Link to="/" className="btn">Go back to the homepage</Link>
        </div>
    </main>
    </Layout>
  )
}

export default Error
