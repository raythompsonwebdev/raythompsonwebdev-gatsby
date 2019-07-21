import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

//import Img from "../components/image"


const GalleryPage = ({ data }) => (
 


<Layout>

    <SEO title="Gallery Page"/>

    <div id="photocontainer" >

 <div className="content">

        <nav className="menuSwitch">

            <ul>
                
                <li className="cat-active" >Link</li>

                <li className="" >Link</li>

                <li className="" >Link</li>

                <li className="" >Link</li>

                <li className="">Link</li>

            </ul>

        </nav>

       


            {data.allWordpressWpGallery.nodes.map((items, i) => (


            <div id="panel" className="prod-cnt"  key={i}>

            <figure className="showcase-container" id="showcaseimg1">

                <div className="showcase-img">

                
                    
                </div>

                <figcaption className="showcase-content showcase">

                    <h1>{items.title}</h1>
                
                    <Link to="/contact" >Link to Contact page</Link>

                </figcaption>

            </figure>



        </div>

))}
        </div> 
    </div>


</Layout>

)

export default GalleryPage


export const data = graphql`
    query SiteCustomQuery {
        allWordpressWpGallery {
            nodes {
                title
                featured_media {
                    source_url
                }
            }
        }
    }
    `


