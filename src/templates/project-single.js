import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import PropTypes from "prop-types"

export const data = graphql`
  query($slug: String!) {
    allMarkdownRemark(filter: { frontmatter: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            author
            title
            slug
            date(formatString: "MMMM DD, YYYY")
            description
            type
            image
          }
        }
      }
    }
  }
`

const ProjectSingle = ({ data }) => {
  const { allMarkdownRemark } = data // data.markdownRemark holds your post data

  console.log(data)

  const { frontmatter, html } = allMarkdownRemark.edges[0].node

  return (
    <main id="main-content">
      <SEO title="Single Project Page" />
      <article className="post group">
        <h1> {frontmatter.title} </h1>
        <figure className="websiteImage">
          <Link to="/" className="fancybox" title="">
            <img src={frontmatter.image} alt="f" />
          </Link>
        </figure>
        <div className="website-text">
          <div
            dangerouslySetInnerHTML={{
              __html: html,
            }}
          ></div>

          {/* <h1 className="post-meta-key">Project Name</h1>

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

           <Link className="webformats" to="/">
              {props.data.allWordpressWpProject.edges[0].node.meta.project_url}
            </Link> 

          <h1 className="post-meta-key">Project Source Code</h1>

           <Link
              className="webformats"
              href={`https://github.com/raythompsonwebdev/${props.data.allWordpressWpProject.edges[0].node.slug}`}
            >
              Link
            </Link> */}
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
