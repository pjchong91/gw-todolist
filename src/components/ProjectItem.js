import React, { Component } from 'react';

class ProjectItem extends Component {
    deleteProject(id){
        this.props.onDelete(id)
    }
  render() {
    //   console.log(this.props);
    return (
      <li className="Projects"> 
      {/* you can only have one div at the top level. everything must fit inside this div */}
        <strong>{this.props.project.title}</strong>: {this.props.project.category} <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a>

      </li>
    );
  }
}

export default ProjectItem;
