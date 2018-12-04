import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    todos: [],
    newtodo: ""
  }
  onChange = e => {
    this.setState({newtodo: e.target.value})
  }
  onSubmit = e => {
    e.preventDefault()
    this.setState({
      todos: [...this.state.todos, this.state.newtodo],
      newtodo: ""
    })
  }
  delete = e => {
    this.setState({
      todos: [...this.state.todos.slice(0, e.target.value), ...this.state.todos.slice(e.target.value + 1)]
    })
  }
  render() {
    const todos = this.state.todos.map((todo, index) => {
      return (<li key={index}>{todo}<button value={index} onClick={this.delete}>x</button></li>)
    })
    return (
      <div className="App">
        <header className="App-header">
          <ul>
            {todos}
         </ul>
          <form onSubmit={this.onSubmit}>
            <input value={this.state.newtodo} onChange={this.onChange}/>
            <button type="submit">Submit</button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
