import PropTypes from "prop-types"
import React from "react"
import "./header.scss";
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
        <li><a href="#" className="active">Home</a></li>
        <li><a href="#">About Me</a></li>
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
