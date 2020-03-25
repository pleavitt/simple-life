import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import "./recent.scss";


const PreviewPage = ({ featuredImage, path, key, text }) => {
  return (
    <div key={key} className="recent">
      <Img className="title-image" fluid={featuredImage.childImageSharp.fluid} />
      <Link to={path}>
        <p>{text.substring(0, 80)}</p>
      </Link>
  </div>
)
}


const About = () => (
  <StaticQuery
    query={graphql`
      query AboutQuery {
        allMarkdownRemark(filter: {frontmatter: {path: {regex: "/about/"}}}) {
          edges {
            node {
              frontmatter {
                title
                path
                featuredImage {
                  childImageSharp {
                    fluid(maxWidth: 405) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              htmlAst
            }
          }
        }
      }
    `}
    render={data => {
      const { edges: posts } = data.allMarkdownRemark
      return (
        <div className="recent-container">
          <h1>About Me</h1>
          {posts.map(({node}, key) => <PreviewPage key={key} text={node.htmlAst.children[2].children[0].value} {...node.frontmatter}  />)}
        </div>
      );
    }}
  />
)

export default About
