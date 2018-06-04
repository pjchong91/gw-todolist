import React, { Component } from 'react';

class TodoItem extends Component {

  render() {
    //   console.log(this.props);
    return (
      <li className="Todo"> 
      {/* you can only have one div at the top level. everything must fit inside this div */}
        <strong>{this.props.todo.title}</strong> 

      </li>
    );
  }
}

export default TodoItem;
