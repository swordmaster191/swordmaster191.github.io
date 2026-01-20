import Title from "@/components/Title";

export const metadata = {
  title: "About | Krit Visitstump",
};

const About = () => {
  const title = "About Me"
  const info = "An enthusiastic graduate who majored in Computer Science at Mahidol University International College (MUIC) with abilities to self-teach and understand technological needs and advancement. Experienced developer with a demonstrated history of working in the financial technology and services industry. Skilled in English, Thai, Communication and Customer Service, together with knowledge in programming languages and software stack including Python, C/C++, C#, Java, Unity, SQL, and Atlassian Suite."
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

  return (
    <section className="about-page">
      <div className="section-center about-center">
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
  )
}
export default About;
