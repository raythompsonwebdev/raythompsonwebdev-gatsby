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
      //works with gatsby-wpgraphql-inline-images not gatsby-source-wordpress
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "SWAPI",
        // This is the field under which it's accessible
        fieldName: "swapi",
        // URL to query from
        url: "https://api.graphcms.com/simple/v1/swapi",
      },
    },

    {
      resolve: "gatsby-source-wordpress",
      options: {
        excludedRoutes:['/wp/v2/users/**', '/wp/v2/settings*'],
        baseUrl: "localhost/wordpress",
        protocol: "http",
        hostingWPCOM: false,
        useACF: false,
        verboseOutput: true,
        // Search and Replace Urls across WordPress content.
        searchAndReplaceContentUrls: {
          sourceUrl: "http://localhost/wordpress",
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

    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout`),
      },
    },

    //get images to show in posts
    {
      resolve: 'gatsby-wpgraphql-inline-images',
      options: {
        wordPressUrl: 'http://localhost/wordpress/',
        uploadsUrl: 'http://localhost/wordpress/wp-content/uploads/',
        processPostTypes: ['Page', 'Post', 'CustomPost'],
        graphqlTypeName: 'WPGraphQL',
        
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
    }
    
  ],
}