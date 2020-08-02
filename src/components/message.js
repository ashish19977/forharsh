import React from 'react'
import '../App.css'

export default ({ doc ,user }) => {
    return (
        <div className='message-div'>
            <p style={{textAlign:'center', margin:0,fontSize:'small' , color: '#e70f8e'}}>{doc.name}</p>
            <p style={{textAlign:'center' , margin:0}}>{doc.message}</p>
        </div>
    )
}