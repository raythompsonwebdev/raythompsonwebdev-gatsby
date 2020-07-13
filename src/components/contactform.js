import React from "react"

const ContactForm = (props) => {

    return (
      <div id="contactform" onsubmit={props.handleSubmit} >
        <form action="" method="" id="contact-form">
          {/* free email tool  https://formspree.io/email@domain.tld*/}
          <ul>
            
            <li>
              <label htmlFor="firstName">Name</label>
              <input
                name="firstName"
                type="text"
                value={props.data.firstName}
                //onChange={props..handleSubmit}
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
                value={props.data.email}
                //onChange={props..handleSubmit}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                autoFocus
                placeholder="***@***.com"
                required
              />
            </li>
            
            <li>
              <select 
                value={props.data.selectQuery} 
                name="selectQuery" 
                //onChange={props..handleSubmit}
              >
                <options value="Choose a query type"></options>
                <options value="Project"></options>
                <options value="Content"></options>
                <options value="Website"></options>
              </select>
            </li>
            

            <li>
              <label htmlFor="text">Message</label>

                <textarea 
                  value={props.data.text} 
                  name="text" 
                  autoFocus
                >

                </textarea>


            </li>

            <li>
              <button id="submit"></button>
            </li>
            

          </ul>
        </form>
      </div>
    )


  
}

export default ContactForm
