import React from "react"
import Link from "next/link"

const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link href={link.url}>{link.text}</Link>
    </li>
  )
})

const PageLinks = ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}

export default PageLinks