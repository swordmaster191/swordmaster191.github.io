import React from 'react'
import styled from 'styled-components'
import {GiEarthAmerica} from 'react-icons/gi'
import {MdTimer} from 'react-icons/md'
import {FaMoneyCheck} from 'react-icons/fa'
import { GoCode } from 'react-icons/go'

const StatsData = [
    {
        icon: (<GiEarthAmerica/>),
        title: "Multilangual",
        desc: "Fluent in Thai & English"
    },
    {
        icon: (<GoCode/>),
        title: "Code Ready",
        desc: "Python, Java, C# & many more!"
    },
    {
        icon: (<MdTimer/>),
        title: "Team Player",
        desc: "Able to adapt to new environment quickly"
    },
    {
        icon: (<FaMoneyCheck/>),
        title: "Test 4",
        desc: "Testing"
    }
]

const Stats = () => {
    return (
        <StatsContainer>
            <Heading
            data-sal="slide-up"
            data-sal-duration="2000" // changes duration of the animation (from 200 to 2000 ms)
            data-sal-delay="5" // adds delay to the animation (from 5 to 1000 ms)
            data-sal-easing="ease" // sets easing for the animation (see easings.net for reference)
            >Experiences</Heading>
            <Wrapper
            data-sal="slide-up"
            data-sal-duration="2000" // changes duration of the animation (from 200 to 2000 ms)
            data-sal-delay="150" // adds delay to the animation (from 5 to 1000 ms)
            data-sal-easing="ease" // sets easing for the animation (see easings.net for reference)
            >
                {StatsData.map((item, index) => {
                    return(
                        <StatsBox key={index}>
                        <Icon>{item.icon}</Icon>
                        <Title>{item.title}</Title>
                        <Description>{item.desc}</Description>
                        </StatsBox>
                    )
                })}
                </Wrapper>
        </StatsContainer>
    )
}

export default Stats

const StatsContainer = styled.div`
    width: 100%;
    background: #fff;
    color: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4rem calc((100vw - 1300px) / 2);
`

const Heading = styled.h1`
    text-align: start;
    font-size: clamp(1.5rem, 5vw, 2rem);
    margin-bottom: 3rem;
    padding: 0 2rem;
`

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 500px){
        grid-template-columns: 1fr;
    }
`

const StatsBox = styled.div`
    height: 100%;
    width: 100%;
    padding: 2rem;
`
const Icon = styled.div`
    font-size: 3rem;
    margin-bottom: 1rem;
    
`
const Title = styled.p`
   font-size: clamp(1rem, 2.5vw, 1.5rem);
   margin-bottom: 0.5rem;
`
const Description = styled.p`
    
`