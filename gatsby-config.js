module.exports = {
  siteMetadata: {
    title: `Raythompsonwebdev.com`,
    description: `Web Developer, WordPress Enthusiast`,
    author: `raythompsonwebdev.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/static/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        /*
         * The full URL of the WordPress site's GraphQL API.
         * Example : 'https://www.example-site.com/graphql'
         */
        url: `http://localhost/wordpress/graphql`,
      },
    },

    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout`),
      },
    },
     //get images to show in posts
    {
      resolve: "gatsby-wpgraphql-inline-images",
      options: {
        wordPressUrl: "http://localhost/wordpress/",
        uploadsUrl: "http://localhost/wordpress/wp-content/uploads/",
        processPostTypes: ["page", "post", "project"],
        graphqlTypeName: "WPGraphQL",
      },
    },
    `gatsby-transformer-sharp`,    
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
        pngQuality: 75,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `${__dirname}/src/static/images/raythompsonwebdev.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
