import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import Abouts from "../components/Abouts"
import Stats from "../components/Stats"
import Contact from "../components/Contact"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Abouts />
    <Stats />
  </Layout>
)

export default IndexPage

