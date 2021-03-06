import React, { Component } from 'react';
import uuid from 'uuid'; 
import ProjectItem from './ProjectItem';

class AddProject extends Component {
    constructor(){
        super();
        this.state = {
            newProject:{}
        }
    }

   static defaultProps = {
       categories: ['Hobby App','App Dev Prework']
   }
   
   handleSubmit(e){
    if(this.refs.title.value === ""){
        alert('Title is required')
    } else{
        this.setState({newProject:{
            id: uuid.v4(),
            title: this.refs.title.value,
            category: this.refs.category.value
        }}, function(){
            this.props.addProject(this.state.newProject);
        })
    }
        e.preventDefault();
        
   }

  render() {
      let categoryOptions = this.props.categories.map(category => {
          return <option key={category} value={category}>{category}</option>
      })
    return (
      <div> 
      {/* you can only have one div at the top level. everything must fit inside this div */}

            <h3>Add Project</h3>
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div>
                    <label>Title</label> <br />
                    <input type="text" ref="title" /> 
                </div>
                <div>
                    <label>Category</label><br />
                    <select ref="category">
                    {categoryOptions}
                    </select>
                </div>
                <input type="submit" value="submit" />
            </form>
            <br />
      </div>
    );
  }
}

export default AddProject;
