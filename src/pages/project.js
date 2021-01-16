import React from "react"
import { graphql } from "gatsby"
//import SEO from "../components/seo"
import ProjectItem from "../components/projectitem"
import PropTypes from "prop-types"

const ProjectPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Project = edges
    .filter(edge =>
      edge.node.frontmatter.type === "project"
        ? edge.node.frontmatter.type
        : false
    ) // You can filter your posts based on some criteria
    .map(edge => <ProjectItem key={edge.node.id} project={edge.node} />)

  return (
    <main id="main-content">
      {/* <SEO title="Project Page" /> */}
      <h1>Projects</h1>

      <div id="photocontainer">
        <div className="content">{Project}</div>
      </div>
    </main>
  )
}

ProjectPage.propTypes = {
  data: PropTypes.object,
}

export default ProjectPage

export const data = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            type
            image
            slug
          }
        }
      }
    }
  }
`
