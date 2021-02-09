import React from 'react'
import erimg from './404.jpg'
const Error = () => {
    return (
        <div className="container">
          
            <h1 className="text-align">ERROR 404 NOT FOUND</h1>
            <img src={erimg} style={{width:'100%'}} />
        </div>
    )
}

export default Error
