import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import ProjectItem from "../components/projectitem"
import PropTypes from "prop-types"

class ProjectPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: props,
    }
  }

  render() {
    const {
      data: { allWpProject },
    } = this.state.data

    return (
      <main id="main-content">
        <SEO title="Project Page" />
        <h1>Projects</h1>

        <div id="photocontainer">
          <div className="content">
            {allWpProject.nodes.map((items, i) => (
              <ProjectItem items={items} key={i} />
            ))}
          </div>
        </div>
      </main>
    )
  }
}

ProjectPage.propTypes = {
  data: PropTypes.object,
}

export default ProjectPage

export const projectQuery = graphql`
  query {
    allWpProject {
      totalCount
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
