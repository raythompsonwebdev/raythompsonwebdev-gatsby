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
import posed, { PoseGroup } from "react-pose"
import $ from 'jquery'

const Layout = ({ children, location }) => {
  
  //mobile menu
  $(document).ready(function($){

    // Hide/show toggle button on scroll	
    var position, direction, previous;

    $(window).scroll(function(){
        
      if( $(this).scrollTop() >= position ){
        direction = 'down';
        if(direction !== previous){
          $('header button.menu-toggle').addClass('hide');
          
          previous = direction;
        }
      } else {
        direction = 'up';
        if(direction !== previous){
          $('header button.menu-toggle').removeClass('hide');
          
          
          previous = direction;
        }
      }
      position = $(this).scrollTop();
    })

    // sliding menu mobile 
    $('button.menu-toggle').on('click', function(event){
        
      event.preventDefault();
    
      // create menu variables
      var slideoutMenu = $('#main-nav');
      var slideoutMenuWidth = $('#main-nav').width();
        
      // toggle open class
      slideoutMenu.toggleClass("open");
    
      // slide menu
      if (slideoutMenu.hasClass("open")) {
        slideoutMenu.animate({
          left: "0px"
        });	
      } else {
        slideoutMenu.animate({
          left: -slideoutMenuWidth
        }, 500);	
      }
    })
  })

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
      delayChildren: timeout
    },
    exit: {
      opacity: 0,
      transition: `opacity ${timeout}ms ease-in-out`,
      x: 30
    }
  });  

  return (
    <div id="wrapper_container">
      <Header
        siteTitle={data.site.siteMetadata.title}
        siteDescription={data.site.siteMetadata.description}
      />

      <PoseGroup>
          <RoutesContainer key={location.pathname}>
              {children}
          </RoutesContainer>
       </PoseGroup>

      <Footer />

      <p id="copyr">
        © {new Date().getFullYear()}, Built with {` `}{" "}
        <Link to="/google">Gatsby</Link>
      </p>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
