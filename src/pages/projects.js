import React from "react"
import { Link, graphql } from "gatsby" //highlight-line
import Layout from "../components/layout"
//import ProjectItem from "../components/projectitem"
//import Image from "../components/image"
import SEO from "../components/seo"
import PropTypes from "prop-types"

export default function ProjectPage({ data }) {
  return (
  <Layout>
    
    <main id="main-content">
    <SEO title="Home" />

    <h1>Projects</h1>

        <div id="photocontainer">
          <div className="content">

          {data.allWpProject.nodes.map((items, i) => (
            <div key={items.slug}>

              {/* <ProjectItem items={items} key={i} /> */}

            <Link to={items.slug}>
              <p>{items.title}</p>
            </Link>


          </div>
        ))}

        </div>
      </div>
    </main>
  </Layout>
  )
}

ProjectPage.propTypes = {
  data: PropTypes.object,
}

export const pageQuery = graphql`
  query {
    allWpProject(sort: { fields: [date] }) {
      nodes {
        title
        slug
      }
    }
  }
`
