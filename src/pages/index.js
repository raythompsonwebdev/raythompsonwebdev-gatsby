import React from "react"
import SEO from "../components/seo"

const IndexPage = () => (

  <main id="main-content">
    
    <SEO title="Home Page" />
    
    <div id="frontpage_container">
      
      <div id="svg-image-container">
      <h1>{`Hello, I'm Raymond`}</h1>
      <h2>{`I build beautiful web applications`}</h2>
      <button>See Current Projects</button>


        <figure id="image-7"></figure>
      </div>

      <div id="text-box-front">
        

        <p>{`My name is Raymond. I am a web developer with passion for creating websites, web applications and user interfaces using latest web technologies.  Whether for business or a personal goals, I can help you with any goals you have to get on-line with a website or web application specifically tailored to your on-line needs. `}</p>

        <p>{`From idea to launch I can help build your project with the focus on simplicity, usability and accessibility for all users. I use clean semantic code and following latest web standards compliances and best practices. I can ensure any website or web application built can be found by most search engines, viewed within in most modern browsers and mobile devices, and have fast page loading for a great user experience. `}</p>
        <br />
        
        <section id="calltoaction">
          <article className="frntpgbox">
            <h1>Current Projects</h1>
            <ul>
              <li>Text 1</li>
              <li>Text 1</li>
              <li>Text 1</li>
              <li>Text 1</li>
            </ul>
          </article>

          <article className="frntpgbox">
            <h1>Blogs</h1>
            <ul>
              <li>Text 1</li>
              <li>Text 1</li>
              <li>Text 1</li>
              <li>Text 1</li>
            </ul>
          </article>

          <article className="frntpgbox">
            <h1>Contact Me</h1>
            <ul>
              <li>Text 1</li>
              <li>Text 1</li>
              <li>Text 1</li>
              <li>Text 1</li>
            </ul>
          </article>

          
        </section>
      
      </div>

      <div className="clearfix"></div>
    </div>
   
 </main>
)

export default IndexPage
