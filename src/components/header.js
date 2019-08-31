import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

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
