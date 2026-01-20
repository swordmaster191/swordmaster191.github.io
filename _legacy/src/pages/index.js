import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import SEO from "../components/seo"
export default ({data}) => {
  const {allStrapiProject:{nodes:projects},} = data

  return (
    <Layout>
    <SEO title="Home" />
    <Hero />
    <Services />
    <Jobs />
    <Projects projects = {projects} title="featured projects"
    showLink/>
  </Layout>
  )
}


export const query = graphql`
  {
    allStrapiProject(filter: {featured: {eq: true}}) {
      nodes {
        github
        id
        description
        title
        url
        stack {
          id
          title
        }
        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`