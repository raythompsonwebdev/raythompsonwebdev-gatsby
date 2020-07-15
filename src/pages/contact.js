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
      name: ' ',
      comments: ' ',
      email: ' ',      
      //isFriendly = false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleComments = this.handleComments.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    //when using arrow function binding not needed for methods using setState.
  }
  
  handleName(e) {
    this.setState({
      name: e.target.value
    });
  }

  handleComments(e) {
    this.setState({
      comments: e.target.value
    });
  }

  handleEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  handleSubmit (e) {

    let url = 'https://formspree.io/email@domain.tld';

    console.log(
      `Details : ${this.state.name}, ${this.state.email}, ${this.state.comments}`,
    );

    e.preventDefault();
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
          handleComments={this.handleComments}
          handleEmail={this.handleEmail}
          handleName={this.handleName}
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
