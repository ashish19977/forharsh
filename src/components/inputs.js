import React from 'react'
import '../App.css'

class Input extends React.Component {
  state = {}

  handleInput = e => {
    this.setState({ input: e.target.value })
  }

  render() {
    return (
      <div className='input-div'>
        <input
          onChange={e => this.handleInput(e)}
          style={{ width: '50%', padding: 5, marginRight: 10 }}
          placeholder='Enter Todo here ...'
        />
        <button
          onClick={() => this.props.handleClick(this.state.input)}
          style={{ padding: 5, backgroundColor: '#aed6f1', color: '#2874a6', border: 'none' }}
        >
          Add Todo
        </button>
      </div>
    )
  }
}

export default Input
