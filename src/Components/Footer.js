import React from 'react'
import facebook from './icons/fa-icon.png'
import ig from './icons/instagram-icon.png'
import li from './icons/linkedin-ICON.png'
import tw from './icons/twitter-ICON.png'
import './Footer.css'
const Footer = () => {
    return (
        <div>
             <footer>
        <div class="footer-subscribe" >
            <div class="subscribe-text">
            <h1>Subscribe to our Newsletter</h1>
        </div>
            <input type="text" /> <button id="footer-bt">GO</button>
        </div>
        <div className="footer-container"  data-aos="slide-left">
            <div className="contact">
                <h1 className="stay"> Contact Us </h1>
                <h1 className="stay2">
                Plot No. 91,  <br/>
                Scheme No. 53 Ratanlok Colony <br/>
                near BSNL Office, Vijay Nagar <br/>
                Indore 452011
                </h1>
            </div>

            <div className="menu">
                <h1 className="stay">Menu</h1>

                <a href="">Home </a>
                <a href="">About</a>
                <a href="">Contact</a>
                <a href="">More</a>
            </div>
            <div className="social">
                <h1 id="move-left" class="stay">Connect with Us</h1>
                <div class="Icons">
                    <div class="top-row">
                        <a href=""><img src={facebook} alt="" /></a>
                        <a href=""><img src={ig} alt="" /></a>
                    </div>
                    <div className="bottom-row">
                        <a href=""><img src={tw} alt=""/></a>
                        <a href=""><img src={li} alt=""/></a>
                    </div>
                </div>
            </div>
        </div>

        &#xa9; Technostrap Digital Pvt. Ltd.
    </footer>
        </div>
    )
}

export default Footer
 