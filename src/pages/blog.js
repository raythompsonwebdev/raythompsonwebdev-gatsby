import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"


const BlogPage = ({data}) => (
  
    
  <Layout>

    <SEO title="Blog Page" />

    <div id="blogbox">

	    <h1 className="page-title">Title</h1>

    
            {data.allWordpressPost.edges.map(({ node }, index) => (

                
                <div className="blogboxes" key={index}>

				<h1>{node.title}</h1>

               <img src={node.featured_media.localFile.childImageSharp.resolutions.src} alt="" />
				
				<div dangerouslySetInnerHTML={{ __html: node.excerpt }}></div>

				<Link to={`/blog/${node.link}`}>Read More..</Link>

                </div>
           ))}
       

    </div>



  </Layout>


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
                featured_media {
                  localFile {
                    childImageSharp {
                      resolutions {
                        src
                        width
                        height
                      }
                    }
                  }
                }
              }
            }
          }
    }`