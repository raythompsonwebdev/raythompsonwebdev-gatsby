import React from "react"
import { graphql, Link } from "gatsby" //highlight-line
import NoImage from "../components/noimage"
import SEO from "../components/seo"

export default function BlogPage(props) {
  return (
    <main id="main-content">
      <SEO title="Blog Page" />
      <h1>{`Blogs`}</h1>

      <div id="blogbox">
        {props.data.allWpPost.nodes.map(node => (
          <div className="blogboxes" key={node.slug}>
            <h1>{node.title}</h1>

            {node.featuredImage == null ? (
              <NoImage />
            ) : (
              <img
                src={
                  node.featuredImage.node.localFile.childImageSharp.fluid.src
                }
                alt=""
              />
            )}
            <div
              dangerouslySetInnerHTML={{
                __html: node.excerpt,
              }}
            ></div>
            <div className="blog-link">
              <Link to={`/blog/${node.slug}`}>
                Continue reading : {node.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="clearfix"></div>
      <br />
      {/*Related Items */}
      <section className="contact-wide">
        <h1>Related Items</h1>
      </section>
    </main>
  )
}

//highlight-start
export const pageQuery = graphql`
  query {
    allWpPost(sort: { fields: [date] }) {
      nodes {
        title
        excerpt
        slug
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
        date
        commentCount
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
//highlight-end
