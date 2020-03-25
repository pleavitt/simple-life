import PropTypes from "prop-types"
import React from "react"
import "./header.scss";
import { Link } from "gatsby";
const Header = ({ siteTitle }) => (
  <header>
  <div className="container">
    <div className="site-title">
      <h1>
        Living the simple life
      </h1>
      <div className="subtitle">
        <p>A blog exploring minimalism in life</p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <Link to="/"activeStyle={{ borderBottom: "1px solid #707070" }} >
            Home
          </Link>
        </li>

        <li>
          <Link to="/about-me"activeStyle={{ borderBottom: "1px solid #707070" }} >
            About Me
          </Link>
        </li>
        <li><a href="#">Recent Posts</a></li>
      </ul>
    </nav>
  </div>
</header>
)
    
Header.propTypes = {
      siteTitle: PropTypes.string,
  }
  
Header.defaultProps = {
      siteTitle: ``,
  }
  
  export default Header
