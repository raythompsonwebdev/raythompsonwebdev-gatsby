import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import $ from 'jquery';

const ListLink = props => (
	<li className="menu-item">
	  <Link to={props.to}>{props.children}</Link>
	</li>
  )

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

const Header = ({ siteTitle, siteDescription}) => (
  
  <header>
	
		<div className="site-logo">
	
			<Link to="/">R</Link>

		</div>
	
			<hgroup>

			  <h1 id="logo">{siteTitle}</h1>
			  <h2>{siteDescription}</h2>

			</hgroup>
			<button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">Menu</button>
			
			<nav>	

				<ul >
					<ListLink to="/">Home</ListLink>
					<ListLink to="/about">About</ListLink>					
					<ListLink to="/project">Projects</ListLink>
					<ListLink to="/blog">Blog</ListLink>
					<ListLink to="/contact">Contact</ListLink>
				</ul>
			</nav>	

	</header>
  
  
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
