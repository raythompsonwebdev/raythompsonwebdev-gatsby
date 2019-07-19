import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const ListLink = props => (
	<li className="menu-item">
	  <Link to={props.to}>{props.children}</Link>
	</li>
  )

const Header = ({ siteTitle }) => (
  
  <header>
	
		<div className="site-logo">
	
			<Link to="">R</Link>

		</div>
	
			<hgroup>

			  <h1 id="logo">{siteTitle}</h1>

			</hgroup>

			<nav >	

				<ul >
					<ListLink to="/">Home</ListLink>
					<ListLink to="/about">About</ListLink>
					<ListLink to="/contact">Contact</ListLink>
					<ListLink to="/gallery">Gallery</ListLink>
					<ListLink to="/blog">Blog</ListLink>
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
