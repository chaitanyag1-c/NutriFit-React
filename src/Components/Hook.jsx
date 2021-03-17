import React, { useState } from 'react'
import '../App.css'

const Hook = () => {
let date=new Date().toLocaleTimeString();
let tarik=new Date().toLocaleDateString();
let purple='#FFFFFF'

const [time, setime] = useState(date)
const [nayacolor,upcolor]=useState(purple);
let black="#FFFFF"
const [nayatcolor, setnayatcolor] = useState(black)

const changetime=()=>{
    date=new Date().toLocaleTimeString();
    
    setime(date);
let black='#000000'
    upcolor(black);
    let white="#FFFFFF"
        setnayatcolor(white)

}

// setInterval(changetime, 1000);
return (
    <div className="container" style={{backgroundColor: nayacolor }}>
    <h1 className="align-text text-align" style={{color:nayatcolor}}> {time}  {tarik}</h1>
    <button className="bt" onClick={changetime}> Click </button>
</div>

    
    );
}

export default Hook
