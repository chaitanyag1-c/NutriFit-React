import React from 'react'
import '../App.css'
import logo from './icon.png'
import { Link } from "react-router-dom";

const Header = () => {
    window.onload =function() {
    const toggleBtn =document.querySelector('.sidebar-toggle');
const closeBtn =document.querySelector('.close-btn');
const sidebar =document.querySelector('.sidebar');

toggleBtn.addEventListener('click', function(){
   
    sidebar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', function(){
    sidebar.classList.remove('show-sidebar');
});
    
}
    return (
        <div>

            <header data-aos="fade-out" >
        <ul className="ulhead">
     

             <img src={logo} alt="img" style={{width:'12%'}}/> 
          
            <div className="nav-items" >
                <li > <Link to="/">  Home  </Link>   </li>
                <li> <Link to="/login">  Login  </Link></li>
                <li> <Link to="/signup">  Signup  </Link></li>
                <li> <Link to="/contact">  Contact  </Link></li>
            </div>
        </ul>
{/* Hamburger SideBAR */}
       <div>
  <button className="sidebar-toggle">
    <i className="fas fa-bars" />
  </button>
  <aside className="sidebar">
    <div className="sidebar-header">
      <img src={logo} className="logo" alt="" />
      <button className="close-btn">
        <i className="fas fa-times" />
      </button>
    </div>
    {/* links */}
    <ul className="links">
      <li>
        <a href="/">home</a>
      </li>
      <li>
        <a href="/login">login</a>
      </li>
      <li>
        <a href="/signup">Signup</a>
      </li>
      <li>
        <a href="/select">Select Meal</a>
      </li>
    </ul>
    {/* social media */}
    <ul className="social-icons">
      <li>
        <a href="https://www.twitter.com">
          <i className="fab fa-facebook" />
        </a>
      </li>
      <li>
        <a href="https://www.twitter.com">
          <i className="fab fa-twitter" />
        </a>
      </li>
     
      <li>
        <a href="https://www.twitter.com">
          <i className="fab fa-linkedin" />
        </a>
      </li>
     
    </ul>
  </aside>
</div>

       </header>
       
        </div>
    )
}

export default Header
