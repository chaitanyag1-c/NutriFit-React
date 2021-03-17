import React, { Component } from 'react'
import firebase from '../firebase'
import flag from './indiaflag.png'
import '../App.css'
export class Otp extends Component {
  handleClick=()=>{
    
      let dada=document.getElementById('dada');
     let no=dada.value;
         
    var recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
    var number = `+91${no}`
    console.log(number);
    firebase.auth().signInWithPhoneNumber(number,recaptcha).then( function(e) {
      var code = prompt('Enter the otp', '');

        
        if(code === null) return;

        
        e.confirm(code).then(function (result) {
            console.log(result.user);

            document.querySelector('label').textContent +=   result.user.phoneNumber + "   Number verified";
            document.getElementById('recaptcha').style.display='none';
            
            window.location='http://localhost:3000/login';
            
        }).catch(function (error) {
            console.error( error);
            
        });

    })
    .catch(function (error) {
        console.error( error);

    });
    
  }
  
  render() {
    return (
      <div>
           <div className="container">
           <h2 className="text-align">Phone verification</h2>
           <h2 className="text-align" >Enter your 10 digit phone number</h2>
       <img id="flag" src={flag}/>  <span> +91 </span>  <input type="text" id="dada" placeholder="Enter Phone number here"/> 
           <label></label>
        
        <div id="recaptcha"></div>

        <button className="bt" onClick={this.handleClick}>Get OTP</button>
        </div>
      </div>
    )
  }
}

export default Otp