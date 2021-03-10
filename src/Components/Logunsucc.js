import React from 'react'
import '../App.css'
const Logunsucc = () => {
    
     
function redirect(){
    window.location.assign("http://localhost:3000/login");
}
    return (
       
        <div>
                <div className="container">
                <h2 className="text-align">Sorry, you entered either wrong email or wrong password</h2>
                <h4 className="text-align">Click here to  login with valid credentials </h4>
                <button className="bt" onClick={redirect}> Login here </button>
                </div>
        </div>
    )
}

export default Logunsucc