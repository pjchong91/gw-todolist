import React, { Component } from 'react';
import TodoItem from './TodoItem';
class Todos extends Component {
   
    deleteTodo(id){
        this.props.onDelete(id)
    }

  render() {

    let todoItems;
    if (this.props.todo){
        todoItems = this.props.todos.map(todo => {
            // console.log(project);
            return (
            <TodoItem onDelete={this.deleteTodo.bind(this)} key={todo.title} todo ={todo} />
            );
        });

    //   console.log(this.props);
    }
    return (
      <div className="Todos"> 
      <h3> Latest Projects </h3>
      {/* you can only have one div at the top level. everything must fit inside this div */}

            {todoItems}
      </div>
    );
  }
}

export default Todos;
