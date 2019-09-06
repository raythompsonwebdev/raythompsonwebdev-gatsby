import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
//import $ from "jquery"

// Hide/show toggle button on scroll
/*
$(document).ready(function($) {
	
	var position, direction, previous;

	$(window).scroll(function(){
			
		if( $(this).scrollTop() >= position ){
			direction = 'down';
			if(direction !== previous){
				$('header button.menu-toggle').addClass('hide');
				$('#main-nav').addClass('hidemenu');
				previous = direction;
			}
		} else {
			direction = 'up';
			if(direction !== previous){
				$('header button.menu-toggle').removeClass('hide');
				$('#main-nav').removeClass('hidemenu');
				
				previous = direction;
			}
		}
		position = $(this).scrollTop();
	});

	// sliding menu mobile 
	$('header button.menu-toggle').on('click', function(event){
    
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
	});
})
*/
const ListLink = props => (
	
	<li className="menu-item">
	  <Link to={props.to}>{props.children}</Link>
	</li>
  )

const Header = ({ siteTitle, siteDescription}) => (
  
  <header>
	
		<div className="site-logo">
	
			<Link to="/">R</Link>

		</div>
	
			<hgroup>

			  <h1 id="logo">{siteTitle}</h1>
			  <h2>{siteDescription}</h2>

			</hgroup>
			
			<button className="menu-toggle" aria-controls="primary-menu" aria-expanded="false">Menu</button>
			
			<nav id="main-nav">	

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
