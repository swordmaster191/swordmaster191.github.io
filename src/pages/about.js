import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import {Image, GatsbyImage} from "gatsby-plugin-image"
// ...GatsbyImageSharpFluid
const About = ({
  data:{
    allStrapiAbout:{nodes},
  }
}) => {

  const{info, stack, title, image} = nodes[0]

  return <Layout>
    <section className="about-page">
      <div className="section-center about-center">
        <GatsbyImage image={image.localFile.childImageSharp.gatsbyImageData} className="about-img" />
        <article className="about-text">
          <Title title={title} />
          <p>{info}</p>
          <div className="about-stack">
            {stack.map((item) => {
              return <span key={item.id}>{item.title}</span>
              })}
          </div>

        </article>
      </div>
    </section>

  </Layout>
}


export const query = graphql`
  {
    allStrapiAbout {
      nodes {
        stack {
          id
          title
        }
        title
        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        info
      }
    }
  }
`


export default About
