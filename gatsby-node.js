/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
    // Transform the new node here and create a new node or
    // create a new node field.

    if (node.internal.type === `wordpress__POST`) {
      console.log(createFilePath({ node, getNode, basePath: `pages` }))
      createNodeField({
        node,
        name: `slug`,
        value: slug,
      })
    }
  }

  exports.createPages = ({ graphql, actions }) => {
    // **Note:** The graphql function call returns a Promise
    // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
    return graphql(`
      {
        allWordpressPost {
          nodes {
            slug
          }
        }
      }
    `).then(result => {

      //console.log(JSON.stringify(result, null, 4))
      result.data.allWordpressPost.nodes.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
      })

    })
  }