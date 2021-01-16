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
