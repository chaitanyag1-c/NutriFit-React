import React from 'react'
import '../App.css'
const Succ = () => {
    
     
function redirect(){
    window.location.assign("http://localhost:3000/login");
}
    return (
       
        <div>
                <div className="container">
                <h2 className="text-align">Your account has been successfully created </h2>
                <h4 className="text-align">Click here to login  </h4>
                <button className="bt" onClick={redirect}> Login here </button>
                </div>
        </div>
    )
}

export default Succ
