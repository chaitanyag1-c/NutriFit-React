import React from 'react'
import './Header.css'
import logo from './navicon.png'
import { Link } from "react-router-dom";


let namefromLogin;
let details,cp,youraccount,logout;
if(localStorage.getItem('localuser')==null)
{
  namefromLogin='SignIn or SignUp'
  details='Sign Up'
  cp='Sign In'
  youraccount=''
  logout=''

}
else{
namefromLogin=localStorage.getItem('localuser');

details=`Hey ${namefromLogin}`
cp='Change Password'
youraccount='Your Account'
logout='Logout'
}

const Header = () => {
 

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav  mr-auto">
      <li className="nav-item active">
        <Link to="/"   className="nav-link" >Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link to="/signup" className="nav-link" >Order Now</Link>
      </li>
      <li className="nav-item">
        <Link to="/signup" className="nav-link" >About us</Link>
      </li>
      <li className="nav-item">
        <Link to="/signup" className="nav-link" >Contact Us</Link>
      </li>

     
      </ul>
      <ul className="navbar-nav  ml-auto mx-5">
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {namefromLogin}
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">{details}</a>
          <a className="dropdown-item" href="#">{cp}</a>
          <div className="dropdown-divider" />
          <a className="dropdown-item" href="#">{youraccount}</a>
          <button className="dropdown-item" >{logout}</button>
        </div>
      </li>
    </ul>
  
   
  </div>
</nav>

     
    
    

    )
}

export default Header
