import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/post-link"
//import SEO from "../components/seo"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => edge.node.frontmatter.type == "post" ? edge.node.frontmatter.type : false) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <main id="main-content">
        {/* <SEO title="Blog Page" /> */}
        <div id="blogbox">{Posts}</div>
         <section className="contact-wide">
          <h1>Related Items</h1>
        </section>
      </main>
  )
   
       
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 150)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")            
            title
            description
            featuredImage
            type
          }          
        }
      }
    }
  }
`
