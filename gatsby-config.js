// require("dotenv").config({
//   path: ".env",
// })

module.exports = {
  siteMetadata: {
    title: `Raythompsonwebdev.com`,
    description: `Web Developer, WordPress Enthusiast`,
    author: `raythompsonwebdev.com`,
    url: `https://raythompsonwebdev`,
    //logo: `static/images/logo.png`,
    twitter: `raythompweb`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      //get all files from src folder in file system
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      //get markdown pages from file system
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/markdown-pages`,
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
        url: "https://swapi-graphql.netlify.app/.netlify/functions/index",
      },
    },

    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    {
      //get images from file system
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    `gatsby-plugin-emotion`,
    // {
    //   resolve: `gatsby-plugin-typography`,
    //   options: {
    //     pathToConfigModule: `src/utils/typography`,
    //   },
    // },

    `gatsby-plugin-postcss`,
    `gatsby-plugin-css-customs`,

    `gatsby-plugin-styled-components`,
    // {
    //   resolve: "gatsby-plugin-prefetch-google-fonts",
    //   options: {
    //     fonts: [
    //       {
    //         family: "Cabin",
    //         variants: ["200", "300", "400", "500", "600", "700"],
    //       },
    //       {
    //         family: "PT Sans",
    //         variants: ["200", "300", "400", "500", "600", "700"],
    //       },
    //     ],
    //     formats: ["woff", "woff2"],
    //   },
    // },

    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout`),
      },
    },

    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./data/`,
      },
    },
  ],
}
