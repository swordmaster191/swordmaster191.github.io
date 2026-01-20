import React from "react"
import Image from "next/image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"

const Project = ({description, title, github, stack, url, image, index}) => {
  // Determine Image URL
  let imageUrl = "/assets/hero-img.png" // Default/Fallback
  
  if (image) {
      if (typeof image === 'string') imageUrl = image;
      else if (image.url) imageUrl = image.url; // v3 or flat
      else if (image.data?.attributes?.url) imageUrl = image.data.attributes.url; // v4
      // Gatsby structure fallback
      else if (image.localFile?.childImageSharp?.gatsbyImageData?.images?.fallback?.src) {
          imageUrl = image.localFile.childImageSharp.gatsbyImageData.images.fallback.src;
      }
  }

  // Handle Relative URLs from Strapi
  if (imageUrl && !imageUrl.startsWith('http') && !imageUrl.startsWith('/assets')) {
       // Assume Strapi relative URL
       imageUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'}${imageUrl.startsWith('/') ? '' : '/'}${imageUrl}`;
  }

  return (
    <article className="project">
      <div className="project-img" style={{position: 'relative', height: '20rem', display: 'block'}}>
         <Image 
            src={imageUrl} 
            alt={title || "Project Image"} 
            fill 
            style={{objectFit: 'cover', borderRadius: '0.25rem'}} 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
         />
      </div>
      <div className="project-info">
        <span className="project-number">0{index + 1}.</span>
        <h3>{title}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-stack">
          {stack.map((item) => {
            return <span key={item.id}>{item.title}</span>})}
        </div>
        <div className="project-links">
          <a href={github} target="_blank" rel="noopener noreferrer">
            <FaGithubSquare className="project-icon" />
          </a>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <FaShareSquare className="project-icon" />
          </a>
        </div>
      </div>
  
    </article>
    )
}

export default Project