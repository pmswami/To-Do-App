import React from "react";

function Todos({ todos, deleteTodo }) {
  const todoList = todos.length ? (
    todos.map((todo) => (
      <div className="collection-item" key={todo.id}>
        <span onClick={() => deleteTodo(todo.id)}>{todo.content}</span>
      </div>
    ))
  ) : (
    <p className="center">You have no Todos Left Yay!</p>
  );
  return <div className="todos collection">{todoList}</div>;
}

export default Todos;
