import React, { Component } from 'react';
import $ from 'jquery';
import uuid from 'uuid';
import Projects from './components/projects';
import AddProject from './components/AddProject';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: [],
      todos: []
    }
  }

  getTodos(){
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({todos: data}, function(){
          console.log(this.state);
        })
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    })

  }

  getProjects(){
    this.setState({projects:[
      {
        id: uuid.v4(),
        title: 'React To Do List',
        category: 'Hobby App'
      },
      {
        id: uuid.v4(),
        title: 'Girlfriend Points',
        category: 'Hobby App'
      },
      {
        id: uuid.v4(),
        title: '3 Question Quiz',
        category: 'App Dev Prework'
      }
    ]})
  }

  componentWillMount(){
//this is a life-cycle method

    this.getProjects();
    this.getTodos();



  }

  componentDidMount(){
    //another life-cycle function
    this.getTodos();
  }

  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects:projects})
  }


  render() {
    return (
      <div className="App"> 
      {/* you can only have one div at the top level. everything must fit inside this div */}

        <h1> To-Do List </h1>
        <AddProject addProject={this.handleAddProject.bind(this)}/>
          <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
      </div>
    );
  }
}

export default App;
