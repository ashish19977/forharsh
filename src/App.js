import React from 'react'
import './App.css'
import Header from './components/header'
import Messages from './components/messages'
import SendMessage from './components/sendMessage'
import firebase from './firebase/index'
import * as fb from 'firebase'

class App extends React.Component {
  state = {
    user: 'Random User',
    messages: [],
  }

  componentDidMount() {
    let date = Date.now()/1000
    let db = firebase.firestore()
    db.collection('messages').orderBy('time_stamp', 'desc').onSnapshot(snapshot => {
      let messages = snapshot.docs.map(doc => {
        const data = doc.data()
        if (data.time_stamp && data.time_stamp.seconds >= date) {
          return({key:doc.id ,message:data.message,name:data.name})
        }
      }).filter(doc=>doc)
      this.setState({ messages })
    })
  }

  setUser = user => this.setState({ user })

  render() {
    return (
      <>
        <Header title='Messenger Chat' />
        <Messages setUser={this.setUser} messages={this.state.messages} user={this.state.user}/>
        <SendMessage user={this.state.user}/>
      </>
    )
  }
}
export default App
