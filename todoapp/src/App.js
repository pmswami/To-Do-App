// function App() {
//   return <div className="App"></div>;
// }

// export default App;

import React, { Component } from "react";
import Todos from "./Todos";
import AddTodo from "./AddForm";

export class App extends Component {
  state = {
    todos: [
      { id: 1, content: "buy some milk" },
      { id: 2, content: "play mario kart" },
    ],
  };
  deleteTodo = (id) => {
    console.log(id);
    const todosList = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos: todosList });
  };
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({ todos: todos });
  };
  render() {
    return (
      <div className="tot-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
