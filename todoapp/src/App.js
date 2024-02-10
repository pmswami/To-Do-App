// function App() {
//   return <div className="App"></div>;
// }

// export default App;

import React, { Component } from "react";
import Todos from "./Todos";

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
  render() {
    return (
      <div className="tot-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
