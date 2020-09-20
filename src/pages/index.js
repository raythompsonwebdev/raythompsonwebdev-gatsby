import React from "react"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { FaWordpress, FaWrench, FaLaptopCode, FaLaptop } from "react-icons/fa"

const IndexPage = () => (
  <main id="main-content">
    <SEO title="Home Page" />

    <div id="frontpage_container">
      <section id="banner-container">
        <h1>{`Hello, I'm Raymond`}</h1>
        <h2>{`I'm a web developer. I live in London. I enjoy coding and the challenges coding brings.`}</h2>
        <p>{`I enjoy creating web applications and website interfaces that provide effective solutions to meet your on-line needs. I use clean semantic code and follow the latest web standards compliances and best practices. That ensures that websites can be found by most search engines, viewed within in most modern browsers and have speedy page loading for a better user experience. `}</p>

        <p>{`Whether its website interface or a full web application I can create elegant and maintainable solutions. To see some of my past work click button on the right `}</p>

        <Link id="projectLink" to="/projects">
          See Current Projects
        </Link>

        <figure id="image-7"></figure>
      </section>

      <div id="text-box-front">
        <section id="calltoaction">
          <h1 id="front-title">{`Things I Do`}</h1>
          <section className="frntpgbox">
            <span>
              <FaLaptopCode className="fa fa-code" />
            </span>
            <h1>{`Code`}</h1>
            <p>{`HTML & CSS`}</p>
            <p> {`PHP & MYSQL`}</p>
            <p>{`Javascript`}</p>
          </section>

          <section className="frntpgbox">
            <span>
              <FaLaptop className="fa fa-laptop" />
            </span>
            <h1>{`Optimisation`}</h1>
            <p>{`Relational Databases`}</p>
            <p> {`On-Site SEO`}</p>
            <p> {`Video, Audio, Image`}</p>
          </section>

          <section className="frntpgbox">
            <span>
              <FaWordpress className="fa fa-wordpress" />
            </span>
            <h1>{`WordPress`}</h1>
            <p>{`Set Up & Installation`}</p>
            <p>{`Themes & Plugins`}</p>
            <p>{`Gutenberg Blocks`}</p>
          </section>

          <section className="frntpgbox">
            <span>
              <FaWrench className="fa fa-wrench" />
            </span>
            <h1>{`Maintenance`}</h1>
            <p>{`Web Security`}</p>
            <p>{`Server`}</p>
            <p>{`Code Debugging`}</p>
          </section>
        </section>
      </div>

      <div className="clearfix"></div>
    </div>
  </main>
)

export default IndexPage