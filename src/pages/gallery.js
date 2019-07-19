import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const GalleryPage = () => (

<Layout>

    <SEO title="Page Gallery"/>

    <div id="photocontainer" >

        <nav className="menuSwitch">

            <ul>
                
                <li className="cat-active" >Link</li>

                <li className="" >Link</li>

                <li className="" >Link</li>

                <li className="" >Link</li>

                <li className="">Link</li>

            </ul>
        </nav>

        <div id="panel" className="prod-cnt" >

            <figure className="showcase-container" id="showcaseimg1">
                <div className="showcase-img">
                    
                </div>
                <figcaption className="showcase-content showcase">
                    <h1>Title</h1>
                
                    <Link to="/contact" >Link to Contact page</Link>

                </figcaption>

            </figure>

        </div>


    </div>


    <Link to="/blog">Go to Blog</Link><br/>
    <Link to="/">Go back to the homepage</Link><br/>
    <Link to="/about">Link to About page</Link>

</Layout>

)

export default GalleryPage





