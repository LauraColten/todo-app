import React, { Component } from 'react';
import Button from '@material-ui/core/Button';


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
  delete = index => {
    this.setState({
      todos: [...this.state.todos.slice(0, index), ...this.state.todos.slice(index + 1)]
    })
  }
 
  render() {
    const todos = this.state.todos.map((todo, index) => {
      return (<li key={index}>{todo}<Button onClick={() => this.delete(index)}>x</Button></li>)
    })
    return (
      <div className="App">
        <header className="App-header">
          <ul>
            {todos}
         </ul>
          <form onSubmit={this.onSubmit}>
            <input value={this.state.newtodo} onChange={this.onChange}/>
            <Button type="submit" color="primary">Submit</Button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;

