import React from 'react'
import '../App.css'

export default class Todo extends React.Component {
  constructor() {
    super()
    console.log(this.props)
  }
  render() {
    return (
      <div className='todo-main'>
        {this.props.todos.map(item => (
          <div className='todo' key={item.key}>
            {item.text}
            <span role='img' aria-label={'this'} onClick={() => this.props.removeTodo(item.key)}>
              &#10060;
            </span>
          </div>
        ))}
      </div>
    )
  }
}
