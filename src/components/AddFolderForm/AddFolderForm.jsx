import React, { Component } from "react";
import "./AddFolderForm.css";

class AddFolderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newFolderName: {
        value: "",
        
      },
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();

    const newFolderName = event.target.newFolderName.value;
    console.log(newFolderName);
    fetch(
      `http://localhost:9090/folders`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: "newFolderName",
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
        })
        .catch((error) => {
          console.log({ error });
        })
    ;
  };

  addNewFolder = (newFolderName) => {
    this.setState({ newFolderName: { value: newFolderName } });
  };

  render() {
    return (
      <form className="addFolderForm" onSubmit={(e) => this.handleSubmit(e)}>
        <div className="new_folder_name">
          <label>Enter Folder Name</label>
          <input type="text" name="newFolderName" id="newFolderName" />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default AddFolderForm;
