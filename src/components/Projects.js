import React from "react"
import Title from "./Title"
import Project from "./Project"
import Link from "next/link"
const Projects = ({projects, title, showLink}) => {
  return (
  <section className="section projects">
    <Title title={title} />
    <div className="section-center projects-center">
      {projects && projects.map((project, index) => {
       return <Project key={project.id} index={index} {...project} />
      })}     
    </div>
    {
      showLink && <Link href="/projects" className="btn center-btn">View All Projects</Link>
    }

    
  </section>
  )
}

export default Projects