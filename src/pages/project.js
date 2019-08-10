import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

//import Img from "../components/image"

const ProjectPage = ({ data }) => (
  <Layout>
    <SEO title="Project Page" />

    <div id="photocontainer">
      <div className="content">
        <h1>Projects</h1>
        <nav className="menuSwitch">
          <ul>
            <li className="cat-active" category="prod-cnt">All</li>

            <li className="" category="vanilla">Plain Code</li>

            <li className="" category="wordpress">WordPress</li>


          </ul>
        </nav>

        {data.allWordpressWpProject.nodes.map((items, i) => (
          <div id="panel" className={`prod-cnt ${data.allWordpressWpProject.nodes[0].slug}`} key={i}>
            <figure className="showcase-container" id="showcaseimg1">
              <div className="showcase-img">
                <img src={items.featured_media.localFile.childImageSharp.resolutions.src} alt="" />
              </div>

              <figcaption className="showcase-content showcase">
                <h1>{items.title}</h1>

              <Link to={`/project/${items.slug}`}>Link</Link>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
    </div>
  </Layout>
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
                          resolutions {
                              src
                              width
                              height
                          }
                      }
                  }
              }
          }
      }
    }
  `
