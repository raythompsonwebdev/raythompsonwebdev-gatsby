import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const ProjectItem = (items, key) => (

  
  <div id="panel" className={`prod-cnt ${items.slug}`} key={key}>

    {console.log(items, key)}
    <figure className="showcase-container" id="showcaseimg1">
      <div className="showcase-img">
        {/* <img
          src={items.featured_media.localFile.childImageSharp.resolutions.src}
          alt=""
        /> */}
      </div>

      <figcaption className="showcase-content showcase">
        <h1>{items.title}</h1>

        <Link to={items.slug}>
              <p>{items.title}</p>
            </Link>

        {/* <Link to={`/project/${items.slug}`}>Link</Link> */}
      </figcaption>
    </figure>
  </div>
)

ProjectItem.propTypes = {
  i: PropTypes.any,
  items: PropTypes.object,
}

export default ProjectItem
