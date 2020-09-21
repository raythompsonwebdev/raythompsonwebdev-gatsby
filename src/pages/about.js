import React from "react"
import SEO from "../components/seo"
import SkillsGraph from "../components/skillsgraph"
import SliderPanel from "../components/sliderpanel"
import {Link} from "gatsby" //highlight-line

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
        console.log(error)
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
        console.error(error)
      })      
    
  } 
   
  nextProperty = () => {
    const newIndex = this.state.cert.imageindex + 1

    console.log(newIndex)

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
            <div className="introimg">
              <img alt="me" src="./src/static/images/raythompsonwebdev.jpg" />
            </div>

            <p>
            {`I have had a passion for web development since 2012 after
            attending a course in basic web design for beginners at a place
            called ELATT in Hackney, London. The experience of taking part in
            the course, learning the process of developing a website inspired
            me to learn more about web development.`}
            </p>

            <p>
              {`I spent the following years learning coding languages, practicing
              coding,`}
              <strong>
                <Link to="/projects" title="See Projects"> {`Web Applications`} </Link>
              </strong>
              {`helping others with their websites in my spare time while working
              full-time.`}
            </p>
            <p>
              {`I became more interested in programming around 2016 after taking
              computer science fundementals courses on`}
              <strong>
                {" "}
                <a href="http://www.alinkedin.com/in/raymond-thompson-1b42b7b8" title="Lynda.com">
                  {` Lynda.com `}
                </a>
              </strong>{`that year and have since then found it easier a understand how
              and why coding languages like Javascipt, PHP and Ruby work the way
              they do.`}
            </p>            

            <div className="clearfix"></div>
          </article>

          <section id="prof_cont">
            <h1>{`Skill Level`}</h1>

            <article id="chart">
              <SkillsGraph bars={bars} />
            </article>
          </section>

          <article id="text-box-profile-a">
          <p>
              {`Keeping up with changes in web development and self teaching web
              development has been a challenge. I have been inspired enough to
              continue learning and mastering new coding techniques to solve
              coding problems I come across.`}
            </p>
            <p>
              {`I have gained some experience working with others interested in
              web development at events and on projects. I took part in a
              project called`}
              <a href="https://vimeo.com/232481032" title="Digital Futures">
              {" "}Digital Futures 2017{" "}
              </a>
              {`in Waterloo where I worked with other student to enhance a dance
              performance with coreographed lights and music using Ruby and
              Python`}
            </p>
            <p>
              {`I also attended`}
              <a href="https://2018.london.wordcamp.org/attendees/" title="WordCamp 2018 Attendees">
              {" "}WordCamp 2018{" "}
              </a>{" "}
              {`in London as a volunteer helping visitors find there way around
              the venue, putting out sinage. I also attended contributors day
              and even reviewed a wordpress theme for the theme review team`}
            </p>

            
          </article>

          <section id="prof_cont-a">
            <h1>Development Courses Taken</h1>

            <article className="hero-slider">
              <div className="mask" id="mask">
                <div
                  className="slider-body"
                  style={{
                    transform: `translateY(-${cert.imageindex *
                      (100 / panels.length)}%)`,
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
          <article id="text-box-profile-b">

            <p>{`My aim is to continue improving my coding skills and workflow so that I am able to create efficeintly, well designed and maintaibable web applications. I want to be able to contribute to improving user experience on the web, particularly for those have difficulty accessing websites and web applications due to weak signals or unreliable networks .`} </p>

            <p>{`I am actively seeking  employment opporunities in web development industry.`}</p>

</article>

        
        </div>

        
        <div className="clearfix"></div>
      </main>
    )
  }
}

export default AboutPage
