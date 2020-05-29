import React from "react"
import SEO from "../components/seo"
import { Link } from "gatsby"

const IndexPage = () => (

  <main id="main-content">
    
    <SEO title="Home Page" />
    
    <div id="frontpage_container">
      
      <section id="banner-container">
      <h1>{`Hello, I'm Raymond`}</h1>
      <h2>{`I build beautiful web applications`}</h2>
      <Link id="projectLink" to="/projects">See Current Projects</Link>


        <figure id="image-7"></figure>
      </section>

      <div id="text-box-front">
        

      <p>{`My name is Raymond. I am a web developer with passion for creating websites, web applications and user interfaces using latest web technologies.  Whether for business or a personal goals, I can help you with any goals you have to get on-line with a website or web application specifically tailored to your on-line needs. `}</p>

        <p>{`From idea to launch I can help build your project with the focus on simplicity, usability and accessibility for all users. I use clean semantic code and following latest web standards compliances and best practices. I can ensure any website or web application built can be found by most search engines, viewed within in most modern browsers and mobile devices, and have fast page loading for a great user experience. `}</p>
        
        <br/>
        
        <section id="calltoaction">
          <h1 id="front-title">What I can Do !</h1>
          <article className="frntpgbox">

            <span><i className="fa fa-wordpress"></i></span>
            <h1>WordPress</h1>
            <p>Theme development and customisation.</p> 
            <p> Plugin development and customisation.</p>
              <p>Maintenance, Installation,</p>
          </article>

          <article className="frntpgbox">
          <span><i className="fa fa-laptop"></i></span>
            <h1>Responsive Web Design</h1>
            <p>PSD to HTML/CSS website</p>
            <p> Image Optimisation, Website Creation.</p>
              <p> Website updates and maintenance.</p>
          </article>

          <article className="frntpgbox">
          <span><i className="fa fa-wrench"></i></span>
            <h1>Web Development</h1>
            <p>Website customisation, API integration.</p>
            <p>Debugging,  Web App Creation.</p> 
            <p>Video & Audio Optimisation.</p>
          </article>
         
        </section>
      
      
      </div>

      <div className="clearfix"></div>
    </div>
   
 </main>
)

export default IndexPage
