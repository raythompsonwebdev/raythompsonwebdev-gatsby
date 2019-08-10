import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  
  <Layout>
    <SEO title="Contact Page" />
    <h1>Contact</h1>

    <div id="contactform">

<form action="" method="post" id="contact-form">
<ul>
  <li>
    <label htmlFor="name">Name</label>
    <input name="name" type="text"/>
  </li>

  <li>
    <label htmlFor="email">Name</label>
    <input name="email" type="email"/>
  </li>
  <li>
    <label htmlFor="text">Message</label>
    <textarea name="text"></textarea>
  </li>
  <li>
    
    <input type="submit"/>
  </li>
</ul>

</form>

</div>


<div id="map_container">
</div>


<ul className="contact-details">
<li id="fa-email"><Link to="">raymond.thompson@raythompsonwebdev.co.uk</Link></li>
<li id="fa-email"><Link to="">www.facebook.com/raythompsonwebdeveloper/</Link></li>
<li id="fa-email"><Link to="">@RayThompWeb</Link></li>
<li id="fa-email"><Link to="">www.linkedin.com/in/raymond-t-1b42b7b8/</Link></li>
<li id="fa-email"><Link to="">github.com/raythompsonwebdev</Link></li>
</ul>


<div className="clearfix"></div>


  </Layout>
)

export default ContactPage