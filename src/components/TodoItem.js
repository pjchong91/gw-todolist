import React, { Component } from 'react';

class TodoItem extends Component {
    deleteTodo(id){
        this.props.onDelete(id)
    }
  render() {
    //   console.log(this.props);
    return (
      <li className="Todos"> 
      {/* you can only have one div at the top level. everything must fit inside this div */}
        <strong>{this.props.todo.title}</strong>: {this.props.todo.category} <a href="#" onClick={this.deleteTodo.bind(this, this.props.todo.id)}>X</a>

      </li>
    );
  }
}

export default TodoItem;
