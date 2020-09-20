/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it


const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
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
  `).then(result => {

    if (result.errors) {
      console.log(result.errors);  
      //process.exit()
    }


    //console.log(JSON.stringify(result, null, 4))
    //process.exit()

    //highlight-start
    result.data.allWpPost.nodes.forEach((node) => {
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          // This is the $slug variable
          // passed to blog-post.js
          slug: node.slug,
        },
      })
    })
    //highlight-end

    //custom posts
    result.data.allWpProject.nodes.forEach((node) => {
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/project-single.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.slug,
        },
      });
    });

  })
}