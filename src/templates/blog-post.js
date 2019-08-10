import React from "react"
import { Link , graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export const post = graphql`

    query ($slug: String!) {
        allWordpressPost(filter: {slug: {eq: $slug}}) {
            nodes {
              content
              title
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
    }`

    


const BlogPost = (props) => {
     
    console.log(props.data.allWordpressPost.nodes[0].title)

    return (
  
    <Layout>

        <SEO title="Blog Post" />

        <article className="post group" id="post">

            <h1 className="page-title" >{props.data.allWordpressPost.nodes[0].title}</h1>

            <header className="byline">
                <div className="entry-meta">
                    
                </div>
            </header>


            <Link href="" title="Permanent Link to">

                <figure className="featuredImage">
                <img src={props.data.allWordpressPost.nodes[0].featured_media.localFile.childImageSharp.resolutions.src} alt="" />
                </figure>

            </Link>


            <div className="entry" >
            <div dangerouslySetInnerHTML={{ __html: props.data.allWordpressPost.nodes[0].content }}>

            </div>

                
                                       

            </div>

            <div className="continue-reading">
                <Link to="/" >Link</Link>
            </div>


            <footer className="byline">

                <p className="right">
                    <Link to="/" className="comments-count">Link</Link>
                </p>

                
                <p>Text</p>

            </footer>


        </article>
   
  
    </Layout>
    )
}
  
export default BlogPost

