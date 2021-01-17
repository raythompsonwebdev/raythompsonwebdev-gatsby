import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import PropTypes from "prop-types"

export default function BlogPost({ data }) {
  const post = data.allWpPost.nodes[0]

  return (
    <main id="main-content">
      <SEO title="Blog Post" />

      <article className="post group" id="post">
        <h1 className="page-title">{post.title}</h1>

        <header className="byline">
          <div className="entry-meta">
            <div className="meta-content has-avatar">
              <div className="author-avatar">
                <a className="url fn n" href="">
                  <img src={post.author.node.avatar.url} alt="Blog" />
                </a>
              </div>

              <a href="" rel="bookmark"></a>

              <span className="byline">
                Posted By : {post.author.node.name}{" "}
              </span>
              <span className="posted-on">
                Posted on :{" "}
                <time className="entry-date published">{post.date}</time>
              </span>
              <span className="byline">
                Updated: <time className="updated">{post.modified}</time>
              </span>
              <span className="comments-link">
                Comments : {post.commentCount}
              </span>
              <span className="byline">
                Tags: {post.tags.nodes[0].slug}
                {" ,"}
                {post.tags.nodes[1].slug}
              </span>
            </div>
          </div>
        </header>

        <a href="" title="Permanent Link to">
          <figure className="featuredImage">
            {post.featuredImage == null ? (
              <p>No Image</p>
            ) : (
              <img
                src={
                  post.featuredImage.node.localFile.childImageSharp.fluid.src
                }
                alt=""
              />
            )}
          </figure>
        </a>

        <div className="entry">
          <div
            dangerouslySetInnerHTML={{
              __html: post.content,
            }}
          ></div>
        </div>

        <footer className="byline">
          <p className="right">
            <a href="/" className="comments-count" title="comments link">
              Link
            </a>
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

export const query = graphql`
  query($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        content
        featuredImage {
          node {
            localFile {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
        date(formatString: "DD-MMM-YYYY")
        commentCount
        author {
          node {
            avatar {
              url
            }
            name
          }
        }
        tags {
          nodes {
            slug
          }
        }
        modified(formatString: "DD-MMM-YYYY")
      }
    }
  }
`
