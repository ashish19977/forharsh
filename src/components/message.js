import React from 'react'
import '../App.css'

export default ({ message ,user}) => {
    return (
        <div className='message-div'>
            <p style={{textAlign:'center', margin:0,fontSize:'small' , color: '#e70f8e'}}>{user}</p>
            <p style={{textAlign:'center' , margin:0}}>{message}</p>
        </div>
    )
}