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
      e.target.reset();

      let popup=document.getElementsByClassName('popup');
      console.log(popup);
      for(let i=0;i<popup.length;i++)
      {
          popup[i].style.display='block';
        }
        
         
  }
  function closepop(){
    let popup=document.getElementsByClassName('popup');
    for(let i=0;i<popup.length;i++)
    {
        popup[i].style.display='none';
      }
}
  
const Contact = () => {
    return (
        <div className="container" data-aos="fade-out">
            <form className="contact-form" onSubmit={sendEmail}>
                <h2 className="text-align">Contact Us <br/> We'll send you an mail </h2>
      
      
      <input type="text" name="name" placeholder="Name" style={{width:'88%'}} autoComplete="off"/>
      <br/>
          <input type="email" name="email" placeholder="E-mail" style={{width:'88%'}} autoComplete="off"/>
      <br/>
      <input type="submit" value="Contact" className="bt" />
    </form>
    
    <div className="popup container">
        <h2 className="text-align"> Thank you for contacting ! <br/> We've sent you an mail regarding this</h2>
        <button className="popc" onClick={closepop} > X </button>
    </div>
        </div>

        
    )
}

export default Contact
