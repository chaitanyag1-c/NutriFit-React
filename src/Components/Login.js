import React from 'react'
import '../App.css'
import { ToastContainer, toast } from 'react-toastify';
import {Link} from 'react-router-dom'
  import 'react-toastify/dist/ReactToastify.css';
// responseGoogle = (response) => {
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


const Login = () => {
    const notify = () => toast.success('🦄 Successfull Login !', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
       

    return (
<>
<div className="row1" id="loginformcontainer">
  <section className="section">
  <div className="signupHeader">
            <h3>Login</h3>
            <h4>Already a member please Login</h4>
          </div>
    <div className="signupmain">
      <form>
        
        <div className="form-item box-item">
          <input type="email" autoComplete="off" name="email" id="email1" placeholder="Email" data-email data-required />
          <p id="emailPattern">Please Enter Valid E-mail</p>
          
        </div>
        <div className="form-item box-item">
          <input type="password" name="password" id="pass1" placeholder="Password" data-password data-required />
          <p id="passwordPattern">Use Upper Case & Lower Case ,Number ,Special Symbol</p>
          <i id="eye2" class="bi bi-eye" ></i>
        </div>
        
      
      
        <div className="form-item">
          <input type="submit" id="submit" onClick={notify} className="submit"  value="Login" />
        </div>
      </form>
    </div>
    <div className="signupFooter">
      <p>New Here <Link to="/signup" href="/signup">Signup here</Link></p>
    </div>
    <i className="wave" />
  </section>
</div>        
        <ToastContainer/>
  </>     
    )
}

export default Login
