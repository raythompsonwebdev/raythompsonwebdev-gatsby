import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import $ from 'jquery'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.sitedesciption = props.siteDescription
    this.sitetitle = props.siteTitle
  }

  componentDidMount() {
    // Jquery here $(...)...
    // Hide/show toggle button on scroll
    var position, direction, previous

    $(window).scroll(function() {
      if ($(this).scrollTop() >= position) {
        direction = "down"
        if (direction !== previous) {
          $("header button.menu-toggle").addClass("hide")

          previous = direction
        }
      } else {
        direction = "up"
        if (direction !== previous) {
          $("header button.menu-toggle").removeClass("hide")

          previous = direction
        }
      }
      position = $(this).scrollTop()
    })

    // sliding menu mobile
    $("button.menu-toggle").on("click", function(event) {
      event.preventDefault()

      // create menu variables
      var slideoutMenu = $("header #main-nav")
      var slideoutMenuWidth = $("header #main-nav").width()

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
  }

  render() {
    const ListLink = props => (
      <li className="menu-item">
        {console.log(props)}
        <Link to={props.to}>{props.children}</Link>
      </li>
    )

    return (
      <header>
        {console.log(this.sitetitle)}
        <div className="site-logo">
          <Link to="/">R</Link>
        </div>

        <hgroup>
          <h1 id="logo">{this.sitetitle}</h1>
          <h2>{this.sitedesciption}</h2>
        </hgroup>

        <button
          className="menu-toggle"
          id="menu-toggle"
          aria-controls="primary-menu"
          aria-expanded="false"
        >
          Menu
        </button>

        <nav id="main-nav">
          <ul>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/about">About</ListLink>
            <ListLink to="/project">Projects</ListLink>
            <ListLink to="/blog">Blog</ListLink>
            <ListLink to="/contact">Contact</ListLink>
          </ul>
        </nav>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
