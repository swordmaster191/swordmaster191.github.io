import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import {AiOutlineGithub, AiFillLinkedin} from "react-icons/ai"

const iconsLink = [
    {
        icon: (<AiOutlineGithub/>),
        link: "http://github.swordmaster.tech/"
    },
    {
        icon: (<AiFillLinkedin/>),
        link: "http://linkedin.swordmaster.tech/"
    }
  ]

const Footer = () => {
    return (
        <FooterContainer>
                <FooterDescription>
                <h1>SwordMaster</h1>
                <p>©2022 Krit Visitstump</p>
                </FooterDescription>
                <FooterLinksWrapper>
            <FooterLinkItems>
            
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
    background: #f2f2f2;
`
const FooterDescription = styled.div`
    padding: 0 2rem;

    h1{
        margin-bottom: 3rem;
        color: #f89d13;
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
    align-items: flex-end;
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
// The link to each of the pages
const NavLinkIcon = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 .5rem;
  font-size: 1.5rem;
  height: 100%;
  cursor: pointer;
  
`

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px){
    display: none;
  }
`