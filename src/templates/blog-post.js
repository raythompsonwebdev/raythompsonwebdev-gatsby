import React from "react"
import { graphql } from "gatsby"

export default function BlogPost({ data }) {
  console.log(data)
  const post = data.allWpPost.nodes[0]
  return (

      <div>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>

  )
}
export const query = graphql`
  query($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
        nodes {
          title
          content
        }
    }
  }
`