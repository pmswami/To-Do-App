import React, { Component } from "react";

export class AddTodo extends Component {
  state = {
    content: "",
  };
  handleChange = (e) => {
    this.setState({ content: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.addTodo(this.state);
    this.setState({ content: "" });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add New Todo: </label>
          <input
            type="text"
            value={this.state.content}
            onChange={this.handleChange}
          />
          <label>Click Enter to add new Todo </label>
        </form>
      </div>
    );
  }
}

export default AddTodo;
