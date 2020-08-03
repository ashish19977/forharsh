import React, { useEffect } from 'react'
import Message from './message'
import '../App.css'

export default (props) => {

  useEffect(() => {
    let name = prompt('Please provide your name ...')
    if (name) {
      props.setUser(name)
    }
  }, [])

  if (props.messages.length === 0) {
    return (
      null
    )
  }
  return (
    <div className='messages-div'>
      {
        props.messages.map(doc =>
          <Message key={doc.key} message={doc.message} user={doc.name}/>
        )
      }
    </div>
  )
}
