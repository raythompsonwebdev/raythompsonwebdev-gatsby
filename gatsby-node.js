/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
//const { slash } = require(`gatsby-core-utils`);
const { createFilePath } = require(`gatsby-source-filesystem`)
//const createPaginatedPages = require('gatsby-paginate')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `wordpress__POST` && `wordpress__wp_project`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const queryResult = await graphql(`
    {
      allWpPost(sort: { fields: [date] }) {
        nodes {
          id
          title
          excerpt
          content
          slug
        }
      }
      allWpProject {
        nodes {
          id
          slug
          title
        }
      }
    }
  `)

  if (queryResult.errors) {
    reporter.panic("error loading events", queryResult.errors)
    return
  }

  //console.log(JSON.stringify(result, null, 4))
  //process.exit()
  const postTemplate = path.resolve(`./src/templates/blog-post.js`)

  //highlight-start
  queryResult.data.allWpPost.nodes.forEach(node => {
    createPage({
      path: `/blog/${node.slug}`,
      component: postTemplate,
      context: {
        // This is the $slug variable
        // passed to blog-post.js
        slug: node.slug,
      },
    })
  })
  //highlight-end
  const projectTemplate = path.resolve(`./src/templates/project-single.js`)
  //custom posts
  queryResult.data.allWpProject.nodes.forEach(node => {
    createPage({
      path: `/project/${node.slug}`,
      component: projectTemplate,
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    })
  })
}
