import React from "react"
import { Link, graphql } from "gatsby" //highlight-line
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export default function IndexPage({ data }) {
  return (
  <Layout>
    <main id="main-content">
      <SEO title="Blog Page" />
      <h1>{`Interested in web design and web development`}</h1>

      <div className="main-text">
        <p>
          {`Whether you are just beginning to learn or are alreading building
          websites I would like to share what I have learnt so far about web
          design and web development through the tons of valuable web
          development and web design related resources I have read, watched
          and listened to over the past few years, content like`}
        </p>
      </div>
      {/* highlight-start */}
          {data.allWpPost.nodes.map((node, index) => (

            <div className="blogboxes" key={node.slug}>
            <h1 dangerouslySetInnerHTML={{ __html: node.title }}></h1>

            {node.featured_media == null ? (
              <p>No Image</p>
            ) : (
              <img
                src={                  
                  node.featuredImage.node.localFile.childImageSharp.fixed.src
                }
                alt=""
              />
            )}

            <div dangerouslySetInnerHTML={{ __html: node.excerpt }}></div>

            <Link to={node.slug}><p>{node.title}</p></Link>
            </div>
             
          ))}
          {/* highlight-end */}
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>

      <div className="clearfix"></div>
        <br />
        {/*Related Items */}
        <section className="contact-wide">
          <h1>Related Items</h1>
        </section>

    </main>
  </Layout>
  )
}

//highlight-start
export const pageQuery = graphql`
  query {
    allWpPost(sort: { fields: [date] }) {
      nodes {
        title
        excerpt
        slug
      }
    }
  }
`
//highlight-end
