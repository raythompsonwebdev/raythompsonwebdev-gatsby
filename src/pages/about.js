import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SkillsGraph from "../components/skillsgraph"
import SliderPanel from "../components/sliderpanel"


const AboutPage = () => (
  <Layout>
    
    <SEO title="About Page" />

      <div id="profile_container">

        <h1>About Me</h1>

        <article id="text-box-profile">

          <div className="introimg">

          </div>

          
          <p>I have a passion for web design and web development and particularly like using HTML, CSS and Javascipt for front-end development, responsive web development and php for back end development and WordPress theme development .</p>


          <p>When I am not working at job in public sector revenues and benefits, I spend most of my free time building <strong><Link to="">web applications</Link></strong>, experimenting with new coding techniques and tools, and helping others with website related<strong> <Link to="">coding problems</Link></strong>.</p>



          <p>I became interested web design and development after attend a Web design course at the East London Advanced Technology Training Center in East London between November 2011 and July 2012. I gained a city and guilds cerificate in basic web design and development</p>



          <p>Since then I have spent as much time as I can learning as much as I can about web development and tech in general. </p>
          <div className="clearfix"></div>
        </article>

        <SkillsGraph />

        <article id="text-box-profile-a">


          <p> I keep up to date as much as time will allow with the constant changes in web development by following online tutorials and doing coding exercises and challenges on websites like <Link to="">FreeCode Camp</Link> and <Link to="">CodeAcademy</Link>, listening to web development podcasts and attending local meet&#045;ups even short courses like <Link to="">Digital Futures 2017</Link>, events and volunteering at <Link to="">WordCamp 2018</Link> in London &#046;.</p>



          <p>I do like coding websites and web applications from scratch but do use frameworks like Foundation , Bootstrap, Vue, Laravell or Wordpress. Other tools like Grunt, Gulp, Sass and GitHub help me manage and organise workflow and speed up development process. </p>



          <p>Other than web development and my day job i enjoy spending time listeniing to music like 90's Hip Hop and Dancehall, Watching movies (Big Marvel movie fan) and spending time with family and friends.</p>



        </article>

        <SliderPanel />
      </div>
    <div className="clearfix"></div>
  </Layout>
)

export default AboutPage
