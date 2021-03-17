import React from 'react'
import './Search.css'
import ReactDOM from 'react-dom'
let dhundo=document.getElementById('dhundo');
if(dhundo){
dhundo.addEventListener('input',function(e){
let inputVal=e.target.value.toLowerCase();
console.log(inputVal)
let Recipe = document.getElementsByClassName('Recipe');

Array.from(Recipe).forEach((element)=>{
let cardTxt = element.getElementsByTagName("h5")[0].innerText.toLowerCase();  

if(cardTxt.includes(inputVal)){
    element.style.display = "block";
}


else{
    element.style.display = "none";
    
}


})


});

}
const Search=()=>{
return(
    <>
    <div>

  <div className="fullsearchcontainer">
    <div className="innersearch">
      <input id="dhundo" type="text" name="search" placeholder="Search.." className="searchbar my-5 mr-auto" />
    </div>
  </div>  
  <div className="row container-fluid my-4 mx-5 ">
    <div className="card my-5 mx-3 Recipe" style={{width: '18rem'}}>
      <img src="https://images.unsplash.com/photo-1610635967007-34ebbd66f64d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1020&q=80" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Eggs</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Buy Now</a>
      </div>
    </div>
    <div className="card my-5 mx-3 Recipe" style={{width: '18rem'}}>
      <img src="https://images.unsplash.com/photo-1610635967007-34ebbd66f64d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1020&q=80" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Chicken as</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Buy Now</a>
      </div>
    </div>
    
    <div className="card my-5 mx-3 Recipe" style={{width: '18rem'}}>
      <img src="https://images.unsplash.com/photo-1610635967007-34ebbd66f64d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1020&q=80" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Chickpeas</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Buy Now</a>
      </div>
    </div>
    <div className="card my-5 mx-3 Recipe" style={{width: '18rem'}}>
      <img src="https://images.unsplash.com/photo-1610635967007-34ebbd66f64d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1020&q=80" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Sprouts</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Buy Now</a>
      </div>
    </div>
    <div className="card my-5 mx-3 Recipe" style={{width: '18rem'}}>
      <img src="https://images.unsplash.com/photo-1610635967007-34ebbd66f64d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1020&q=80" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Oats</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Buy Now</a>
      </div>
    </div>
    <div className="card my-5 mx-3 Recipe" style={{width: '18rem'}}>
      <img src="https://images.unsplash.com/photo-1610635967007-34ebbd66f64d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1020&q=80" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Rice</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Buy Now</a>
      </div>
    </div>
  </div>
</div>

    </>
)

}
export default Search