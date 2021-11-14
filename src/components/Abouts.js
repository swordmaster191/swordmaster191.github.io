import React from "react";
import styled from "styled-components";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { IoMdCheckmarkCircleOutline} from 'react-icons/io'
import { FaRegLightbulb } from "react-icons/fa";
import { graphql, useStaticQuery } from "gatsby";

const Abouts = () =>{
    const data = useStaticQuery(graphql`
    query {
        allFile(
          filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, name: {in: ["img", "img2"]}}
        ) {
          edges {
            node {
              childrenImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
      
    `)

    return(
        <AboutsContainer>
        <TopLine>
            Abouts
        </TopLine>
        <Description>
            What my Abouts is
        </Description>
        <ContentWrapper>
            <ColumnOne>
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
                {data.allFile.edges.map((image, key) => (
                    <Images key={key} image={image.node.childrenImageSharp.gatsbyImageData} alt={``}/>
            ))}
                
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

    @media screen and (max-width: 500px){
        grid-template-columns: 1fr;
    }
    
`

const Images = styled(GatsbyImage)`
    border-radius: 10px;
    height: 100%;
`
