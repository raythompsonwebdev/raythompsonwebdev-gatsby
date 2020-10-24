import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <div className="blogboxes">
    <h1> {post.frontmatter.title}</h1>
    <h2>({post.frontmatter.date})</h2>
    <p>{post.excerpt}</p>
    <Link to={post.frontmatter.title}>
      {post.frontmatter.title} 
    </Link>
  </div>
)

export default PostLink