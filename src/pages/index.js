import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Recent from "../components/recent";
import "./index.scss";

const HeadlinePost = ({ date, comments, featuredImage, title, path, key, text }) => {
  const preview = text.length > 250 ? `${text.substring(0, 250)}...` : text;

  return (
      <article key={key} className="main-post">
        <div className="image-meta">
          <Img fluid={featuredImage.childImageSharp.fluid} />
          <div className="date-comments">{`${date} | ${comments} comments`}</div>
        </div>
        <div className="content">
        <Link to={path} className="read-more">
            <h1>{title}</h1>
          </Link>
          <p className="preview">{preview}</p>
          <Link to={path} className="read-more">continue reading</Link>
        </div>
      </article>
  )
}

const RecentPost = ({ date, comments, featuredImage, title, path, key, text }) => {
  const preview = text.length > 150 ? `${text.substring(0, 150)}...` : text;
  return (
      <article key={key} className="recent-post">
        <div className="image-meta">
          <Img fluid={featuredImage.childImageSharp.fluid} />
          <div className="date-comments">{`${date} | ${comments} comments`}</div>
        </div>
        <div className="content">
          <Link to={path} className="read-more">
            <h1>{title}</h1>
          </Link>
          <p className="preview">{preview}</p>
          <Link to={path} className="read-more">continue reading</Link>
        </div>
      </article>
  )
}


const IndexPage = ({ data: { allMarkdownRemark: { edges: posts } } }) => (
<Layout>
  <SEO title="Home" />
  <div className="posts">
  {posts.map((post, key) => {
    if (key === 0){
      return <HeadlinePost key={key} text={post.node.htmlAst.children[2].children[0].value} {...post.node.frontmatter}/>
    }
    return <RecentPost key={key} text={post.node.htmlAst.children[2].children[0].value} {...post.node.frontmatter}/>
  })}
  </div>
  <Recent />
  </Layout>
)

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
