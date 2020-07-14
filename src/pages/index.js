import React from "react"
import SEO from "../components/seo"
import { Link } from "gatsby"

const IndexPage = () => (

  <main id="main-content">
    
    <SEO title="Home Page" />
    
    <div id="frontpage_container">
      
      <section id="banner-container">
        <h1>{`Hello, I'm Raymond`}</h1>
        <h2>{`I'm a web developer. I live in London. I enjoy coding and the challenges coding brings.`}</h2>
        <p>{`I enjoy creating web applications and website interfaces that provide effective solutions to meet your on-line needs. I use clean semantic code and follow the latest web standards compliances and best practices. That ensures that websites can be found by most search engines, viewed within in most modern browsers and have speedy page loading for a better user experience. `}</p>

        <p>{`Whether its website interface or a full web application I can create elegant and maintainable solutions. To see some of my past work click button on the right `}</p>

        <Link id="projectLink" to="/projects">See Current Projects</Link>

        <figure id="image-7"></figure>

      </section>

      <div id="text-box-front">
        
        <section id="calltoaction">
          <h1 id="front-title">What I Do !</h1>
          <section className="frntpgbox">
            <span><i className="fa fa-wordpress"></i></span>
            <h1>WordPress</h1>
            <p>HTML &amp; CSS</p> 
            <p> PHP &amp; MYSQL</p>
            <p>Javascript ES5/ES6</p>
          </section>

          <section className="frntpgbox">
            <span><i className="fa fa-laptop"></i></span>
            <h1>Video, Audio &amp; Image</h1>
            <p>SQL Database</p>
            <p> On-Site SEO</p>
            <p> Website updates and maintenance.</p>
          </section>

          <section className="frntpgbox">
            <span><i className="fa fa-wrench"></i></span>
            <h1>Web Development</h1>
            <p>Set Up &amp; Installation</p>
            <p>Themes &amp; Plugins</p> 
            <p>Gutenberg Blocks</p>
          </section>
  
          <section className="frntpgbox">
            <span><i className="fa fa-wrench"></i></span>
            <h1>Web Development</h1>
            <p>Web Security</p>
            <p>Database</p> 
            <p>Code Debugging</p>
            
          </section>
         
        </section>      
      
      </div>

      <div className="clearfix"></div>
    </div>
   
 </main>
)

export default IndexPage
