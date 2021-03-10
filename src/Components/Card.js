import React from 'react'
import './card.css'
const Card = () => {
    return (
        <div className="card-cont">
        <div className="artboard">
 <div className="card">

  <div className="card__side card__side--back">
   <div className="card__cover">
    <h4 className="card__heading">
    </h4>
   </div>
   <div className="card__details">
    <ul>
     <li>lorem ipsum dolor </li>
     <li>lorem ipsum dolor</li>
     <li>lorem ipsum dolor</li>
    </ul>
   </div>
   <button className="select-button" style={{marginLeft:'120px'}}>Select </button>
  </div>

  <div className="card__side card__side--front">
   <div className="card__theme">
    <div className="card__theme-box">
     <p className="card__subject" style={{background:'green'}}>Vegetarian Food</p>
     <p className="card__title"  style={{background:'green'}}>VEG SECTION</p>
    </div>
   </div>
  </div>

 </div>

 <div className="card">

  <div className="card__side card__side--back">
   <div className="card__cover1">
    <h4 className="card__heading">
    </h4>
   </div>
   <div className="card__details">
    <ul>
     <li>lorem ipsum dolor </li>
     <li>lorem ipsum dolor</li>
     <li>lorem ipsum dolor</li>
    </ul>
   </div>
   <button className="select-button">Select </button>
  </div>

  <div className="card__side card__side--front">
   <div className="card__theme">
    <div className="card__theme-box">
     <p className="card__subject">Non Vegetarian Food</p>
     <p className="card__title">NON VEG SECTION</p>
    </div>
   </div>
  </div>

 </div>


</div>
    </div>
    )
}

export default Card
