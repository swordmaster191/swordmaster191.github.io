import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import Video from "../assets/videos/video.mp4";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Hero = () => {
    return (
        <HeroContainer>
            <HeroContent>
                <HeroItems
                data-sal="fade"
                data-sal-duration="1000" // changes duration of the animation (from 200 to 2000 ms)
                data-sal-delay="100" // adds delay to the animation (from 5 to 1000 ms)
                data-sal-easing="easeInSine" // sets easing for the animation (see easings.net for reference)
                >
                    <HeroH1>KRIT VISITSTUMP</HeroH1>
                    <HeroP>Passionate college student majoring in Computer Science</HeroP>
                    <Button primary="true" big="true" round="true" to="#about">About Me</Button>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero

const HeroContainer = styled.div`
    background: #393e46;
    display: flex;
    justify-content: left;
    align-items: center;
    height: 100vh;
    padding: 0 1rem;
    position: relative;
    margin-top: -80px;
    color: #fff;

    :before{
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 2;
        background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.3) 0%,
            rgba(0, 0, 0, 0.6) 100%
            ),
            linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, transparent 100%);
    }

`
const HeroContentVideo = styled.div`
    display: grid;
    grid-template-columns: fr;
    margin-top: 2rem;
    grid-gap: 10px;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }
`

const HeroBackground = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

const VideoBackground = styled.video`
    width: 95%;
    height: 95%;
    filter: grayscale(100%);
`

const HeroContent = styled.div`
    z-index: 3;
    height: calc(100vh - 80px);
    max-height: 100%;
    padding: 0rem calc((100vw - 1300px) / 2);
`

const HeroItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
    text-align: left;
    height: 100vh;
    max-height: 100%;
    padding: 0;
    color: #fff;
    line-height: 1.1;
    font-weight: bold;
`

const HeroItemsVideo = styled.div`
display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
    text-align: right;
    height: 100vh;
    max-height: 100%;
    padding: 0;
    color: #fff;
    line-height: 1.1;
    font-weight: bold;

`

const HeroH1 = styled.div`
    color: #f89d13;
    font-size: clamp(1.5rem, 6vw, 4rem);
    margin-bottom: 1.5rem;
    letter-spacing: 3px;
`

const HeroP = styled.p`
    font-size: clamp(1rem, 3vw, 1.5rem);
    margin-bottom: 2rem;
    font-weight: 400;
    
`