import React from "react"
import {
  FaLinkedin,
  FaGithub,
  FaDiscord,
  FaSteam,
  FaEnvelope,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaEnvelope className="social-icon"></FaEnvelope>,
    url: "mailto:krit@swordmaster.tech",
    name: "email",
    title: "Email",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/kritvisitstump/",
    name: "linkedin",
    title: "LinkedIn",
  },
  {
    id: 3,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://github.com/swordmaster191",
    name: "github",
    title: "GitHub",
  },
  {
    id: 4,
    icon: <FaDiscord className="social-icon"></FaDiscord>,
    url: null,
    name: "discord",
    title: "swordmaster",
  },
  {
    id: 5,
    icon: <FaSteam className="social-icon"></FaSteam>,
    url: "https://steamcommunity.com/id/SwordMaster191/",
    name: "steam",
    title: "SwordMaster191",
  },
]

const SocialLinks = ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>
      {data.map(link => {
        return (
          <li key={link.id}>
            {link.url ? (
              <a href={link.url} className={`social-link ${link.name}`} target="_blank" rel="noopener noreferrer">
                {link.icon}
                <span className="social-tooltip">{link.title}</span>
              </a>
            ) : (
              <div className={`social-link ${link.name}`} style={{ cursor: "default" }}>
                {link.icon}
                <span className="social-tooltip">{link.title}</span>
              </div>
            )}
          </li>
        )
      })}
    </ul>
  )
}

export default SocialLinks