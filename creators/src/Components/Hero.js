import React from 'react'
import '../App.css'
import bg from './5251.jpg'

const Hero = () => {
    return (
        <div>
          <section className="hero">
        <div className="hero-text" data-aos="slide-left">
            <h1>Creators Academy</h1>
            <h2>Changing the way of learning..</h2>
        </div>
    </section>
    <div className="bg" data-aos="fade-in">
        <img src={bg} alt="img" />
    </div>  
        </div>
    )
}

export default Hero
