import React from "react"
import { Link } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const Hero = () => {
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <h4>Hi, I'm Krit</h4>
          <h1>Senior Modern Workplace Solutions Specialist</h1>
          <p className="hero-text">
            Computer Science Graduate from MUIC. Experienced developer in FinTech and Modern Workplace Solutions. 
            Skilled in Python, C#, Java, Unity, SQL, and Atlassian Suite. Currently driving productivity at Agoda.
          </p>
          <div className="btn-container">
             <Link to='/contact' className="btn">
              Let's Connect
            </Link>
             <Link to='/projects' className="btn btn-outline" style={{marginLeft: '1rem', background: 'transparent', border: '1px solid var(--clr-primary-5)'}}>
              View Work
            </Link>
          </div>
         
          <div style={{marginTop: '2rem'}}>
             <SocialLinks />
          </div>
        </article>
      </div>
    </header>
  )
}

export default Hero