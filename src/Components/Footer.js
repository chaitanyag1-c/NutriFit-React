// import React from 'react'
// import facebook from './icons/fa-icon.png'
// import ig from './icons/instagram-icon.png'
// import li from './icons/linkedin-ICON.png'
// import tw from './icons/twitter-ICON.png'
// import './Footer.css'
// const Footer = () => {
//     return (
//         <div>
//              <footer>
//         <div class="footer-subscribe" >
//             <div class="subscribe-text">
//             <h1>Subscribe to our Newsletter</h1>
//         </div>
//             <input type="text" /> <button id="footer-bt">GO</button>
//         </div>
//         <div className="footer-container"  data-aos="slide-left">
//             <div className="contact">
//                 <h1 className="stay"> Contact Us </h1>
//                 <h1 className="stay2">
//                     Scheme no 54 <br/>
//                     Vijanagar <br/>
//                     Indore <br/>
//                     Madhya Pradesh
//                 </h1>
//             </div>

//             <div className="menu">
//                 <h1 className="stay">Menu</h1>

//                 <a href="">Home </a>
//                 <a href="">About</a>
//                 <a href="">Contact</a>
//                 <a href="">More</a>
//             </div>
//             <div className="social">
//                 <h1 id="move-left" class="stay">Connect with Us</h1>
//                 <div class="Icons">
//                     <div class="top-row">
//                         <a href=""><img src={facebook} alt="" /></a>
//                         <a href=""><img src={ig} alt="" /></a>
//                     </div>
//                     <div className="bottom-row">
//                         <a href=""><img src={tw} alt=""/></a>
//                         <a href=""><img src={li} alt=""/></a>
//                     </div>
//                 </div>
//             </div>
//         </div>

// Copyright Chiku
//     </footer>
//         </div>
//     )
// }

// export default Footer
import React from 'react'
import './Footer.css'
import logo from './navicon.png'
import emailjs from 'emailjs-com';

const Footer = () => {
  function sendEmail(e) {
    e.preventDefault();
  
    emailjs.sendForm('service_8o11so6', 'template_60f3jq9', e.target, 'user_L5WbOZGv8Ai94tr8CIHVj')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    }

    return (
      
            <footer id="dk-footer" className="dk-footer">
  <div className="fcontainer">
    <div className="row">
      <div className="col-md-12 col-lg-4">
        <div className="dk-footer-box-info">
          <a href="index.html" className="footer-logo">
            <img src={logo} alt="footer_logo" className="img-fluid" />
          </a>
          <p className="footer-info-text">
          An investment in knowledge pays the best interest
          We are determined to teach using the latest and enjoyable methods
          </p>
          <div className="footer-social-link">
            <h3>Follow us</h3>
            <ul>
              <li>
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-google-plus" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-linkedin" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
          {/* End Social link */}
        </div>
        {/* End Footer info */}
        <div className="footer-awarad">
          <img src="images/icon/best.png" alt="" />
        </div>
      </div>
      {/* End Col */}
      <div className="col-md-12 col-lg-8">
        <div className="row">
          <div className="col-md-6">
            <div className="contact-us">
              <div className="contact-icon">
                <i className="fa fa-map-o" aria-hidden="true" />
              </div>
              {/* End contact Icon */}
              <div className="contact-info">
                <h3>Indore India</h3>
                <p>Ratnalok Colony Near Bsnl Office</p>
              </div>
              {/* End Contact Info */}
            </div>
            {/* End Contact Us */}
          </div>
          {/* End Col */}
          <div className="col-md-6">
            <div className="contact-us contact-us-last">
              <div className="contact-icon">
                <i className="fa fa-volume-control-phone" aria-hidden="true" />
              </div>
              {/* End contact Icon */}
              <div className="contact-info">
                <h3>9479958843</h3>
                <p>Give us a call</p>
              </div>
              {/* End Contact Info */}
            </div>
            {/* End Contact Us */}
          </div>
          {/* End Col */}
        </div>
        {/* End Contact Row */}
        <div className="row">
          <div className="col-md-12 col-lg-6">
            <div className="footer-widget footer-left-widget">
              <div className="section-heading">
                <h3>Useful Links</h3>
                <span className="animate-border border-black" />
              </div>
              <ul>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Home</a>
                </li>
              </ul>
              
            </div>
            {/* End Footer Widget */}
          </div>
          {/* End col */}
          <div className="col-md-12 col-lg-6">
            <div className="footer-widget">
              <div className="section-heading">
                <h3>Subscribe</h3>
                <span className="animate-border border-black" />
              </div>
              <p>{/* Don’t miss to subscribe to our new feeds, kindly fill the form below. */}
               Subscribe to our Newsletter . Stay connected with us.</p>
              <form action={sendEmail}>
                <div className="form-row">
                  <div className="col dk-footer-form">
                    <input type="email" className="form-control" placeholder="Email Address" />
                    <button type="submit">
                      <i className="fa fa-send" />
                    </button>
                  </div>
                </div>
              </form>
              {/* End form */}
            </div>
            {/* End footer widget */}
          </div>
          {/* End Col */}
        </div>
        {/* End Row */}
      </div>
      {/* End Col */}
    </div>
    {/* End Widget Row */}
  </div>
  {/* End Contact Container */}
  <div className="copyright">
    <div className="fcontainer">
      <div className="row">
        <div className="col-md-6">
          <span>Copyright © 2019, All Right Reserved Creators Academy</span>
          <br/>
          <span>Design and Coded by <a href="https://www.linkedin.com/in/chaitanya-galande-96a491134/" className="credits"> Chaitanya Galande</a></span>
          

        </div>
        {/* End Col */}
        
        {/* End col */}
      </div>
      {/* End Row */}
    </div>
    {/* End Copyright Container */}
  </div>
  {/* End Copyright */}
  {/* Back to top */}
  <a href="#ab">
  <div id="back-to-top" className="back-to-top">
    <button className="btn btn-dark" title="Back to Top" style={{display: 'block'}}>
      <i className="fa fa-angle-up" />
    </button>
  </div>
  </a>
  {/* End Back to top */}
</footer>

       
    )
}

export default Footer
