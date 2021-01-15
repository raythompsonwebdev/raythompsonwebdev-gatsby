import React from "react"
import { graphql } from "gatsby"
import ProjectItem from "../components/projectitem"
import SEO from "../components/seo"
import PropTypes from "prop-types"

export default function ProjectPage(props) {
  return (
    <main id="main-content">
      <SEO title="Home" />

      <h1>Projects</h1>

      <div id="photocontainer">
        <div className="content">
          {props.data.allWpProject.nodes.map(node => (
            <ProjectItem node={node} key={node.slug} />
          ))}
        </div>
      </div>
    </main>
  )
}

ProjectPage.propTypes = {
  data: PropTypes.object,
}

export const projectQuery = graphql`
  query {
    allWpProject(sort: { fields: [date] }) {
      nodes {
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
`
