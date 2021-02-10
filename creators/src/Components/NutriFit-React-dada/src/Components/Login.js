import React from 'react'
import '../App.css'
import GoogleLogin from 'react-google-login'

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
    return (

            <div className="container">
            <form action="" className="form">
                <h2 className="text-align">Login</h2>
                <input type="text" placeholder="Enter your name" autoComplete="off" required /> <br />
                <input type="password" placeholder="Enter Password" autoComplete="off" required /> <br />
                <input type="submit" className="bt" value="Login"/>
        </form>
        {/* <div className="end"></div>
        <GoogleLogin
            clientId="860940138744-moe9f340i2bmnt8gr768j55o4fegrs38.apps.googleusercontent.com"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy="single_host_origin"
          /> */}

        </div>
    )
}
          
export default Login
