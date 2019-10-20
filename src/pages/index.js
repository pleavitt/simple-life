import React from "react"
import { Link } from "gatsby"
import EllipsisText from "react-ellipsis-text";
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

const IndexPage = ({ data: {allMarkdownRemark: { edges: posts }}}) => (<Layout>
  <SEO title="Home" />
  {posts.map(post => {
    const { date, comments, featuredImage, title, path } = post.node.frontmatter;
    return (<div className="main-post">
      <Img fluid={featuredImage.childImageSharp.fluid} />
      <div className="date-comments">{`${date} | ${comments} comments`}</div>
      <Link to={path} className="read-more"><h1>{title}</h1></Link>
      <p className="preview"><EllipsisText text={post.node.htmlAst.children[2].children[0].value} length={150} /></p>
      <Link to={path} className="read-more">continue reading</Link>
    </div>);
  })}
</Layout>)

export const pageQuery = graphql`
query MyQuery {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          path
          comments
          date(formatString: "MMMM DD, YYYY")
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 800) {
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
`

export default IndexPage
