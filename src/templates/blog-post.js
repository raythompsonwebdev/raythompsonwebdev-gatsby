import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo"
import PropTypes from "prop-types"
//import Img from "gatsby-image"

// this prop will be injected by the GraphQL query below.

export default function BlogPost() {
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
              type
            }
          }
        }
      }
    }
  `)
  console.log(data)

  const { allMarkdownRemark } = data // data.markdownRemark holds your post data

  //console.log(allMarkdownRemark.edges[0].node)

  const { frontmatter, html } = allMarkdownRemark

  console.log(frontmatter)

  return (
    <main id="main-content">
      <SEO title="Blog Post" />

      <article className="post group" id="post">
        <h1 className="page-title"> </h1>

        <header className="byline">
          <div className="entry-meta">
            <div className="meta-content has-avatar">
              <div className="author-avatar">
                {/* <Link className="url fn n" to="">
                  <img
                    src={
                      
                    }
                    alt="Blog"
                  />
                </Link> */}
              </div>

              <Link to="/" rel="bookmark"></Link>

              <span className="byline">Posted By : {frontmatter.date}</span>
              <span className="posted-on">
                Posted on :
                <time className="entry-date published">
                  {frontmatter.title}
                </time>
              </span>
              <span className="byline">
                Updated: <time className="updated"></time>
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
            {/* {.node.featured_media == null ? (
              <p>No Image</p>
            ) : (
              <img
                src={
                  .node.featured_media.localFile
                    .childImageSharp.resolutions.src
                }
                alt=""
              />
            )} */}
            {/* <Img fluid={featuredImageFluid} /> */}
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

// query($slug: String!) {
//   allMarkdownRemark(filter: {frontmatter: {title: {eq: $slug}}}) {

// export const pageQuery = graphql`
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
