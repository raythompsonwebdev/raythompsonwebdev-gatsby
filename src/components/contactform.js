import React from "react"

const ContactForm = () => {
  
  return (
    <div id="contactform">
      <form action="" method="" id="contact-form">
        {/* free email tool  https://formspree.io/email@domain.tld*/}
        <ul>
          <li>
            <label htmlFor="name">Name</label>
            <input
              name="name"
              type="text"
              pattern="[A-Za-z0-9]+"
              autoFocus
              placeholder="Firstname, Surname"
              required
            />{" "}
            {/* gotcha recaptcha tool */}
          </li>

          <li>
            <label htmlFor="email">E-mail</label>
            <input
              name="email"
              type="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              autoFocus
              placeholder="***@***.com"
              required
            />
          </li>
          <li>
            <label htmlFor="text">Message</label>
            <textarea name="text" autoFocus></textarea>
          </li>
          <li>
            <input type="submit" />
          </li>
        </ul>
      </form>
    </div>
  )
}

export default ContactForm
