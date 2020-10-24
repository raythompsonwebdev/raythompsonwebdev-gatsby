/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

//const path = require(`path`)
//const { createFilePath } = require(`gatsby-source-filesystem`)
//const createPaginatedPages = require('gatsby-paginate')


exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = require.resolve(`./src/templates/blog-post.js`)
  const projectTemplate = require.resolve(`./src/templates/project-single.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              date
              title
              description
            }
          }
        }
      }
    }
  `)

  const results = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              date
              title
              description
              slug
            }
          }
        }
      }
    }
  `)


  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Handle errors
  if (results.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.title,
      component: blogPostTemplate,
      context: {
        // additional data can be passed via context
        title: node.frontmatter.title,
      },
    })
  })

  results.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.title,
      component: projectTemplate,
      context: {
        // additional data can be passed via context
        title: node.frontmatter.title,
      },
    })
  })
}