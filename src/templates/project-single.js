import React from "react"
import { Link , graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export const post = graphql`

    query ($slug: String!) {
      allWordpressWpProject(filter: {slug: {eq: $slug}}) {
        edges {
          node {
            id
            slug
            title
            featured_media {
              localFile {
                childImageSharp {
                  resolutions {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }`

    
const ProjectSingle = (props) => {
     
    
    return (
      <Layout>
        <SEO title="Single Project Page" />

        <article className="post group">
          <h1> {props.data.allWordpressWpProject.edges[0].node.title} </h1>
          <figure className="websiteImage">
            <Link
              to=""
              className="fancybox"
              title=""
            >
<img src={props.data.allWordpressWpProject.edges[0].node.featured_media.localFile.childImageSharp.resolutions.src} alt="" />
            </Link>
          </figure>
          <div className="website-text">
            <h1 className="post-meta-key">Header</h1>

            <p className="websitetext"> </p>

            <h1 className="post-meta-key">Header</h1>

            <p className="websitetext"> </p>

            <h1 className="post-meta-key">Header</h1>

            <p className="websitetext"> </p>

            <h1 className="post-meta-key">Header</h1>

            <Link className="webformats" to="">
             
            </Link>

            <h1 className="post-meta-key">Header</h1>

            <Link className="webformats" to="">
              Link
            </Link>
          </div>
          <footer className="byline"></footer>
        </article>
      </Layout>
    )
}
  
export default ProjectSingle

