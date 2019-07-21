import React from "react"
import { Link , graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const BlogPost = ({ data }) => {

    console.log(data)

        
    const post = data.allWordpressPost.edges.node

    return (
  
    <Layout>

        <SEO title="Blog Post" />

        <article className="post group" id="post">

            <h1 className="page-title" ></h1>

            <header className="byline">
                <div className="entry-meta">
                    Header 1
                </div>
            </header>


            <Link href="" title="Permanent Link to">

                <figure className="featuredImage">
                    <Link to="/" ></Link>
                </figure>

            </Link>


            <div className="entry">
                
                                            

            </div>

            <div className="continue-reading">
                <Link to="/" ></Link>
            </div>


            <footer className="byline">

                <p className="right">
                    <Link to="/" className="comments-count"></Link>
                </p>

                
                <p>Text</p>

            </footer>


        </article>
   
  
    </Layout>
    )
}
  
export default BlogPost

export const query = graphql`
    query {
        allWordpressPost {
            edges {
                node {
                    content
                    title
                }
            }
        }
    }`