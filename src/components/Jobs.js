"use client"
import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import Link from "next/link"
import jobs from "../constants/experience"

const Jobs = () => {
  const[value, setValue] = React.useState(0)
  const{company, position, date, description} =  jobs[value]

  return <section className="section jobs">
  <Title title="Experience" />
  <div className="jobs-center">
    <div className="btn-container">
      {jobs.map((item, index) => {
        return <button key={item.id}
        onClick={()=>setValue(index)}
        className={`job-btn
        ${index === value && 'active-btn'}`}>
          {item.company}
        </button>
      })}
    </div>
    <article className="job-info">
      <h3>{position}</h3>
      <h4>{company}</h4>
      <p className="job-date">{date}</p>
      {
        description.map((item)=>
          {
            return <div key={item.id} className="job-desc">
              <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{item.name}</p>
            </div>
          }
        )
      }
    </article>
  </div>
  <Link href="/about" className="btn center-btn">
      More info
  </Link>
  </section>
}

export default Jobs