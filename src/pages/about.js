import React from "react"
import SEO from "../components/seo"
import SkillsGraph from "../components/skillsgraph"
import SliderPanel from "../components/sliderpanel"
import { Link } from "gatsby" //highlight-line
import Image from "../components/image"

class AboutPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      bars: [],
      panels: [],
      lastIndex: 0,
      cert: [],
    }
  }

  componentDidMount() {
    fetch("./data/barstext.json")
      .then(response => response.json())
      .then(data => {
        const bars = data.map(bar => {
          bar.barId = this.state.lastIndex
          this.setState({ lastIndex: this.state.lastIndex + 1 })
          return bar
        })
        this.setState({
          bars: bars,
        })
      })
      .catch(error => {
        console.info(error)
      })

    fetch("./data/sliderpaneltext.json")
      .then(response => response.json())
      .then(data => {
        const panels = data.map(panel => {
          panel.panelId = this.state.lastIndex

          this.setState({ lastIndex: this.state.lastIndex + 1 })

          return panel
        })

        this.setState({
          panels: panels,
          cert: panels[0],
        })
      })
      .catch(error => {
        console.info(error)
      })
  }

  nextProperty = () => {
    const newIndex = this.state.cert.imageindex + 1

    this.setState({
      cert: this.state.panels[newIndex],
    })
  }

  prevProperty = () => {
    const newIndex = this.state.cert.imageindex - 1

    this.setState({
      cert: this.state.panels[newIndex],
    })
  }

  render() {
    const { bars, panels, cert } = this.state

    return (
      <main id="main-content">
        <SEO title="About Page" />

        <div id="profile_container">
          <h1>About Me</h1>

          <article id="text-box-profile">
            <p>
              {`I have had a passion for web development since 2012 after attending a course in basic web design for beginners at a place called ELATT in Hackney, London. The experience of taking part in the course, learning the process of developing a website inspired me to learn more about web development.`}
            </p>
            <p>
              {`Since then I spend lots of my spare time learning coding languages, practising coding,`}
              <strong>
                <Link to="/projects" title="See Projects">
                  {" "}
                  {`Web Applications`}{" "}
                </Link>
              </strong>
              {`sharing what I have learned with friends, online and at events during my spare time while working full-time.`}{" "}
              {`I became more interested in programming around 2016 after completing online courses like`}
              <strong>
                {" "}
                <a
                  href="http://www.alinkedin.com/in/raymond-thompson-1b42b7b8"
                  title="Lynda.com"
                >
                  {` Lynda.com `}
                </a>
              </strong>
              {`that year and gained even more inspiration to learn more about coding languages like Javascipt, PHP, Ruby and Python and continue coding and building small applications.`}
            </p>
            <p>{`Keeping up with changes that have happended over the past few years in web development has been a challenge. `}</p>
          </article>

          <section id="prof_cont">
            <h1>{`Skill Level`}</h1>

            <article id="chart">
              <SkillsGraph bars={bars} />
            </article>
          </section>

          <article id="text-box-profile-a">
            <p>
              {`I have been inspired enough to continue learning and mastering new coding techniques to solve problems I come across when coding. `}
            </p>
            <p>
              {`I have gained valuable knowledge and experience meeting others interested in web development, online and at live events I have been able to attend. Events like`}
              <a href="https://vimeo.com/232481032" title="Digital Futures">
                {" "}
                Digital Futures 2017{" "}
              </a>
              {`in Waterloo, London. and`}
              <a href="https://vimeo.com/232481032" title="Digital Futures">
                {" "}
                WordCamp{" "}
              </a>
              {` in London and attending pair programming sessions to solve coding problems like the one held by`}
              <a href="https://vimeo.com/232481032" title="Digital Futures">
                {" "}
                Makers Academy{" "}
              </a>
            </p>

            <p>
              {`This has helped me with the confidence to put into practice what I have learned to create full stack web applications, wordpress themes and plugins and other web programs.`}
            </p>
            <p>{`My aim is to continue improving my coding skills and workflow so that I am able to help in the creation of well designed and maintainable web applications and contribute towards improving the user experience, security and accessibility of web application on the web for all users.`}</p>
          </article>

          <section id="prof_cont-a">
            <h1>Development Courses Taken</h1>

            <article className="hero-slider">
              <div className="mask" id="mask">
                <div
                  className="slider-body"
                  style={{
                    transform: `translateY(-${
                      cert.imageindex * (100 / panels.length)
                    }%)`,
                  }}
                >
                  {panels.map(panel => (
                    <SliderPanel key={panel.panelId} panel={panel} />
                  ))}
                </div>
              </div>
            </article>
            {/* Buttons */}
            <button
              className="slider-btn"
              onClick={() => this.nextProperty()}
              disabled={cert.imageindex === panels.length - 1}
            >
              Next
            </button>
            <button
              className="slider-btn"
              onClick={() => this.prevProperty()}
              disabled={cert.imageindex === 0}
            >
              Previous
            </button>
          </section>
        </div>

        <div className="clearfix"></div>
      </main>
    )
  }
}

export default AboutPage
