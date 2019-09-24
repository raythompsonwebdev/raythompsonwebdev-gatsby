import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import ProjectItem from "../components/projectitem"


const ProjectPage = ({ data }) => (
  
  <main id="main-content">
    <SEO title="Project Page" />
    <h1>Projects</h1>

    <div id="photocontainer">
      <div className="content">
        
           

        {data.allWordpressWpProject.nodes.map((items, i) => (
        
          <ProjectItem  items={items} key={i}/>
        
        ))}


      </div>
    </div>
  
  </main>

)

export default ProjectPage

export const data = graphql`
  query SiteCustomQuery {
    allWordpressWpProject {
      nodes {
        title
        slug
        featured_media {
          localFile {
            childImageSharp {
              fixed(width: 341, height: 550) {
                src
              }
            }
          }
        }
      }
    }
  }
`
