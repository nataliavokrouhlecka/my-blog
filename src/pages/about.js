import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <h1>About {data.site.siteMetadata.title}</h1>
    <div id="about" className="about">
        <p>Hi, I'm Natalia! I'm a web developer. <br/> I enjoy organising workshops for developers. I also teach children programming using Scratch and Ozobots. <br/> I am planning to share here my experience and ideas as well as experiment a bit with some new technologies - it is the excuse in case something goes wrong and the blog is down or broken ¯\_(ツ)_/¯.</p>
      </div>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`