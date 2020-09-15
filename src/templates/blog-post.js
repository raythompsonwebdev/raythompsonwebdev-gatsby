import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import PropTypes from "prop-types"

const BlogPost = props => {
  const {
    data: { allWpPost },
  } = props

  return (
    <main id="main-content">
      <SEO title="Blog Post" />

      <article className="post group" id="post">
        <h1 className="page-title">{allWpPost.edges[0].node.title}</h1>

        <header className="byline">
          <div className="entry-meta">
            <div className="meta-content">
              <div className="author-avatar">
                <Link className="url fn n" to="">
                  <img
                    src={
                      allWpPost.edges[0].node.author.avatar_urls.wordpress_96
                    }
                    alt="Blog"
                  />
                </Link>
              </div>

              <span className="posted-by">
                Posted By : {allWpPost.edges[0].node.author.name}{" "}
              </span>
              <span className="posted-on">
                Posted on :
                <time className="entry-date published">
                  {" "}
                  {allWpPost.edges[0].node.date}
                </time>
              </span>
              <span className="updated">
                Updated: <time></time>
              </span>
              <span className="comments-link">comments-link</span>
              <span className="taglist">
                <time className="entry-date published updated">Tags-link</time>
              </span>
            </div>
          </div>
        </header>

        <Link to="" title="Permanent Link to">
          <figure className="featuredImage">
            {allWpPost.edges[0].node.featured_media == null ? (
              <p>No Image</p>
            ) : (
              <img
                src={
                  allWpPost.edges[0].node.featured_media.localFile
                    .childImageSharp.resolutions.src
                }
                alt=""
              />
            )}
          </figure>
        </Link>

        <div className="entry">
          <div
            dangerouslySetInnerHTML={{
              __html: allWpPost.edges[0].node.content,
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

export default BlogPost

export const data = graphql`
query($slug: String!) {
  allWpPost(filter: {slug: {eq: $slug}}) {
    edges {
      node {
        featuredImage {
          node {
            localFile {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            uri
          }
        }
        title
        slug
        date
        author {
          node {
            avatar {
              url
            }
          }
        }
        excerpt
        link
        status
      }
    }
  }
}`
  