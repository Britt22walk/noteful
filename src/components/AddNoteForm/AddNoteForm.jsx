import React, { Component } from "react";
import './AddNoteForm.css'

class AddNoteForm extends Component {
  constructor(props){
    super (props)
    this.state={ 
      newNote: {
        name: '',
        content: '',
        folder: '',
        touched: false,
      }

    }
  }
  render() {
    
    return (
      <form className="addNoteForm">
        <h2>Create New Note</h2>
        <div className="new_note_name">
          <label>Name</label>
          <input type="text" id="newNoteName" name="newNoteName"></input>
        </div>
        <div className="new_note_content">
          <label>Content</label>
          <textarea rows="10" id="newNoteContent" name="newNoteContent"></textarea>
        </div>
        <div className="new_note_folder">
          <label>Containing Folder</label>
          <select>
            <option>Folder 1</option>
            <option>Folder 2</option>
            <option>Folder 3</option>
          </select>
        </div>
        <button type="submit">Submit</button>
        <button type="cancel">Cancel</button>
      </form>
    );
  }
}

export default AddNoteForm;
