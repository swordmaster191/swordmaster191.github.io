import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import {Image, GatsbyImage} from "gatsby-plugin-image"
// ...GatsbyImageSharpFluid

const ProjectsPage = ({
  data:{allStrapiProject: {nodes: projects}}
}) => {
  return (
    <Layout>
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
