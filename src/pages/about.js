import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import SkillsGraph from "../components/skillsgraph"
import SliderPanel from "../components/sliderpanel"
import data from "../data/sliderpaneltext"

class AboutPage extends React.Component {
  
  constructor(props) {
    super(props)
    
    this.state = {
      properties: data.properties,
      property: data.properties[0],
    }
  }

  nextProperty = () => {
    const newIndex = this.state.property.index + 1
    this.setState({
      property: data.properties[newIndex],
    })
  }

  prevProperty = () => {
    const newIndex = this.state.property.index - 1
    this.setState({
      property: data.properties[newIndex],
    })
  }

  render() {
    const { properties, property } = this.state

    return (
      <main id="main-content">
        <SEO title="About Page" />

        <div id="profile_container">
          <h1>About Me</h1>

          <article id="text-box-profile">
            <div className="introimg"></div>

            <p>
              I have a passion for web design and web development and
              particularly like using HTML, CSS and Javascipt for front-end
              development, responsive web development and php for back end
              development and WordPress theme development .
            </p>

            <p>
              When I am not working at job in public sector revenues and
              benefits, I spend most of my free time building{" "}
              <strong>
                <Link to="/projects">web applications</Link>
              </strong>
              , experimenting with new coding techniques and tools, and helping
              others with website related
              <strong>
                {" "}
                <Link to="/projects">coding problems</Link>
              </strong>
              .
            </p>

            <p>
              I became interested web design and development after attend a Web
              design course at the East London Advanced Technology Training
              Center in East London between November 2011 and July 2012. I
              gained a city and guilds cerificate in basic web design and
              development
            </p>

            <p>
              Since then I have spent as much time as I can learning as much as
              I can about web development and tech in general.{" "}
            </p>
            <div className="clearfix"></div>
          </article>

          <SkillsGraph />

          <article id="text-box-profile-a">
            <p>
              {" "}
              I keep up to date as much as time will allow with the constant
              changes in web development by following online tutorials and doing
              coding exercises and challenges on websites like{" "}
              <a href="https://site.test/" title="Pic 1">
                FreeCode Camp
              </a>{" "}
              and <a href="https://site.test/">CodeAcademy</a>, listening to web
              development podcasts and attending local meet&#045;ups even short
              courses like{" "}
              <a href="https://site.test/" title="Pic 1">
                Digital Futures 2017
              </a>
              , events and volunteering at{" "}
              <a href="https://site.test/">WordCamp 2018</a> in London &#046;.
            </p>

            <p>
              I do like coding websites and web applications from scratch but do
              use frameworks like Foundation , Bootstrap, Vue, Laravell or
              Wordpress. Other tools like Grunt, Gulp, Sass and GitHub help me
              manage and organise workflow and speed up development process.{" "}
            </p>

            <p>
              Other than web development and my day job i enjoy spending time
              listeniing to music like 90's Hip Hop and Dancehall, Watching
              movies (Big Marvel movie fan) and spending time with family and
              friends.
            </p>
          </article>

          <section id="prof_cont-a">
            <h1>Development Courses Taken</h1>

            <article className="hero-slider">
              <div className="mask" id="mask">
                <div
                  className="slider-body"
                  style={{
                    transform: `translateY(-${property.index *
                      (100 / properties.length)}%)`,
                  }}
                >
                  {properties.map(property => (
                    <SliderPanel key={property.id} property={property} />
                  ))}
                </div>
              </div>
            </article>
            <button
              className="slider-btn"
              onClick={() => this.nextProperty()}
              disabled={property.index === properties.length - 1}
            >
              Next
            </button>
            <button
              className="slider-btn"
              onClick={() => this.prevProperty()}
              disabled={property.index === 0}
            >
              Prev
            </button>
          </section>
        </div>

        <div className="clearfix"></div>
      </main>
    )
  }
}

export default AboutPage
