import React from 'react'
import './Health.css'
import './hero.css'
import h1 from './healthy-means1.png'
import h2 from './healthy-means2.png'
import h3 from './healthy-means3.png'
import Footer from './Footer'
function redirect(){
    window.location.assign("http://localhost:3000/signup");
}
const Health = () => {
    return (
        <div>

            <div className="hero-container" data-aos="fade-right">
                <div className="hero-text" data-aos="fade-out">
                    <h1 className="hero-heading">The daily nutriton</h1>
                    <br />
                    <h2 className="hero-slogan">Eat healthy  <span class="highlight"> EVERYDAY</span>  </h2>
                </div>
                <button type="button" onClick = {redirect} data-aos="fade-right" class="rounded-pill btn-responsive font-weight-bold btn btn-primary" style={{ position: 'absolute', top: '400px', right: '296px' }}>Sign Up For Free</button>
            </div>
            <section className="landing-meals-week" >

            </section>

            <section>
                <div className="container1">
                    <div className="pb-5 row" data-aos="fade-in">
                        <div className="mx-auto col-md-7">
                            <h2 className="h1 mb-4 text-center">What Does <span className="highlight">Healthy</span><br />Even Mean?
        </h2>
                            <p className="text-justify">At Healthy Meal Plans, we understand that "healthy" actually means
                            something different to everyone. So we've worked tirelessly to ensure that this site offers
          options no matter what your taste, cooking experience, or dietary preferences are.</p>
                        </div>
                    </div>
                    <div className="pb-5 justify-content-center row" data-aos="fade-in">
                        <div className="mb-4 col-sm-6 col-lg-4">
                            <h3 className="text-center text-sm-left mb-4">Healthy Means <br className="d-none d-md-block" /><span
                                className="highlight">Satisfying</span></h3>
                            <p className="text-justify">Our recipes are loaded with nutrients, fiber, and protein. They're
          designed to help you feel nourished and satiated. We believe that this is the <span
                                    className="highlight">real secret to eating well</span>.</p>
                        </div>
                        <div className="text-center col-sm-6 order-sm-first col-lg-5 order-lg-first" data-aos="fade-right">
                            <img
                                src={h1} alt="dada" />

                        </div>
                    </div>
                    <div className="pb-5 justify-content-center row" data-aos="fade-in">
                        <div className="mb-4 col-sm-6 col-lg-4">
                            <h3 className="text-center text-sm-left mb-4">Healthy Means <br className="d-none d-md-block" /><span
                                className="highlight">Real Food</span></h3>
                            <p className="text-justify">Our recipes feature ntritious, whole food ingredients that you can feel
          good about and that can easily be found <span className="highlight">at your local
            supermarket</span>.</p>
                        </div>
                        <div className="text-center col-sm-6 order-sm-last col-lg-5 order-lg-last" data-aos="fade-left"><img
                            src={h2} alt="dada" />
                        </div>
                    </div>
                    <div className="pb-5 justify-content-center row">
                        <div className="mb-4 col-sm-6 col-lg-4" data-aos="fade-in">
                            <h3 className="text-center text-sm-left mb-4">Healthy Means <br className="d-none d-md-block" /><span
                                className="highlight">Cooking at Home</span></h3>
                            <p className="text-justify">We believe that the first step to <span className="highlight">healthy
            eating</span> begins simply with cooking at home. Knowing what goes into your food is the best
          way to get the most out of it.</p>
                        </div>
                        <div className="text-center col-sm-6 order-sm-first col-lg-5 order-lg-first" data-aos="fade-right"><img
                            src={h3}
                            alt="dada" /></div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container1">
                    <div className="pb-6 row">
                        <div className="text-center col">
                            <h2 className="h1 mb-5">Get Started Today</h2><button type="button" onClick = {redirect}
                                className="rounded-pill btn-responsive font-weight-bold btn btn-primary" >Sign Up For Free</button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />   
        </div>
        
    
  


    )
}

export default Health
