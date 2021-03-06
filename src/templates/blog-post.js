import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import PropTypes from "prop-types"

// this prop will be injected by the GraphQL query below.

export const data = graphql`
  query($slug: String!) {
    allMarkdownRemark(filter: { frontmatter: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            author
            slug
            date(formatString: "MMMM DD, YYYY")
            description
            type
            image
            avatar
          }
        }
      }
    }
  }
`
export default function BlogPost({ data }) {
  const { allMarkdownRemark } = data // data.markdownRemark holds your post data

  const { frontmatter, html } = allMarkdownRemark.edges[0].node

  return (
    <main id="main-content">
      <SEO title="Blog Post" />

      <article className="post group" id="post">
        <h1 className="page-title"> {frontmatter.title}</h1>

        <header className="byline">
          <div className="entry-meta">
            <div className="meta-content has-avatar">
              <div className="author-avatar">
                <Link className="url fn n" to="">
                  <img src={frontmatter.avatar} alt="Blog" />
                </Link>
              </div>

              <Link to="/" rel="bookmark"></Link>

              <span className="byline">Posted By : {frontmatter.author}</span>
              <span className="posted-on">
                Posted on :
                <time className="entry-date published">{frontmatter.date}</time>
              </span>
              <span className="byline">
                Updated: <time className="updated">{frontmatter.date}</time>
              </span>
              <span className="comments-link">comments-link</span>
              <span className="byline">
                <time className="entry-date published updated">Tags-link</time>
              </span>
            </div>
          </div>
        </header>

        <Link to="/" title="Permanent Link to">
          <figure className="featuredImage">
            <img src={frontmatter.image} alt="" />
          </figure>
        </Link>

        <div className="entry">
          <div
            dangerouslySetInnerHTML={{
              __html: html,
            }}
          ></div>
        </div>

        <div className="continue-reading">
          <Link to="/">Link</Link>
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

BlogPost.propTypes = {
  data: PropTypes.any,
}
