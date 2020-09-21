import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import PropTypes from "prop-types"


export default function ProjectSingle ({ data }) {

  const project = data.allWpProject.nodes[0]
  return (
 
    <main id="main-content">
      <SEO title="Single Project Page" />
      <article className="post group">
        <h1> {project.title} </h1>
        <figure className="websiteImage">
          <Link to="" className="fancybox" title="">
            <img
              src={
                project.featuredImage.node.localFile.childImageSharp.fixed.src
              }
              alt=""
            />
          </Link>
        </figure>
        <div className="website-text">

          <h1 className="post-meta-key">Project Name</h1>

          {/* <p className="websitetext">
            {props.data.allWpProject.edges[0].node.meta.project_name}{" "}
          </p> */}

          <h1 className="post-meta-key">Project Description</h1>

          {/* <p className="websitetext">
            {
              props.data.allWpProject.edges[0].node.meta
                .project_description
            }{" "}
          </p> */}

          <h1 className="post-meta-key">Project Code</h1>

          {/* <p className="websitetext">
            {props.data.allWpProject.edges[0].node.meta.project_code}{" "}
          </p> */}

          <h1 className="post-meta-key">Project URL</h1>

          {/* <Link className="webformats" to="">
            {props.data.allWpProject.edges[0].node.meta.project_url}
          </Link> */}

          <h1 className="post-meta-key">Project Source Code</h1>

          <a
            className="webformats"
            href={`https://github.com/raythompsonwebdev/${project.slug}`}
          >
            Link to github repo
          </a>

        </div>

        <footer className="byline">

        {/* <img
              src={
                project.author.node.avatar.url
              }
              alt="Blog"
            /> */}
          <p className="right">
          
          </p>

            <p>Project created by {project.author.node.name}</p>
        </footer>
      </article>
    </main>
  
  )
}

ProjectSingle.propTypes = {
  data: PropTypes.any,
}

export const data = graphql`
  query($slug: String!) {
    allWpProject(filter: { slug: { eq: $slug } }) {
      nodes {
        id
        slug
        title
        author {
          node {
            name
            avatar {
              url
            }
          }
        }
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
      }
    }
  }
`
