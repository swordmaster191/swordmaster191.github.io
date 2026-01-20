import React from "react"

export const metadata = {
  title: "Contact | Krit Visitstump",
};

const Contact = () => {
  return (
      <section className="contact-page">
        <article className="contact-form">
          <h3>Contact me!</h3>
          <form action="https://formspree.io/f/xlezqzyg" method="POST">
            <div className="form-group">
              <input type="text" placeholder="name" name='name' className="form-control" />
              <input type="email" placeholder="e-mail address" name='email' className="form-control" />
              <textarea rows="5" placeholder="message" name="message" className="form-control"/>
            </div>
            <button type="submit" className="submit-btn btn">Send</button>
          </form>
        </article>
      </section>
  )
}
export default Contact
