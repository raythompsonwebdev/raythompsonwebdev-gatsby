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
  

exports.createPages = ({ graphql, actions }) => {
    
    
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

        console.log(result.errors)
        
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