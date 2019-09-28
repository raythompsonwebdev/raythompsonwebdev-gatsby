import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import SkillsGraph from "../components/skillsgraph"
import SliderPanel from "../components/sliderpanel"
import data from "../data/sliderpaneltext"
import $ from "jquery"

class AboutPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      properties: data.properties,
      property: data.properties[0],
    }

    this.bars = {
      bar: [
        {
          id: 1,
          name: "HTML",
          percentage: "85",
          classnam: "bar",
        },
        {
          id: 2,
          name: "CSS",
          percentage: "70",
          classnam: "bar",
        },
        {
          id: 3,
          name: "PHP/MYSQL",
          percentage: "90",
          classnam: "bar",
        },
        {
          id: 4,
          name: "JAVASCRIPT",
          percentage: "80",
          classnam: "bar",
        },
        {
          id: 5,
          name: "PYTHON",
          percentage: "65",
          classnam: "bar",
        },
      ],
    }
  }

  componentDidMount() {
    // Jquery here $(...)...
    //graph
    $("li .bar").each(function() {
      var percentage = $(this).data("percentage")

      $(this).animate(
        {
          width: percentage + "%",
        },
        1000
      )
    })
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
    const { bar } = this.bars

    return (
      <main id="main-content">
        <SEO title="About Page" />

        <div id="profile_container">
          <h1>About Me</h1>

          <article id="text-box-profile">
            <div className="introimg">
              <img alt="me" src="./src/images/raythompsonwebdev.jpg" />
            </div>

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
              Since then I have spent as much of my spare time as I can learning
              as much as I can about web development, building great
              applications and tech in general.{" "}
            </p>
            <div className="clearfix"></div>
          </article>

          <section id="prof_cont">
            <h1>Skill Level</h1>

            <article id="chart">
              <SkillsGraph 
                key={bar.id} 
                bar={bar} 
                ref={el => this.el = el}
              />
            </article>
          </section>

          <article id="text-box-profile-a">
            <p>
              {" "}
              I keep up to date with the constant changes in web development by
              following online tutorials and doing coding exercises and
              challenges on websites like{" "}
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
              I do like coding websites and web applications from scratch and
              also using frameworks like React.js , Gatsby.js, Vue.js, Laravell
              or Content Management Systems like Wordpress and Joomla. The tools
              I use to manage and organise workflow and speed up development
              process include tools like Grunt, Gulp, Sass, Babel, NPM Scripts,
              Webpack, ESLint, PHPsniffer, Git and GitHub.{" "}
            </p>

            <p>
              Other than web development and I enjoy spending time listening to
              music, particularly 90's Hip Hop, Reggae Dancehall, Jungle and
              RnB, Watching movies (Big Marvel movie fan) and spending time with
              family and friends.
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
            {/* Buttons */}
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
