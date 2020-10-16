import React from "react"
import Nav from '../components/nav'
import Footer from '../components/footer'
import HomeHero from '../components/HomePage/hero'
import Portfolio from '../components/HomePage/portfolio'
import Layout from "../layout/layout"
import SEO from '../components/SEO'
import { Title, Link, Meta } from "react-head";


const IndexPage = () => (
  <>
  <SEO />
    <Title>Studio projektowe BUILDERAL | Nowocześni architekci</Title>
    <Meta name="description" content="Lorem ipsum dolor sit amet." />
    <Link rel="canonical" content="http://localhost:8000" />
    <Nav />
      <Layout>
        <HomeHero />
        <Portfolio />
      </Layout>
    <Footer />
  </>
)

export default IndexPage;
