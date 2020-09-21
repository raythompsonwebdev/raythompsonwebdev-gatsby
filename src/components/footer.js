import { Link } from "gatsby"
import React from "react"
import PropTypes from "prop-types"
import {
  FaFacebookSquare,
  FaGithubAlt,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa"

const ListLink = props => (
  <li className="menu-item">
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Footer = () => (
  <footer>
    <ul>
      <ListLink to="/privacy">Privacy</ListLink>
    </ul>

    <div className="socialpics">
      <a
        className="social-icon linkedin-icon"
        href="https://www.linkedin.com/in/raymond-t-1b42b7b8/"
        target="new"
        title="linkedin"
      >
        <span>
          <FaLinkedinIn className="fa fa-linkedin" />
        </span>
      </a>

      <a
        className="social-icon twitter-icon"
        href="https://twitter.com/RayThompWeb/"
        target="new"
        title="twitter"
      >
        <span>
          <FaTwitter className="fa fa-twitter" />
        </span>
      </a>

      <a
        className="social-icon facebook-icon"
        href="https://www.facebook.com/raythompsonwebdeveloper/"
        target="new"
        title="facebook"
      >
        <span>
          <FaFacebookSquare className="fa fa-facebook" />
        </span>
      </a>

      <a
        className="social-icon github-icon"
        href="https://github.com/raythompsonwebdev"
        target="new"
        title="github"
      >
        <span>
          <FaGithubAlt className="fa fa-github" />
        </span>
      </a>
    </div>
  </footer>
)

ListLink.propTypes = {
  to: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
}

export default Footer