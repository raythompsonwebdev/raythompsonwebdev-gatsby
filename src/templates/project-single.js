import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import PropTypes from "prop-types"

export const data = graphql`
  query($slug: String!) {
    allWpProject(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          slug
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

const ProjectSingle = props => {
  return (
    <main id="main-content">
      <SEO title="Single Project Page" />
      <article className="post group">
        <h1> {props.data.allWordpressWpProject.edges[0].node.title} </h1>
        <figure className="websiteImage">
          <Link to="" className="fancybox" title="">
            <img
              src={
                props.data.allWordpressWpProject.edges[0].node.featured_media
                  .localFile.childImageSharp.fixed.src
              }
              alt=""
            />
          </Link>
        </figure>
        <div className="website-text">
          <h1 className="post-meta-key">Project Name</h1>

          <p className="websitetext">
            {props.data.allWordpressWpProject.edges[0].node.meta.project_name}{" "}
          </p>

          <h1 className="post-meta-key">Project Description</h1>

          <p className="websitetext">
            {
              props.data.allWordpressWpProject.edges[0].node.meta
                .project_description
            }{" "}
          </p>

          <h1 className="post-meta-key">Project Code</h1>

          <p className="websitetext">
            {props.data.allWordpressWpProject.edges[0].node.meta.project_code}{" "}
          </p>

          <h1 className="post-meta-key">Project URL</h1>

          <Link className="webformats" to="">
            {props.data.allWordpressWpProject.edges[0].node.meta.project_url}
          </Link>

          <h1 className="post-meta-key">Project Source Code</h1>

          <Link
            className="webformats"
            href={`https://github.com/raythompsonwebdev/${props.data.allWordpressWpProject.edges[0].node.slug}`}
          >
            Link
          </Link>
        </div>
        <footer className="byline">
          <p className="right">
            <Link to="/" className="comments-count">
              Link
            </Link>
          </p>

          <p>Text</p>
        </footer>
      </article>
    </main>
  )
}

ProjectSingle.propTypes = {
  data: PropTypes.any,
}

export default ProjectSingle
