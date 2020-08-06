import React, { useState, useRef } from 'react'
import '../App.css'
import { TextField, Button } from '@material-ui/core'
import SendRoundedIcon from '@material-ui/icons/SendRounded'
import firebase from '../firebase/index'
import * as fb from 'firebase'

export default (props) => {

  const [input, setInput] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (input.trim() === '')
      return
    let db = firebase.firestore()
    db.collection('messages').add({
      name: props.user,
      message: input,
      time_stamp: fb.firestore.FieldValue.serverTimestamp()
    }).then(docRef => {
      setInput('')
     }).catch(e=>console.log(e))
  }

  return (
    <div className='send-message-div'>
      <form style={{ flex:1,display:'flex', justifyContent: 'center'}} onSubmit = { e => handleSubmit(e) } >
        <TextField autoFocus value={input} id="input" label="Message" style={{ width: '80%' }} onChange = { e => setInput(e.target.value)}/>
        <Button type='submit' style={{marginLeft:'5px'}}>
          <SendRoundedIcon fontSize='large' color='primary'/>
        </Button>
      </form>
    </div>
  )
}

