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
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },

    `gatsby-plugin-sass`,

    {
      resolve: "gatsby-source-wordpress",
      options: {
        excludedRoutes:['/wp/v2/users/**', '/wp/v2/settings*'],
        
        
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
          },
          {
            family: 'PT Sans',
            variants: ['200','300', '400', '500', '600', '700' ],
          }
        ],
        "formats": [
          "woff",
          "woff2"
        ]
      }
    },


    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `${__dirname}/src/` },
    },

    `gatsby-transformer-remark`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
  ],
}