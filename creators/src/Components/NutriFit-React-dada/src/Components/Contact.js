import React from 'react'
import emailjs from 'emailjs-com';
import '../App.css'
function sendEmail(e) {
    e.preventDefault();
  
    emailjs.sendForm('service_8o11so6', 'template_60f3jq9', e.target, 'user_L5WbOZGv8Ai94tr8CIHVj')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
  
const Contact = () => {
    return (
        <div className="container">
            <form className="contact-form" onSubmit={sendEmail}>
                <h2 className="text-align">Contact Us <br/> We'll send you an mail </h2>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="name" />
      <br/>
      <label>Email</label>
      <input type="email" name="email" />
      <br/>
      <input type="submit" value="Contact" className="bt"/>
    </form>
    
        </div>
    )
}

export default Contact
