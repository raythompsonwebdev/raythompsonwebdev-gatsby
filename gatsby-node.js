/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

module.exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    // Transform the new node here and create a new node or
    // create a new node field.

    if (node.internal.type === `wordpress__POST`) {

      const slug = createFilePath({ node, getNode, basePath: `pages` })

      createNodeField({
        node,
        name: `slug`,
        value: slug,
      })
    }
  }

  const { createFilePath } = require(`gatsby-source-filesystem`)
  const path = require(`path`)

  exports.createPages = ({ graphql, actions }) => {
    // **Note:** The graphql function call returns a Promise
    // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
    
    const { createPage } = actions
    
    return graphql(`
      query {
        allWordpressPost {
          edges {
            node {
              slug
              path
            }
          }
        }
      }
    `).then(result => {

      //console.log(JSON.stringify(result, null, 4))

      if (result.errors) {
        reject(result.errors)
      }

      result.data.allWordpressPost.edges.forEach(({ node }) => {

       console.log(node.slug)
  

        createPage({
          path: node.slug,
          component: path.resolve(`src/components/templates/blog-post.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.slug,
          },
        })
      })

    })
  }