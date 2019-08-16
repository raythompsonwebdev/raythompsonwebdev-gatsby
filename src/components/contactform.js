import React from "react"
import $ from 'jquery';

const ContactForm = () => {

    $(document).ready(function() {

        $('#contact-form').submit(function(event) {

            event.preventDefault();

            var abort = false;

            $("div.error").remove();

            $(':input[required]').each(function() {

                if ($(this).val()==='') {
                    $(this).after('<div class="error">This is a required field</div>');
                    abort = true;
                }
            }); // go through each required value

            if (abort) { return false; } else { return true; }

        })//on submit

    }); // ready
    $('input[placeholder]').blur(function() {
        $("div.error").remove();
        var myPattern = $(this).attr('pattern');
        var myPlaceholder = $(this).attr('placeholder');
        var isValid = $(this).val().search(myPattern) >= 0;
    
        if (!isValid) {
            $(this).focus();
            $(this).after('<div class="error">Entry does not match expected pattern: ' + myPlaceholder + '</div>');
        } // isValid test
    }); // onblur 
  
    return (
  
        <div id="contactform">

      <form action="" method="" id="contact-form">
      {/* free email tool  https://formspree.io/email@domain.tld*/}
        <ul>
          <li>
            <label htmlFor="name">Name</label>
            <input name="name" type="text" pattern="[A-Za-z0-9]+"  autoFocus placeholder="Firstname, Surname" required/> {/* gotcha recaptcha tool */}
          </li>

          <li>
            <label htmlFor="email">E-mail</label>
            <input name="email" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" autoFocus placeholder="***@***.com" required/>
          </li>
          <li>
            <label htmlFor="text">Message</label>
            <textarea name="text" autoFocus></textarea>
          </li>
          <li>
            
            <input type="submit"/>
          </li>
        </ul>

      </form>

    </div>

    )
}


export default ContactForm