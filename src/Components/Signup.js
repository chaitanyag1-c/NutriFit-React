import React, { Component } from 'react'
import './signup.css'
export default class Signup extends Component {
    

    render() {
     
        
        return (
            <section className="login-container">
            <div className="container">
              <div className="user signinBx">
                <div className="imgBx"><img src="https://i1.wp.com/www.eatthis.com/wp-content/uploads/2019/08/cheap-chickpea-bean-southwest-chili.jpg?fit=1200%2C879&ssl=1" alt="" /></div>
                <div className="formBx">
                  <form>
                    <h2>Sign In</h2>
                    <input type="text" name placeholder="Username" />
                    <input type="password" name placeholder="Password" />
                    <input type="submit" name defaultValue="Login" />
                    <p className="signup">
                      Don't have an account ?
                      <a  href="/login">Sign Up.</a>
                    </p>
                  </form>
                </div>
              </div>
             
            </div>
          </section>
          
        )
    }
   
}
