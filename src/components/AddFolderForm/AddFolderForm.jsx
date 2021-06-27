import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import AppContext from "../AppContext";
import "./AddFolderForm.css";

class AddFolderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title:"",
    };
    
  }

  static contextType= AppContext
  
 addNewFolder(title){
  this.setState({ title })
 }

  handleSubmit(e){
    const { title } = this.state; 
    const newFolder = {
      name: title
    }
    
    e.preventDefault();
    fetch(
      `http://localhost:9090/folders`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newFolder)
      })
        .then(res=> {
            if(!res.ok){
                return res.json().then(error => {
                    console.log(error)
                })
            }
            return res.json()
        })
        .then(data =>{
            console.log(data)
            this.context.addFolder(data)
        })
        .catch((error) => {
          console.log({ error });
        })
    ;
  };
  render() {
    
    return (
      <form className="addFolderForm" onSubmit={(e) => this.handleSubmit(e)}>
        <div className="new_folder_name">
          <label>Enter Folder Name</label>
          <input type="text" name="newFolderName" id="newFolderName" onChange={(e)=> this.addNewFolder(e.target.value)}/>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default withRouter(AddFolderForm);