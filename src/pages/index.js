import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import HeroSection from "../components/HeroSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <h1>Home Page</h1> */}
    <HeroSection />
    <Image />
  </Layout>
)

export default IndexPage
