import React from 'react'
import './Signup.css'
import {Link} from 'react-router-dom'
const handlechange=(e)=>{
    let emailPattern=document.getElementById('emailPattern');
    if(email1){
    email1.addEventListener('input',(e)=>{
        let rexmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let emailvalue=e.target.value;
        let checkemail=rexmail.test(emailvalue);
        if(checkemail==true)
        {
            emailPattern.style.display='none'
        }
        else{
            emailPattern.style.display='block'

        }
    })
}
}
const namesubmit=()=>{
    let naam=document.getElementById('naam');
        if(naam){
            let username=naam.value;
            localStorage.setItem('localuser',username);
        }
        }
let pass1=document.getElementById('pass1')
let email1=document.getElementById('email1')
let pass2=document.getElementById('pass2')
let passwordPattern=document.getElementById('passwordPattern')
let emailPattern=document.getElementById('emailPattern')

if(pass1){
    pass1.addEventListener('input',(e)=>{
        let rexpass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        let passvalue=e.target.value;
        let check=rexpass.test(passvalue);
        if(check==true)
        {
            passwordPattern.style.display='none'
        }
        else{
            passwordPattern.style.display='block'

        }
    })
}
if(email1){
    email1.addEventListener('input',(e)=>{
        let rexmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let emailvalue=e.target.value;
        let checkemail=rexmail.test(emailvalue);
        if(checkemail==true)
        {
            emailPattern.style.display='none'
        }
        else{
            emailPattern.style.display='block'

        }
    })
}
const showpass2=()=>{
    if(pass2)
    {
        console.log('check')
        if(pass2.type=='password')
    pass2.type='text';
    else {
        pass2.type='password';
    }
}

}
const showpass1=()=>{
    console.log('adsasd')
    if(pass1!==null)
    {
        if(pass1.type=='password')
        pass1.type='text';
        else {
            pass1.type='password';
        }
    }
    
    }
    
    let pmatch=document.getElementById('p-match')
    let pnomatch=document.getElementById('p-no-match')
if(pass2)
{
    pass2.addEventListener('input',(e)=>{
        let confirmvalue=e.target.value;
        if(pass1.value==confirmvalue)
        {
            console.log('Password Matched')
            pmatch.style.display='block'
            pnomatch.style.display='none'
        }
        else{
            pnomatch.style.display='block';
            pmatch.style.display='none'
}
    })
}

const Signup = () => {
    return (

        <div className="row1">
  <section className="section">
  <div className="signupHeader">
            <h3>Register</h3>
            <h4>Please fill your information bellow</h4>
          </div>
    <div className="signupmain">
      <form>
        <div className="form-item box-item">
          <input type="text" name="name" id="naam" placeholder="Name" data-required />
          <small className="errorReq"><i className="fa fa-asterisk" aria-hidden="true" /> required field</small>
        </div>
        <div className="form-item box-item">
          <input type="email" autoComplete="off" name="email" id="email1" placeholder="Email" onChange={handlechange} data-email data-required />
          <p id="emailPattern">Please Enter Valid E-mail</p>
          
        </div>
        <div className="form-item box-item">
          <input type="password" name="password" id="pass1" placeholder="Password" data-password data-required />
          <i id="eye1" class="bi bi-eye" onClick={showpass1}></i>
          <p id="passwordPattern">Use Upper Case & Lower Case ,Number ,Special Symbol</p>
        </div>
        
        <div className="form-item box-item">
          <input type="password" name="password" id="pass2" placeholder="Confirm Password" />
          <i id="eye2" class="bi bi-eye"  onClick={showpass2}></i>
          <p id="p-no-match">Password Don't Match</p>
          <p id="p-match">Password Matched</p>

          </div>
          <div className="form-item box-item">
          <input type="text" name="phonenumber" id="phone" placeholder="Phone Number" data-password data-required />
        </div>
        <div className="form-item box-item">
          <div className="form-item-triple">
            <div className="radio-label"> 
              <label className="label">Gender</label>
            </div>
            <div className="form-item"> 
              <input id="Male" type="radio" name="gender" defaultValue="Male" data-once />
              <label className="rsize" htmlFor="Male">Male</label>
            </div>
            <div className="form-item"> 
              <input id="Female" type="radio" name="gender" defaultValue="Female" data-once />
              <label className="rsize" htmlFor="Female">Female</label>
            </div>
          </div>
          <small className="errorOnce"><i className="fa fa-asterisk" aria-hidden="true" /> choose at least one</small>
        </div>
        
        <div className="form-item box-item">
          <input type="text" name="address" placeholder="Address" data-required />
          <small className="errorReq"><i className="fa fa-asterisk" aria-hidden="true" /> required field</small>
        </div>
      
      
        <div className="form-item">
          <input type="submit" id="submit" className="submit" onClick={namesubmit} value="Submit" />
        </div>
      </form>
    </div>
    <div className="signupFooter">
      <p>Already have an account? <Link to="/login">Login here</Link></p>
    </div>
    <i className="wave" />
  </section>
</div>

            )
}

export default Signup
