import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contactform"


const contactPage = () => (
  <Layout>

    <SEO title="Contact Page" />

   

    <h1>Contact</h1>

    <div className="error"></div>

    <ContactForm />

    <div id="map_container"></div>

    <ul className="contact-details">
      <li id="fa-email">
        <a href="https://raythompsonwebdev.co.uk">{`raymond.thompson@raythompsonwebdev.co.uk`}</a>
      </li>
      <li id="fa-email">
        <a href="https://www.facebook.com/raythompsonwebdeveloper/">
          {"www.facebook.com/raythompsonwebdeveloper/"}
        </a>
      </li>
      <li id="fa-email">
        <a href="https://raythompsonwebdev.co.uk">{`@RayThompWeb`}</a>
      </li>
      <li id="fa-email">
        <a href="https://www.aedin.com/in/raymond-t-1b42b7b8/">{`www.aedin.com/in/raymond-t-1b42b7b8/`}</a>
      </li>
      <li id="fa-email">
        <a href="https://github.com/raythompsonwebdev">{`github.com/raythompsonwebdev`}</a>
      </li>
    </ul>

    <div className="clearfix"></div>
    

  </Layout>
)

export default contactPage
