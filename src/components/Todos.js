import React, { Component } from 'react';
import TodoItem from './TodoItem';
class Todos extends Component {
   

  render() {

    let todoItems;
    if (this.props.todos){
        todoItems = this.props.todos.map(todo => {
            // console.log(todo);
            return (
            <TodoItem key={todo.title} todo ={todo} />
            );
        });

    //   console.log(this.props);
    }
    return (
      <div className="Todos"> 
      <h3>Todo List</h3>
      {/* you can only have one div at the top level. everything must fit inside this div */}

            {todoItems}
      </div>
    );
  }
}

export default Todos;
