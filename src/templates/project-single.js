import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import SEO from "../components/seo"
import PropTypes from "prop-types"

const ProjectSingle = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            html
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
              featuredImage
              slug
            }
          }
        }
      }
    }
  `)

  const { allMarkdownRemark } = data // data.markdownRemark holds your post data

  console.log(allMarkdownRemark.edges[0].node)

  const { frontmatter } = allMarkdownRemark.edges[0].node

  //console.log(frontmatter, html)
  return (
    <main id="main-content">
      <SEO title="Single Project Page" />
      <article className="post group">
        <h1> {frontmatter.title} </h1>
        <figure className="websiteImage">
          <Link to="/" className="fancybox" title="">
            <img src={frontmatter.featuredImage} alt="f" />
          </Link>
        </figure>
        <div className="website-text">
          <h1 className="post-meta-key">Project Name</h1>

          {/* <p className="websitetext">
              {props.data.allWordpressWpProject.edges[0].node.meta.project_name}{" "}
            </p> */}

          <h1 className="post-meta-key">Project Description</h1>

          {/* <p className="websitetext">
              {
                props.data.allWordpressWpProject.edges[0].node.meta
                  .project_description
              }{" "}
            </p> */}

          <h1 className="post-meta-key">Project Code</h1>

          {/* <p className="websitetext">
              {props.data.allWordpressWpProject.edges[0].node.meta.project_code}{" "}
            </p> */}

          <h1 className="post-meta-key">Project URL</h1>

          {/* <Link className="webformats" to="/">
              {props.data.allWordpressWpProject.edges[0].node.meta.project_url}
            </Link> */}

          <h1 className="post-meta-key">Project Source Code</h1>

          {/* <Link
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

// export const projectQuery = graphql`
//   query($slug: String!) {
//     allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
//       edges {
//         node {
//           html
//           frontmatter {
//             date(formatString: "MMMM DD, YYYY")
//             title
//             description
//             featuredImage
//             slug
//           }
//         }
//       }
//     }
//   }
// `

ProjectSingle.propTypes = {
  data: PropTypes.any,
}

export default ProjectSingle
