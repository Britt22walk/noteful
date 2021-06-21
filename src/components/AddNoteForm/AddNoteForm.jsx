import React, { Component } from "react";

class AddNoteForm extends Component {
  state = {};
  render() {
    return (
      <form className="addNoteForm">
        <h2>Create New Note</h2>
        <div className="new_note_name">
          <label>Note Name</label>
          <input type="text"></input>
        </div>
        <div className="new_note_content">
          <label>Note Content</label>
          /*long form text box*/
        </div>
        <div className="new_note_folder">
          <label>Folder</label>
          */drop down list of availible folders*/
        </div>
      </form>
    );
  }
}

export default AddNoteForm;
