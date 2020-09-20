import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const ProjectItem = ({ items, i }) => (
  <div id="panel" className={`prod-cnt ${items.slug}`} key={i}>
    <figure className="showcase-container" id="showcaseimg1">
      <div className="showcase-img">
        {/* <img
          src={items.featured_media.localFile.childImageSharp.resolutions.src}
          alt=""
        /> */}
      </div>

      <figcaption className="showcase-content showcase">
        <h1>{items.title}</h1>

        <Link to={`/project/${items.slug}`}>Link</Link>
      </figcaption>
    </figure>
  </div>
)

ProjectItem.propTypes = {
  i: PropTypes.any,
  items: PropTypes.any,
}

export default ProjectItem
