import React from "react"
import Nav from '../components/nav'
import Footer from '../components/footer'
import HomeHero from '../components/HomePage/hero'
import Layout from "../layout/layout"
import SEO from '../components/SEO'



const AboutPage = () => (
  <>
  <SEO />
    <Nav />
      <Layout>
        <HomeHero />
      </Layout>
    <Footer />
  </>
)

export default AboutPage;
