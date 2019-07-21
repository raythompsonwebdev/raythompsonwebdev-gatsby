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
				
				<p>{node.excerpt}</p>

				<Link to={node.link}></Link>

                </div>
           ))}
       

    </div>

    <Link to="/">Go back to the homepage</Link><br/>
    <Link to="/contact" >Link to Contact page</Link>

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
            }
        }
    }
}`