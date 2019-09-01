/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from "react"
import PropTypes from "prop-types"
import { Link, StaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import "../css/style.scss"
//import Transition from '../components/transition'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <>
        <div id="wrapper_container">
          <Header
            siteTitle={data.site.siteMetadata.title}
            siteDescription={data.site.siteMetadata.description}
          />

          <main id="main-content">{children}</main>

          <br />

          <Footer />

          <p id="copyr">
            © {new Date().getFullYear()}, Built with {` `}{" "}
            <Link to="https://www.google.com">Gatsby</Link>
          </p>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout