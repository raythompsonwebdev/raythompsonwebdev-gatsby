module.exports = {
  siteMetadata: {
    title: `Raythompsonwebdev.com`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    `gatsby-plugin-sass`,

    {
      resolve: "gatsby-source-wordpress",
      options: {
        excludedRoutes:['/wp/v2/users/**', '/wp/v2/settings*'],
        includedRoutes: [
          "**/posts",
          "**/pages",
          "**/media",
          "**/categories",
          
          "**/taxonomies",
          "**/users",
        ],
        baseUrl: "raythompsonwebdevlocal.com/wordpress",
        protocol: "https",
        hostingWPCOM: false,
        useACF: false,
        verboseOutput: true,
        // Search and Replace Urls across WordPress content.
        searchAndReplaceContentUrls: {
          sourceUrl: "https://raythompsonwebdevlocal.com/wordpress",
          replacementUrl: "",
        },
      }
    },

    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options:{
        fonts: [
          {
            family: 'Cabin',
            variants: ['200','300', '400', '500', '600', '700' ],
          }
        ]
      }
    },


    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}