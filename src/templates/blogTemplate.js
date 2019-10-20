import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout";
import "./blogTemplate.scss";
import Img from "gatsby-image"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { html } = markdownRemark
  return (
    <Layout>
      <div className="blog-post-container">
        <Img fluid={data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid} />
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }

      }
    }
  }
`