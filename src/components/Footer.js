import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLinksWrapper>
                <FooterDescription>
                <h1>SwordMaster</h1>
                <p>Hello world!</p>
                </FooterDescription>
                <FooterLinkItems>
                    <FooterLinkTitle>Navigation</FooterLinkTitle>
                    <FooterLink to="/">Home</FooterLink>
                    <FooterLink to="/">About</FooterLink>
                    <FooterLink to="/">Experiences</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
            <FooterLinkItems>
                <FooterLinkTitle>Social Media</FooterLinkTitle>
                <FooterLink to="http://linkedin.swordmaster.tech/">LinkedIn</FooterLink>
                <FooterLink to="http://github.swordmaster.tech/">GitHub</FooterLink>
                <FooterLink to="http://steam.swordmaster.tech/">Steam</FooterLink>
                <FooterLink to="http://twitch.swordmaster.tech/">Twitch</FooterLink>
            </FooterLinkItems>
            </FooterLinksWrapper>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.div`
    padding: 5rem calc((100vw - 1100px) / 2);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    color: #000;
    background: #fafafb;
`
const FooterDescription = styled.div`
    padding: 0 2rem;

    h1{
        margin-bottom: 3rem;
        color: #f26a2e;
    }

    @media screen and (max-width: 500px){
        padding: 1rem;
    }
`
const FooterLinksWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media screen and (max-width: 768px){
        grid-template-columns: repeat(1fr);
    }

`
const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 2rem;

    @media screen and (max-width: 500px){
        padding: 1rem;
    }

`
const FooterLinkTitle = styled.h2`
    font-size: 14px;
    margin-bottom: 16px;
`
const FooterLink = styled(Link)`
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    color: #3d3d4e;

    &:hover{
        color: #f26a2e;
        transition: 0.3s ease-out;
    }

`