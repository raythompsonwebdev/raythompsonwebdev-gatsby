import React, { useEffect } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Image from "../components/image"

 function Header (props) {

  useEffect(() => {

    var position, direction, previous

    let menuToggle = document.getElementById("menu-toggle")

    window.scroll(function() {
      
      if (this.scrollTop() >= position) {
        direction = "down"
        if (direction !== previous) {
          menuToggle.classList.add("hide")
          previous = direction
        }
      } else {
        direction = "up"
        if (direction !== previous) {
          menuToggle.classList.remove("hide")
          previous = direction
        }
      }
      position = this.scrollTop()
    })

    // sliding menu mobile
    menuToggle.addEventListener("click", function(event) {
      event.preventDefault()

      // create menu variables
      let slideoutMenu = document.querySelector("#main-nav")
      let slideoutMenuHeight = slideoutMenu.offsetHeight

      
      // toggle open class
      slideoutMenu.classList.toggle("open")

      // slide menu
      if (slideoutMenu.classList.contains("open")) {
        slideoutMenu.style.top = "0px"
      } else {
        slideoutMenu.style.top = -slideoutMenuHeight + 'px';
      }
    })

  });
  
  const ListLink = props => (
    <li className="menu-item">
      <Link to={props.to}>{props.children}</Link>
    </li>
  )

  return (
    <header>
      <div className="site-logo">
        <Link to="/"><Image /></Link>
      </div>

      <hgroup>
        <h1 id="logo">{props.siteTitle}</h1>
        <h2>{props.siteDescription}</h2>
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

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteDescription: ``,
}

export default Header
