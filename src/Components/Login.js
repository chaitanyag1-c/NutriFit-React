import React, { Component } from 'react'
import './signup.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Login= ()=> {
    function watch(){
        let password=document.getElementById('password');
        

        if(password.type=='text')
        {
            password.type='password';
        }
        else{
            password.type='text';
        }
    }
    function passwordcheck(){
let pass=document.getElementById('pass').value;
let pass1=document.getElementById('pass1').value;
console.log(pass);
if(pass!=pass1)
{
    toast("Password alag hai");

}
    }
        return (
            <section>
            <div className="container active">
                 <div className="user signupBx">
                <div className="formBx">
                  <form>
                    <h2>Create an account</h2>
                    <input type="text" name placeholder="Username" />
                    <input type="email" name placeholder="Email Address" />
                    <input type="password" id="pass" name placeholder="Create Password" />
                    <input type="password" id="pass1" name placeholder="Confirm Password" />
                    <div>
  <label className="sr-only" htmlFor="password">Password</label>
  <div className="input-group mb-2 mr-sm-2">
    <div className="input-group-prepend">
      <div className="input-group-text"><i className="fas fa-eye-slash" id="eye" onClick={watch} /></div>
    </div>
    <input type="password" className="form-control" id="password" placeholder="Type Your Password" />
  </div>
</div>

                    <input type="submit"  onClick={passwordcheck} />
                    <p className="signup">
                      Already have an account ?
                      <a href="/signup">Sign in.</a>
                    </p>
                  </form>
                </div>
                <div className="imgBx"><img src="https://i1.wp.com/www.eatthis.com/wp-content/uploads/2019/08/cheap-chickpea-bean-southwest-chili.jpg?fit=1200%2C879&ssl=1" alt="" /></div>
              </div>
            </div>
            </section>
        )
    }


export default Login
