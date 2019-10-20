import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import "./recent.scss";

const Recent = () => (
  <StaticQuery
    query={graphql`
      query RecentQuery {
        allMarkdownRemark {
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
          {posts.map(post => {
            const { featuredImage, title, path } = post.node.frontmatter;
            return (
              <div className="recent">
                <Img className="title-image" fluid={featuredImage.childImageSharp.fluid} />
                <Link to={path}><h2>{title}</h2></Link>
              </div>
            );
          })}
        </div>
      );
    }}
  />
)

export default Recent
