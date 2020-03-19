import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import "./recent.scss";


const PreviewPost = ({ featuredImage, title, path, key }) => {
  return (
    <div key={key} className="recent">
      <Img className="title-image" fluid={featuredImage.childImageSharp.fluid} />
      <Link to={path}>
        <h2>{title}</h2>
      </Link>
  </div>
)
}


const Recent = () => (
  <StaticQuery
    query={graphql`
      query RecentQuery {
        allMarkdownRemark(filter: {frontmatter: {path: {regex: "/blog/"}}}) {
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
            }
          }
        }
      }
    `}
    render={data => {
      const { edges: posts } = data.allMarkdownRemark
      return (
        <div className="recent-container">
          <h1>Recent Posts</h1>
          {posts.map((post, key) => <PreviewPost key={key} {...post.node.frontmatter}  />)}
        </div>
      );
    }}
  />
)

export default Recent
