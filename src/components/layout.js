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
import "./layout.css"
import "../css/style.scss"
import $ from "jquery"
//import Transition from '../components/transition'
import TransitionLink from 'gatsby-plugin-transition-link'

// Hide/show toggle button on scroll
$(document).ready(function($) {
  // sliding menu mobile
  $("header button.menu-toggle").on("click", function(event) {
    event.preventDefault()

    // create menu variables
    var slideoutMenu = $("header nav ")
    var slideoutMenuWidth = $("header nav").width()

    // toggle open class
    slideoutMenu.toggleClass("open")

    // slide menu
    if (slideoutMenu.hasClass("open")) {
      slideoutMenu.animate({
        left: "0px",
      })
    } else {
      slideoutMenu.animate(
        {
          left: -slideoutMenuWidth,
        },
        500
      )
    }
  })
})


const Layout = ({ children }) => {
  
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
  
  return (
    <div id="wrapper_container">
      <Header
        siteTitle={data.site.siteMetadata.title}
        siteDescription={data.site.siteMetadata.description}
      />

      {/*<Transition location={location}*/}
      <TransitionLink
                
                exit={{ length: 0.5 }}
                entry={{ delay: 0.5 }}
              >
        <main id="main-content">{children}</main>
      </TransitionLink>
      {/* </Transition>*/}

      <br />

      <Footer />

      <p id="copyr">
        © {new Date().getFullYear()}, Built with {` `} <Link to="">Gatsby</Link>
      </p>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
