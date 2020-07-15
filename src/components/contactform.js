import React from "react"
import PropTypes from "prop-types"

const ContactForm = props => {
  
  const {
    handleSubmit,
    handleEmail,
    handleComments,
    handleName,
    name,
    email,
    comments,
  } = props

  return (
    <div id="contactform">
      <form action="" method="" onSubmit={handleSubmit} id="contact-form">
        {/* free email tool  https://formspree.io/email@domain.tld*/}
        <ul>
          <li>
            <label htmlFor="firstName">Name</label>
            <input
              name="name"
              type="text"
              value={name}
              onChange={handleName}
              pattern="[A-Za-z0-9]+"
              autoFocus
              placeholder="Firstname"
              required
            />{" "}
            {/* gotcha recaptcha tool */}
          </li>

          <li>
            <label htmlFor="email">E-mail</label>
            <input
              name="email"
              type="email"
              value={email}
              onChange={handleEmail}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              autoFocus
              placeholder="***@***.com"
              required
            />
          </li>

          {/* <li>
              <select 
                value={props.data.selectQuery} 
                name="selectQuery" 
                onChange={this.handleSelect}              >
                <options value="Choose a query type"></options>
                <options value="Project"></options>
                <options value="Content"></options>
                <options value="Website"></options>
              </select>
            </li> */}

          <li>
            <label htmlFor="text">Message</label>

            <textarea
              value={comments}
              onChange={handleComments}
              name="text"
              autoFocus
            ></textarea>
          </li>

          <li>
            <button id="submit"></button>
          </li>
        </ul>
      </form>
    </div>
  )
}

ContactForm.propTypes = {
  data: PropTypes.any,
  handleSubmit: PropTypes.func.isRequired,
}

export default ContactForm
