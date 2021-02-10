import React from 'react'
import './App.css';
import Header from './Components/Header'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Error from './Components/Error'
import Contact from './Components/Contact'


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
    {/* <div className="end"></div>
        <GoogleLogin
            clientId="860940138744-moe9f340i2bmnt8gr768j55o4fegrs38.apps.googleusercontent.com"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy="single_host_origin"
          /> */}

    
    <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/" component={Signup} />
    
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/contact" component={Contact} />
    <Route path="*" component={Error} />
    </Switch>
    
    </div>
  );

  
}

export default App;
