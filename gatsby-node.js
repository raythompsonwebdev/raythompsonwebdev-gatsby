/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.

//process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"

const path = require(`path`)

//const { createFilePath } = require(`gatsby-source-filesystem`)
//const createPaginatedPages = require('gatsby-paginate')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  //const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`)
  //const projectTemplate = path.resolve(`./src/templates/project-single.js`)

  const results = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              date
              title
              description
              slug
              featuredImage
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (results.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  results.data.allMarkdownRemark.edges.forEach(({ node }) => {
    console.group(node)
    createPage({
      path: `/blog/${node.frontmatter.slug}`,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.slug,
        title: node.frontmatter.title,
      },
    })
  })

  results.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/blog/${node.frontmatter.slug}`,
      component: path.resolve(`./src/templates/project-single.js`),
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.slug,
        title: node.frontmatter.title,
      },
    })
  })
}
