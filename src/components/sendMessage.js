import React, { useState } from 'react'
import '../App.css'
import { TextField } from '@material-ui/core'
import SendRoundedIcon from '@material-ui/icons/SendRounded'
import firebase from '../firebase/index'
import * as fb from 'firebase'

export default (props) => {

  const [input, setInput] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    let db = firebase.firestore()
    db.collection('messages').add({
      name: props.user,
      message: input,
      time_stamp: fb.firestore.FieldValue.serverTimestamp()
    }).then(docRef => {
       console.log(docRef)
     }).catch(e=>console.log(e))
  }

  return (
    <div className='send-message-div'>
      <form style={{ flex: 1, display:'flex', justifyContent: 'center'}} onSubmit = { e => handleSubmit(e) } >
        <TextField id="input" label="Message here ..." style={{ width: '80%' }} onChange = { e => setInput(e.target.value)}/>
        <SendRoundedIcon fontSize='large' color='primary' className='send-btn'/>
      </form>
    </div>
  )
}

