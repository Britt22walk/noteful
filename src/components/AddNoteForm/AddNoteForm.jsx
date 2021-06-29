import React, { Component } from "react";
import AppContext from "../AppContext";
import FolderSidebar from "../FolderSiderbar/FolderSidebar";
import ValidationError from "../ValidationError/ValidationError";
import "./AddNoteForm.css";

class AddNoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      content: "",
      folder: "",
      touched: false,
    };
  }

  static contextType = AppContext;

  addNewNoteName(name) {
    console.log("addnewnote name triggered");
    this.setState({ name });
  }

  addNewNoteContent(content) {
    console.log("addnewnote content triggered");
    this.setState({ content });
  }

  addNewNoteFolder(folder) {
    console.log("addnewnote folder triggered");
    this.setState({ folder });
  }

  validateName() {
    console.log("Validate name fired");
    let name = this.state.name.trim();
    if (name.length === 0) {
      return "Name is Required";
    }
  }

  validateContent() {
    console.log("Validate content");
    let content = this.state.content.trim();
    if (content.length === 0) {
      return "Please enter Content";
    } else if (content.length < 10) {
      return "Content must be at least 10 charcters";
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("form submitted!");
    this.setState({ touched: true });
  }

  render() {
    console.log(this.context);
    const folderOptions = this.context.folders.map((folder) => {
      return (
        <option value={folder.id} key={folder.id}>
          {folder.name}
        </option>
      );
    });
    const nameError = this.validateName();
    const contentError = this.validateContent();
    return (
      <form className="addNoteForm" onSubmit={(e) => this.handleSubmit(e)}>
        <h2>Create New Note</h2>
        <div className="new_note_name">
          <label>Name</label>
          {this.state.touched && <ValidationError message={nameError} />}
          <input
            type="text"
            id="newNoteName"
            name="newNoteName"
            onChange={(e) => this.addNewNoteName(e.target.value)}
          ></input>
        </div>
        <div className="new_note_content">
          <label>Content</label>
          {this.state.touched && <ValidationError message={contentError} />}
          <textarea
            rows="10"
            id="newNoteContent"
            name="newNoteContent"
            onChange={(e) => this.addNewNoteContent(e.target.value)}
          ></textarea>
        </div>
        <div className="new_note_folder">
          <label>Containing Folder</label>
          <select
            name="newNoteFolder"
            id="newNoteFolder"
            onChange={(e) => this.addNewNoteFolder(e.target.value)}
          >
            {folderOptions}
          </select>
        </div>
        <button type="submit">Submit</button>
        <button type="cancel" onClick={(e) => this.props.history.goBack(e)}>
          Cancel
        </button>
      </form>
    );
  }
}

export default AddNoteForm;
