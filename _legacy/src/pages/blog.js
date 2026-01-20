import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
import SEO from "../components/seo"

const Blog = () => {
  return (
    <Layout>
      <SEO title="Blog" />
      <section className="blog-page">
        <div className="section-center">
             <h2>Coming Soon...</h2>
        </div>
      </section>
    </Layout>
  )
}

export default Blog
