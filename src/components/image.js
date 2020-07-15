import React from "react"
import graphql from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

export const data = graphql`
  query($slug: String!) {
    allWordpressPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          featured_media {
            localFile {
              childImageSharp {
                fixed {
                  height
                  src
                  width
                  srcSet
                }
              }
            }
          }
        }
      }
    }
  }
`

const Image = ({ data }) => {
  return <Img fixed={data.featured_media.localFile.childImageSharp.fixed} />
}

Image.propTypes = {
  data: PropTypes.any,
}

export default Image
