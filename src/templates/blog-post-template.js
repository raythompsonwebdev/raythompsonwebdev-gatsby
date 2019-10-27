import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"

const NavLink = (props) => {
    if (!props.test) {
      return <Link to={props.url}>{props.text}</Link>
    } else {
      return <span>{props.text}</span>
    }
  }

const BlogPost = ({ pageContext , props }) => {
  
  const { group, index, first, last, pageCount } = pageContext
  const previousUrl = index - 1 == 1 ? "/" : (index - 1).toString()
  const nextUrl = (index + 1).toString()
  
  return (
   <div>
      <SEO title="Blog Post" />
    {group.map(({ node }) => (
      
      <article className="post group" id="post">
        <h1 className="page-title">
          {node.title}
        </h1>
        <h4>{pageCount} Pages</h4>

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
                node.featured_media.localFile
                  .childImageSharp.resolutions.src
              }
              alt="Blog"
            />
          </figure>
        </Link>

        <div className="entry">
          <div
            dangerouslySetInnerHTML={{
              __html: node.content,
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
    ))}

      <div className="previousLink">
        <NavLink test={first} url={previousUrl} text="Go to Previous Page" />
      </div>
      <div className="nextLink">
        <NavLink test={last} url={nextUrl} text="Go to Next Page" />
      </div>
    
   </div>
  )
}

export default BlogPost

export const post = graphql`
  query($skip: Int!, $limit: Int!) {
    allWordpressPost(
      sort: { order: DESC }
      limit: $limit
      skip: $skip
    ) {      
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
          slug
          path
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
    }`
