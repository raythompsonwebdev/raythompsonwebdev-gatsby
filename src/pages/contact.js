import React from "react"
import SEO from "../components/seo"
import ContactForm from "../components/contactform"
import MapContainer from "../components/mapgoogle"

const mapCover = {
  position: 'relative'
};

class contactPage extends React.Component {
  
  constructor() {
    super()
    this.state = {
      firstName: "",
      email: "",
      text: "",
      selectQuery: "",
      //isFriendly = false
    }

    //this.handleChange = this.handleChange.bind(this)
    //this.handleSubmit = this.handleSubmit.bind(this)
    //when using arrow function binding not needed for methods using setState.
  }

  handleSubmit = (event) => {
    event.preventDefault()

    console.log("submitted")
  }

  /*
  handleChange(event){

    const {name, value, type, checked} = event.target

    type === "checkbox" ? this.setState({[name]: checked }) : this.setState({[name]: value })
 
  }
*/

  render() {
    return (
      <main id="main-content">
        
        <SEO title="Contact Page" />

        <h1>Contact</h1>

        <div className="error"></div>

        <ContactForm
          handleSubmit={this.handleSubmit}
          data={this.state}
          //{...this.state}
        />

        <div id="map_container" style={mapCover}>
          <MapContainer />
        </div>
       
        <address className="contact-details" >
          <ul>
            <li>
              <a href="mailto:ray@ray.com">{`raymond.thompson@raythompsonwebdev.co.uk`}</a>
            </li>
            <li>
              <a href="https://www.facebook.com/raythompsonwebdeveloper/">
                {"www.facebook.com/raythompsonwebdeveloper/"}
              </a>
            </li>
            <li>
              <a href="https://twitter.com/RayThompWeb/">{`@RayThompWeb`}</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/raymond-t-1b42b7b8/">{`www.aedin.com/in/raymond-t-1b42b7b8/`}</a>
            </li>
            <li>
              <a href="https://github.com/raythompsonwebdev">{`github.com/raythompsonwebdev`}</a>
            </li>
          </ul>
        </address>
        <div className="clearfix"></div>
      </main>
    )
  }
}

export default contactPage
