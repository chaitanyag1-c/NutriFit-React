import React from 'react'
import '../App.css'
import mic from './mic.png'
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
    
        window.onload = function ()
        {
            const btn = document.getElementById('bt1');
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            const recognition = new SpeechRecognition();
            const kaka=document.getElementById('kaka');
            // console.log(kaka.value);
            // const greeting = ['I am good you little piece of shit', 'I think you should study instead of asking me', 'I am sexy what about you'];
            btn.addEventListener('click',()=>{
                recognition.start();

            })
    
    recognition.onstart = function() {
        console.log('Bolo Bhai');
    };
    
    recognition.onresult = function (event) {
        const current = event.resultIndex;
        const transcript = event.results[current][0].transcript;
        kaka.value = transcript;
        talkout(transcript);
    };
    
    
    
    
    
    
    function talkout(message) {
        const speech = new SpeechSynthesisUtterance();
        speech.rate = 1.3;
        
        speech.volume = 1;
        speech.pitch = 1;
        speech.text =message;
    
        // if (message.includes('how are you')) {
        //     const how = greeting[Math.floor(Math.random() * greeting.length)];
        //     speech.text = how;
        // }
    
        // content1.textContent=transcript;
        window.speechSynthesis.speak(speech);
    }
    }

    return (

            <div className="container" data-aos="fade-out">
            <a id="bt1"> <img src={mic} /> </a> 
            <form action="" className="form">
                <h2 className="text-align">Login</h2>
                <input type="text" id="kaka" placeholder="Enter your Username" autoComplete="off" required /><br />
                <input type="password" placeholder="Enter Password" autoComplete="off" required /> <br />
                <input type="submit" className="bt"  value="Login"/>
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
