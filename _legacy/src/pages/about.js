import React from "react"
import Layout from "../components/layout"
import Title from "../components/Title"
import SEO from "../components/seo"

const About = () => {
  const title = "About Me"
  const info = "An enthusiastic graduate who majored in Computer Science at Mahidol University International College (MUIC) with abilities to self-teach and understand technological needs and advancement. Experienced developer with a demonstrated history of working in the financial technology and services industry. Skilled in English, Thai, Communication and Customer Service, together with knowledge in programming languages and software stack including Python, C/C++, C#, Java, Unity, SQL, and JavaScript."
  const stack = [
    {id: 1, title: "Python"},
    {id: 2, title: "C#"},
    {id: 3, title: "Java"},
    {id: 4, title: "Unity"},
    {id: 5, title: "SQL"},
    {id: 6, title: "Atlassian"},
    {id: 7, title: "Docker"},
    {id: 8, title: "Git"}
  ]

  // Image handling would need a static import if we remove the query, 
  // or we can remove the image for now if we don't have a local one handy,
  // OR we can keep the query just for the image but hardcode the text.
  // For simplicity and robustness given we are detaching from Strapi text, 
  // let's assume we might lose the image if it was purely dynamic.
  // We can try to use a static placeholder or just text for now to be safe.
  
  return <Layout>
    <SEO title="About" description="About Krit Visitstump" />
    <section className="about-page">
      <div className="section-center about-center">
        {/* <img src={someLocalImage} className="about-img" /> */} 
        {/* Temporarily removing image to ensure build success without Strapi */}
        <article className="about-text" style={{gridColumn: '1 / -1'}}> 
          <Title title={title} />
          <p>{info}</p>
          <div className="about-stack">
            {stack.map((item) => {
              return <span key={item.id}>{item.title}</span>
              })}
          </div>

        </article>
      </div>
    </section>

  </Layout>
}

export default About
