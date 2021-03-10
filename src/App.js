import React from 'react'
import './App.css';
import Header from './Components/Header'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Error from './Components/Error'
import Contact from './Components/Contact'
import Health from './Components/Health'
import Otp from './Components/Otp'
import Select from './Components/Select'

import Succ from './Components/Succ'
import Card from './Components/Card'
import Unsucc from './Components/Unsucc'
import Logunsucc from './Components/Logunsucc'


import {Route, Switch} from "react-router-dom";
// import GoogleLogin from 'react-google-login'

// let responseGoogle = (response) => {
//     console.log(response);
//     console.log(response.profileObj);
//     let datafromgoogle = response.profileObj.name;
//     let datafromgoogle1 = response.profileObj.email;
//     document.write(`${datafromgoogle} <br> Hello ${response.profileObj.name}`)
//     let end1 = document.getElementsByClassName('end');

//     let html = `
//     <h1>Hello ${datafromgoogle} </h1>
//     <h1>Your email is ${datafromgoogle1} </h1>

//     `
//     for (var i = 0; i < end1.length; i++) {
//       end1[i].innerHTML = html;
//     }
//     console.log(end1);
//   }


function App() {
  return (
    <div>
    <Header/>
    <Switch>
    <Route exact path="/login" component={Signup} />
    <Route exact path="/" component={Health} />
    
    <Route exact path="/signup" component={Login} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/OTP" component={Otp} />
    
    <Route exact path="/Select" component={Select} />
    <Route exact path="/Succ" component={Succ} />
    <Route exact path="/Unsucc" component={Unsucc} />
    <Route exact path="/Logunsucc" component={Logunsucc} />
    <Route exact path="/Card" component={Card} />

    <Route path="*" component={Error} />

    
    </Switch>
    
    
    </div>
  );

  
}

export default App;
