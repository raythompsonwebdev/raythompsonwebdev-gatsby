/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Header from "./header"
import "../css/style.scss"
import $ from 'jquery';

// Hide/show toggle button on scroll
$(document).ready(function($){
     
  // sliding menu mobile 
  $('header button.menu-toggle').on('click', function(event){
  
	  event.preventDefault();
  
	  // create menu variables
	  var slideoutMenu = $('header nav ');
	  var slideoutMenuWidth = $('header nav').width();
  
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
  });

}); 

const ListLink = props => (
	<li className="menu-item">
	  <Link to={props.to}>{props.children}</Link>
	</li>
  )

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
    <>
<div id="wrapper_container">

  <Header siteTitle={data.site.siteMetadata.title} siteDescription={data.site.siteMetadata.description}  />
  

    <main id="main-content">{children}</main>
          
  <br/>

  <footer>

  <ul >
          
					<ListLink to="/privacy">Privacy</ListLink>
					
					
	</ul>


    <div className="socialpics">

    <Link className="social-icon linkedin-icon" to="" target="new" title="">
      <span>
        <i className="fa fa-linkedin"></i>
      </span>
    </Link>

    <Link className="social-icon twitter-icon" to="" target="new" title="">
      <span>
        <i className="fa fa-twitter"></i>
      </span>
    </Link>

    <Link className="social-icon facebook-icon" to="" target="new" title="">
      <span>
        <i className="fa fa-facebook"></i>
      </span>
    </Link>

    <Link className="social-icon google-icon" to="" target="new" title="">
      <span>
        <i className="fa fa-github"></i>
      </span>
    </Link>

  </div>
    
      
  </footer>

  <p id="copyr" > 

    © {new Date().getFullYear()}, Built with {` `} <Link to="">Gatsby</Link>

  </p>

</div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
