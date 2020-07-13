import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"


const BlogPage = ({ data }) => (

  

  <main id="main-content">
    
    <SEO title="Blog Page" />
    
    <h1>Interested in web design and web development</h1>

    <div className="main-text">
      <p>
        Whether you are just beginning to learn or are alreading building
        websites I would like to share what I have learnt so far about web
        design and web development through the tons of valuable web development
        and web design related resources I have read, watched and listened to
        over the past few years&#46; content like
      </p>
      <br />
      <br />
    </div>

    <div id="blogbox">

      {console.log(data.allWordpressPost.edges)}

      {data.allWordpressPost.edges.map(({ node }, index) => (        

        <div className="blogboxes" key={index}>
          <h1 dangerouslySetInnerHTML={{ __html: node.title }}></h1>

          { node.featured_media == null ? ( <p>No Image</p> ) : (
              <img
                src={node.featured_media.localFile.childImageSharp.resolutions.src}
                alt=""
              />
            ) 
          }    
         
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }}></div>
          <Link to={`/blog/blog-post/`}>Link</Link>

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

export default BlogPage

export const pageQuery = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          id
          title
          excerpt
          path
          link
          slug
          featured_media {
            localFile {
              childImageSharp {
                resolutions {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`
