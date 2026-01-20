import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import SEO from "../components/seo"
import {Image, GatsbyImage} from "gatsby-plugin-image"
// ...GatsbyImageSharpFluid

const ProjectsPage = ({
  data:{allStrapiProject: {nodes: projects}}
}) => {
  return (
    <Layout>
      <SEO title="Projects" />
      <section className="projects-page">
        <Projects projects={projects} title="all projects" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProject {
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


export default ProjectsPage
