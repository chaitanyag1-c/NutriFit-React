import React from 'react'
import '../App.css'

// window.onload= function(){
//     let input1 = document.getElementById('input1');
//     let nice = document.getElementById('nice');
//     let nice2 = document.getElementById('nice2');
    
    
//     input1.addEventListener('input', function (e) {
//         // console.log(e.target.value)
//         var rex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    
    
//         let inputvalue = e.target.value;
    
//         let chiku = rex.test(inputvalue);
//         console.log(chiku);
//         if (chiku == true) {
    
    
    
//             nice.classList.add('nonedisplay');
//             console.log(nice2);
//             nice2.classList.add('gooddisplay');
//             nice2.classList.remove('vg');
    
//         }
        

//         else {
//             nice.classList.remove('nonedisplay');
//             nice2.classList.remove('gooddisplay');
//             nice2.classList.add('vg');
    
//         }
    
//     });

//     var myInput = document.getElementById("psw");
//     var letter = document.getElementById("letter");
//     var capital = document.getElementById("capital");
//     var number = document.getElementById("number");
//     var length = document.getElementById("length");
    
//     // When the user clicks on the password field, show the message box
//     myInput.onfocus = function () {
//         document.getElementById("message").style.display = "block";
//     }
    
//     // When the user clicks outside of the password field, hide the message box
//     myInput.onblur = function () {
//         document.getElementById("message").style.display = "none";
//     }
    
//     // When the user starts to type something inside the password field
//     myInput.onkeyup = function () {
//         // Validate lowercase letters
//         var lowerCaseLetters = /[a-z]/g;
//         if (myInput.value.match(lowerCaseLetters)) {
//             letter.classList.remove("invalid");
//             letter.classList.add("valid");
//         } else {
//             letter.classList.remove("valid");
//             letter.classList.add("invalid");
//         }
    
//         // Validate capital letters
//         var upperCaseLetters = /[A-Z]/g;
//         if (myInput.value.match(upperCaseLetters)) {
//             capital.classList.remove("invalid");
//             capital.classList.add("valid");
//         } else {
//             capital.classList.remove("valid");
//             capital.classList.add("invalid");
//         }
    
//         // Validate numbers
//         var numbers = /[0-9]/g;
//         if (myInput.value.match(numbers)) {
//             number.classList.remove("invalid");
//             number.classList.add("valid");
//         } else {
//             number.classList.remove("valid");
//             number.classList.add("invalid");
//         }
    
//         // Validate length
//         if (myInput.value.length >= 8) {
//             length.classList.remove("invalid");
//             length.classList.add("valid");
//         } else {
//             length.classList.remove("valid");
//             length.classList.add("invalid");
//         }
//     }
       
//   }








const Signup = () => {
    return (

        <div className="container">
            <form action="" className="form">
                <h2 className="text-align">Signup</h2>
                <input type="text" placeholder="Enter your name" autoComplete="off" required /> <br />
                <input type="number" placeholder="Enter AGE" required /> <br />

                <input type="text"  placeholder="E-mail" id="input1"   required></input> <br />
                <p id="nice">Invalid Email</p>
                <p id="nice2" className="vg">It's a Valid Email</p>

                    <span style={{ fontSize: '16px', color: 'grey',marginLeft: '24px' }}><label for="psw">Password </label></span> <br />

                <input type="password"  id="psw" name="psw" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required autoComplete="off" />

                    <div id="message">
                        <h3>Password must contain the following:</h3>
                        <p id="letter" class="invalid">A <b>lowercase</b> letter</p>
                        <p id="capital" class="invalid">A <b>capital (uppercase)</b> letter</p>
                        <p id="number" class="invalid">A <b>number</b></p>
                        <p id="length" class="invalid">Minimum <b>8 characters</b></p>
                    </div>



                    <br/>



                    <span style={{ fontSize: '16px', color: 'grey',marginLeft: '24px' }}>GENDER</span> <br />

                    <input type="radio" value="Male" name="common" />
                    <label for="Male">Male</label>
                    <br />
                    <input type="radio" value="NaMale" name="common" />
                    <label for="NaMale">Female</label>
                    <br />
                    <br/>            
                    <span style={{ fontSize: '16px', color: 'grey',marginLeft: '24px' }}>Location</span> <br />
        <br/>
                    <select>
                        <option>Indore</option>
                        <option>Ujjain</option>
                    </select> <br />
                    
                    <input type="submit" className="bt" onSubmit="dada()" />
        </form>
    </div>
            )
}

export default Signup
