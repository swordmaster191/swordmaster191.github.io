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
        <Description
        data-sal="slide-right"
        data-sal-duration="2000" // changes duration of the animation (from 200 to 2000 ms)
        data-sal-delay="50" // adds delay to the animation (from 5 to 1000 ms)
        data-sal-easing="ease" // sets easing for the animation (see easings.net for reference)
        id="about"
        >
            Hello world!
        </Description>
        <ContentWrapper
        data-sal="slide-right"
            data-sal-duration="2000" // changes duration of the animation (from 200 to 2000 ms)
            data-sal-delay="50" // adds delay to the animation (from 5 to 1000 ms)
            data-sal-easing="ease" // sets easing for the animation (see easings.net for reference)
            >
            <ColumnOne
            data-sal="slide-right"
            data-sal-duration="2000" // changes duration of the animation (from 200 to 2000 ms)
            data-sal-delay="50" // adds delay to the animation (from 5 to 1000 ms)
            data-sal-easing="ease" // sets easing for the animation (see easings.net for reference)
            >
                <About>
                <h3>My Story</h3>
                <AboutP
                data-sal="slide-right"
            data-sal-duration="2000" // changes duration of the animation (from 200 to 2000 ms)
            data-sal-delay="300" // adds delay to the animation (from 5 to 1000 ms)
            data-sal-easing="ease" // sets easing for the animation (see easings.net for reference)
            >Krit is currently partaking his senior year studies in Computer Science at Mahidol University International College, a field of study that has facinated him ever since when he was young.</AboutP>
                <AboutP
                data-sal="slide-right"
            data-sal-duration="2000" // changes duration of the animation (from 200 to 2000 ms)
            data-sal-delay="700" // adds delay to the animation (from 5 to 1000 ms)
            data-sal-easing="ease" // sets easing for the animation (see easings.net for reference)
            >During his free time, Krit is an avid gamer, as well as an anime enthuthist. He also occasionally partakes in cross country running and biking.</AboutP>  
                <AboutP
                data-sal="slide-right"
            data-sal-duration="2000" // changes duration of the animation (from 200 to 2000 ms)
            data-sal-delay="1000" // adds delay to the animation (from 5 to 1000 ms)
            data-sal-easing="ease" // sets easing for the animation (see easings.net for reference)
            >Outside of his studies, Krit is an avid volunteer who loves giving back to the community. His most notable volunteering job is Tournament Coordinator for the naval-based video game World of Warships, where he has been actively volunteering for the job since 2018.</AboutP>
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
    background: #f2f2f2;
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
const AboutP = styled.p`
    font-size: 1rem;
    margin-bottom: 2rem;
    font-weight: 400;
    
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
