import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
//import Img from "gatsby-image"
//import Image from "./image"

const ProjectItem = ({ project }) => (
  <div id="panel" className={`prod-cnt ${project.frontmatter.slug}`}>
    <figure className="showcase-container" id="showcaseimg1">
      <div className="showcase-img">
        <img src={project.frontmatter.featuredImage} alt="" />
      </div>

      <figcaption className="showcase-content showcase">
        <h1>{project.frontmatter.title}</h1>
        <h1>{project.frontmatter.date}</h1>

        <Link to={`${project.frontmatter.slug}`}>Link</Link>
      </figcaption>
    </figure>
  </div>
)

ProjectItem.propTypes = {
  project: PropTypes.any,
}

export default ProjectItem
