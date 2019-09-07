import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"


export const post = graphql`
  query($slug: String!) {
    allWordpressPost(filter: { slug: { eq: $slug } }) {
      nodes {
        content
        title
        date(formatString: "Y:MM:DD")
        featured_media {
          localFile {
            childImageSharp {
              fixed {
                src
                width
                height
              }
            }
          }
        }
        author {
          name
          avatar_urls {
            wordpress_24
            wordpress_48
            wordpress_96
          }
        }
      }
    }
  }
`

const BlogPost = props => {

  
  return (
    <main id="main-content">
      <SEO title="Blog Post" />

      <article className="post group" id="post">
        <h1 className="page-title">
          {props.data.allWordpressPost.nodes[0].title}
        </h1>

        <header className="byline">
          <div className="entry-meta">
            <div className="meta-content has-avatar">
              <div className="author-avatar">
                <Link className="url fn n" to="">
                  <img
                    src={
                      props.data.allWordpressPost.nodes[0].author.avatar_urls
                        .wordpress_96
                    }
                    alt="Blog"
                  />
                </Link>
              </div>

              <Link to="" rel="bookmark"></Link>

              <span className="byline">
                Posted By : {props.data.allWordpressPost.nodes[0].author.name}{" "}
              </span>
              <span className="posted-on">
                Posted on :
                <time className="entry-date published">
                  {" "}
                  {props.data.allWordpressPost.nodes[0].date}
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

        <Link to="" title="Permanent Link to">
          <figure className="featuredImage">
            <img
              src={
                props.data.allWordpressPost.nodes[0].featured_media.localFile
                  .childImageSharp.fixed.src
              }
              alt="Blog"
            />
          </figure>
        </Link>

        <div className="entry">
          <div
            dangerouslySetInnerHTML={{
              __html: props.data.allWordpressPost.nodes[0].content,
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

export default BlogPost
