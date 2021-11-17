import React from "react";
import styled from "styled-components";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import Image from "gatsby-image"
import { IoMdCheckmarkCircleOutline} from 'react-icons/io'
import { FaRegLightbulb } from "react-icons/fa";
import { graphql, useStaticQuery } from "gatsby";

const Abouts = () =>{
    const data = useStaticQuery(graphql`
    query {
        allImageSharp {
            edges {
              node {
                id
                fluid{
                  src
                  srcSet
                  base64
                  aspectRatio
                  originalImg
                  sizes        
                }
              }
            }
          }
        }
      
      
    `)

    return(
        <AboutsContainer>
        <TopLine
        data-sal="slide-right"
        data-sal-duration="2000" // changes duration of the animation (from 200 to 2000 ms)
        data-sal-delay="5" // adds delay to the animation (from 5 to 1000 ms)
        data-sal-easing="ease" // sets easing for the animation (see easings.net for reference)
        >
            About me
        </TopLine>
        <Description
        data-sal="slide-right"
        data-sal-duration="2000" // changes duration of the animation (from 200 to 2000 ms)
        data-sal-delay="50" // adds delay to the animation (from 5 to 1000 ms)
        data-sal-easing="ease" // sets easing for the animation (see easings.net for reference)
        >
            Hello, I'm Krit Visitstump!
        </Description>
        <ContentWrapper>
            <ColumnOne
            data-sal="slide-right"
            data-sal-duration="2000" // changes duration of the animation (from 200 to 2000 ms)
            data-sal-delay="50" // adds delay to the animation (from 5 to 1000 ms)
            data-sal-easing="ease" // sets easing for the animation (see easings.net for reference)
            >
                <About>
                <FaRegLightbulb />
                    <IoMdCheckmarkCircleOutline />
                    <h3>Test</h3>
                    <p>Desc</p>
                </About>
                <About>
                    <IoMdCheckmarkCircleOutline />
                    <h3>Test 2</h3>
                    <p>Desc</p>
                </About>
                <About>
                    <IoMdCheckmarkCircleOutline />
                    <h3>Test 3</h3>
                    <p>Desc</p>
                </About>
            </ColumnOne>
            <ColumnTwo>
                {data.allImageSharp.edges.map(edge => 
                    <Images fluid={edge.node.fluid}/>)}
                
            </ColumnTwo>
        </ContentWrapper>
        </AboutsContainer>
    )
}

export default Abouts

const AboutsContainer = styled.div`
    width: 100%;
    background: #fcfcfc;
    color: #000;
    padding: 5rem calc((100vw - 1300px) / 2);
    height: 100%;
`
const TopLine = styled.p`
    color: #077bf1;
    font-size: 1rem;
    padding-left: 2rem;
    margin-bottom: 0.75rem;
`
const Description = styled.p`
    text-align: start;
    padding-left: 2rem;
    margin-bottom: 4rem;
    font-size: clamp(1.5rem, 5vw, 2rem);
    font-weight: bold;
`
const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }
`
const ColumnOne = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }
`
const About = styled.div`
    padding-top: 1rem;
    padding-right: 2rem;

    h3{
        margin-bottom: 1rem;
        font-size: 1.5rem;
        font-style: italic;
    }
    p{
        color: #3b3b3b;
    }
    
`
const ColumnTwo = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 2rem;
    grid-gap: 10px;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }
    
`

const Images = styled(Image)`
    border-radius: 10px;
    height: 100%;
`
