/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
//const createPaginatedPages = require('gatsby-paginate')


module.exports.onCreateNode = ({ node, getNode, actions }) => {
    
    const { createNodeField } = actions
    // Transform the new node here and create a new node or
    // create a new node field.

    if (node.internal.type === `wordpress__POST` && `wordpress__wp_project`) {

      const slug = createFilePath({ node, getNode, basePath: `pages` })

      createNodeField({
        node,
        name: `slug`,
        value: slug,
      })
    }
  }
  

module.exports.createPages = ({ graphql, actions }) => {
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
        allWordpressCategory {
          edges {
            node {
              slug
              path
            }
          }
        }
        allWordpressWpProject {
          edges {
            node {
              slug
              path
            }
          }
        }
      }
    `).then(result => {
      
      if (result.errors) {

        reject(result.errors)
        
      }

     //posts
      result.data.allWordpressPost.edges.forEach(({ node }) => {
          
          createPage({
          path: `/blog/${node.slug}`,
          component: path.resolve(`src/templates/blog-post.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.slug,
          },
          })
      })

      //custom posts
      result.data.allWordpressWpProject.edges.forEach(({ node }) => {
        

        createPage({
        path: `/project/${node.slug}`,
        component: path.resolve(`src/templates/project-single.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.slug,
        },
        })
      })



    })


  }