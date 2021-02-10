import React from 'react'
import '../App.css'
import logo from './navicon.png'
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div>

            <header data-aos="fade-out">
        <ul className="ulhead">
             <img src={logo} alt="img" style={{width:'10%'}}/> 
    
            <div className="nav-items">
                <li> <Link to="/">  Home  </Link>   </li>
                <li> <Link to="/login">  Login  </Link></li>
                <li> <Link to="/signup">  Signup  </Link></li>
                <li> <Link to="/contact">  Contact  </Link></li>
            </div>
        </ul>
       </header>
       
        </div>
    )
}

export default Header
