import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import {Image, GatsbyImage} from "gatsby-plugin-image"
// ...GatsbyImageSharpFluid

const ProjectsPage = () => {
  return <h2>projects page</h2>
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
