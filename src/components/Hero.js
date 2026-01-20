import React from "react"
import Link from "next/link"
import SocialLinks from "../constants/socialLinks"
import Image from "next/image"
import { MdTravelExplore } from "react-icons/md"
import akaneGif from "../assets/akane.gif"

const Hero = () => {
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <div className="hero-photo-container">
          <Image 
            src={akaneGif} 
            alt="Akane Kurokawa" 
            className="hero-photo"
            width={282}
            height={282}
            unoptimized={true}
          />
          <span className="photo-tooltip">Akane!</span>
        </div>
        <article className="hero-info" style={{ textAlign: 'center' }}>
          <h1>Krit Visitstump</h1>
          {/* <h4 className="job-title">Senior Modern Workplace Solutions Specialist</h4> */}
          <p className="hero-text">
            I'm a Computer Science graduate and experienced developer passionate about building efficient solutions. 
            Currently driving productivity and shaping the future of modern workplace at <a href="https://www.agoda.com" target="_blank" rel="noopener noreferrer" className="company-logo"><MdTravelExplore className="company-icon" /> Agoda</a>.
          </p>
          <div className="hero-socials">
             <SocialLinks />
          </div>
        </article>
      </div>
    </header>
  )
}

export default Hero
