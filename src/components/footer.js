import { Link } from "gatsby"
//import PropTypes from "prop-types"
import React from "react"

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
      <ListLink
        className="social-icon linkedin-icon"
        to="https://www.raythompsonwebdevlocal.com"
        target="new"
        title="linkedin"
      >
        <span>
          <i className="fa fa-linkedin"></i>
        </span>
      </ListLink>

      <ListLink
        className="social-icon twitter-icon"
        to="https://www.raythompsonwebdevlocal.com"
        target="new"
        title="twitter"
      >
        <span>
          <i className="fa fa-twitter"></i>
        </span>
      </ListLink>

      <ListLink
        className="social-icon facebook-icon"
        to="https://www.raythompsonwebdevlocal.com"
        target="new"
        title="facebook"
      >
        <span>
          <i className="fa fa-facebook"></i>
        </span>
      </ListLink>

      <ListLink
        className="social-icon google-icon"
        to="https://www.raythompsonwebdevlocal.com"
        target="new"
        title="google"
      >
        <span>
          <i className="fa fa-github"></i>
        </span>
      </ListLink>
    </div>
  </footer>
)

export default Footer
