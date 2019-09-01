import React from "react"
import { Link, graphql } from "gatsby"
import $ from "jquery"
import SEO from "../components/seo"
import Layout from "../components/layout"

$(function() {
  /* filter */
  $(".menuSwitch ul li").click(function() {
    var CategoryID = $(this).attr("category")
    $(".menuSwitch ul li").removeClass("cat-active")
    $(this).addClass("cat-active")
    $("div.content .prod-cnt").each(function() {
      if ($(this).hasClass(CategoryID) === false) {
        $(this).css({ display: "none" })
      }
    })
    $("." + CategoryID).fadeIn()
  })
})

const ProjectPage = ({ data }) => (

 
  <Layout>
    <SEO title="Project Page" />

    <div id="photocontainer">
      <div className="content">
        <h1>Projects</h1>
        <nav className="menuSwitch">
          <ul>
            <li className="cat-active" category="prod-cnt">
              All
            </li>

            <li className="at" category="vanilla">
              Plain Code
            </li>

            <li className="at" category="wordpress">
              WordPress
            </li>
          </ul>
        </nav>

        {data.allWordpressWpProject.nodes.map((items, i) => (
        
          <div
            id="panel"
            className={`prod-cnt ${items.slug}`}
            key={i}
          >
            <figure className="showcase-container" id="showcaseimg1">
              <div className="showcase-img">
                <img
                  src={items.featured_media.localFile.childImageSharp.fixed.src}
                  alt=""
                />
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
