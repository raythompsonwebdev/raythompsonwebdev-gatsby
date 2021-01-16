import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <div className="blogboxes">
    <h1> {post.frontmatter.title}</h1>
    <img src={post.frontmatter.image} alt={post.frontmatter.title} />
    <p>{post.excerpt}</p>
    <Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link>
  </div>
)

export default PostLink
