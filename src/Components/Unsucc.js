import React from 'react'
import '../App.css'
const Unsucc = () => {
    
     
function redirect(){
    window.location.assign("http://localhost:3000/signup");
}
    return (
       
        <div>
                <div className="container">
                <h2 className="text-align">Sorry, User with same email  already exists</h2>
                <h4 className="text-align">Click here to  signup  </h4>
                <button className="bt" onClick={redirect}> Signup </button>
                </div>
        </div>
    )
}

export default Unsucc
