import React, { Component } from "react";
import AppContext from "../AppContext";
import ValidationError from "../ValidationError/ValidationError";
import "./AddFolderForm.css";

class AddFolderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      touched: false,
    };
  }
  static contextType = AppContext;

  addNewFolder(name) {
    this.setState({ title: name, touched: true });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title } = this.state
    console.log("title: ", title)
    
    

    const newFolder = {
      name: title
     }

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
          this.setState({ error })
          console.log({ error });
        })
    ;
  }

  validateTitle() {
    const name = this.state.title.trim();
    if (name.length === 0) {
      return "Title is Required";
    } 
  }


  

  render() {
    const titleError = this.validateTitle()

    return (
      
      <form className="addFolderForm" onSubmit={(e) => this.handleSubmit(e)}>
        <div className="new_folder_name">
          <label>Enter Folder Name</label>
          <input
            type="text"
            name="newFolderName"
            id="newFolderName"
            placeholder="New Folder Name"
            onChange={(e) => this.addNewFolder(e.target.value)}
          />
          {this.state.touched && (<ValidationError message={titleError} />)}
        </div>
        <button type="submit" disabled={this.validateTitle()}>Submit</button>
        <button type="cancel">Cancel</button>
      </form>
      
    );
  }
}

export default AddFolderForm;
