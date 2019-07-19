import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
//import SEO from "../components/seo"


const IndexPage = ({ data }) => (

  
  <Layout>
 
    <h1>Wordpress development</h1>

    <div id="frontpage_container">

    <div id="svg-image-container">

        <figure id="image-7">
            
        </figure>
    
    </div>

    <div id="text-box-front">

    <h1>Hello, I'm a Web Developer</h1>

<p>My name is Raymond. I am a web developer and I create custom wordPress themes, customise wordpress themes and build websites and web applications.</p>

<p>Whether it's for a small business or a personal goal, I can help you achieve your on-line goals with a website or web application specifically tailored for your needs.</p>

        <section id="calltoaction">
        
            <h1 id="front-title">I also do..</h1>
        
            <article className="frntpgbox">
                <h1>Wordpress</h1>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
            
            </article>

            <article className="frntpgbox">
                    <h1>PHP</h1>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>

            </article>

            <article className="frntpgbox">
                    <h1>React</h1>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
            </article>

            <article className="frntpgbox">
            <h1>Maintanence</h1>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
        </article>
        
        </section> 
  
        <p>From idea to launch I can help you build your project with the focus on simplicity, usability and accessibility for all your users. I use clean semantic code and following latest web standards compliances and best practices. I can ensure any website or web application built can be found by most search engines, viewed within in most modern browsers and have fast page loading for a great user experience.</p>
    </div>

     <Link to="/about">Link to About page</Link><br/>
    <Link to="/contact" >Link to Contact page</Link>

    <div className="clearfix"></div>
    
</div>


  </Layout>
)

export default IndexPage


export const pageQuery = graphql`
  query {
    wordpressPost {
      content
      id
      slug
      excerpt
      date
      template
    }
  }`