import React from 'react'
import './App.css';
import Header from './Components/Header'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Error from './Components/Error'
import {Route, Switch} from "react-router-dom";


function App() {
  return (
    <div>
    <Header/>
    <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/" component={Signup} />
    
    <Route exact path="/signup" component={Signup} />
    <Route path="*" component={Error} />
    </Switch>
    </div>
  );

  
}

export default App;
