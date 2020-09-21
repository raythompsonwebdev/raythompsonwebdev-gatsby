import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const ProjectItem = ({node}) => (

  <div id="panel" className={`prod-cnt ${node.slug}`} key={node.slug}>
    <figure className="showcase-container" id="showcaseimg1">
      <div className="showcase-img">
        <img
          src={node.featuredImage.node.localFile.childImageSharp.fixed.src}
          alt=""
        />
      </div>

      <figcaption className="showcase-content showcase">
        <h1>{node.title}</h1>

        <Link to={node.slug}>
          <p>Go to Project</p>
        </Link>
      </figcaption>
    </figure>
  </div>
)

ProjectItem.propTypes = {
  i: PropTypes.any,
  items: PropTypes.object,
}

export default ProjectItem
