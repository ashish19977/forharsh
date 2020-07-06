import React from 'react'
import './App.css'
import Header from './components/header'
import Input from './components/inputs'
import Todo from './components/todos'

class App extends React.Component {
  state = {
    todos: [],
  }

  handleClick = input => {
    const todo = {
      key: Date.now().toString(),
      text: input,
    }
    this.setState({ todos: [...this.state.todos, todo] })
  }

  removeTodo = key => {
    this.setState({ todos: this.state.todos.filter(todo => todo.key !== key) })
  }

  render() {
    return (
      <div className='main-div'>
        <Header title='Todo Application' />
        <Input handleClick={this.handleClick} />
        <Todo todos={this.state.todos} removeTodo={this.removeTodo} />
      </div>
    )
  }
}
export default App
