import React from "react"
import { Link, graphql } from "gatsby" //highlight-line
//import Image from "../components/image"
import SEO from "../components/seo"

export default function BlogPage(props) {
  
  return (  
    <main id="main-content">
      <SEO title="Blog Page" />
      <h1>{`Interested in web design and web development`}</h1>

      <div className="main-text">
        <p>
          {`Whether you are just beginning to learn or are alreading building
          websites I would like to share what I have learnt so far about web
          design and web development through the tons of valuable web
          development and web design related resources I have read, watched
          and listened to over the past few years, content like`}
        </p>
      </div>

      <div id="blogbox">

          {props.data.allWpPost.nodes.map((node) => (

            <div className="blogboxes" key={node.slug}>
            <h1 dangerouslySetInnerHTML={{ __html: node.title }}></h1>

            {node.featured_media == null ? (
              <p>No Image</p>
            ) : (
              <img
                src={                  
                  node.featuredImage.node.localFile.childImageSharp.fixed.src
                }
                alt=""
              />
            )}

            <div dangerouslySetInnerHTML={{ __html: node.excerpt }}></div>

            <Link to={node.slug}>{node.title}</Link>
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
                fixed {
                  src
                }
              }
            }
          }
        }
        date
        excerpt        
        commentCount        
      }
    }
  }
`
//highlight-end
