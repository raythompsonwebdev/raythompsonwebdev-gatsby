/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
//import "../fonts/fontawesome/css/font-awesome.css"
import "../static/css/style.scss"
import posed, { PoseGroup } from "react-pose"

const Layout = ({ children, location }) => {

  console.log(location)
  
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  const timeout = 0

  const RoutesContainer = posed.div({
    enter: {
      opacity: 1,
      x: 0,
      delay: timeout,
      delayChildren: timeout,
    },
    exit: {
      opacity: 0,
      transition: `opacity ${timeout}ms ease-in-out`,
      x: 30,
    },
  })

  return (
    <div id="wrapper_container">
      <Header
        siteTitle={data.site.siteMetadata.title}
        siteDescription={data.site.siteMetadata.description}
      />

      <PoseGroup>
        <RoutesContainer key={location.pathname}>{children}</RoutesContainer>
      </PoseGroup>

      <Footer />

      <p id="copyr">
        © {new Date().getFullYear()}, Built by {` `}{" "}
        <Link to="/index">raythompsonwebdev</Link>
      </p>

    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.any,
}

export default Layout
