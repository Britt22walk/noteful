import React, { Component } from "react";
import AppContext from "../AppContext";
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

  static contextType=AppContext;
 

  addNewNoteName(){
    console.log('addnewnote name triggered')
  }

  addNewNoteContent(){
    console.log('addnewnote content triggered')
  }

  addNewNoteFolder(){
    console.log('addnewnote folder triggered')
  }

  handleSubmit(e){
    e.preventDefault();
    console.log('form submitted!')
  }
  render() {
    
    return (
      <form className="addNoteForm" onSubmit={e=>this.handleSubmit(e)}>
        <h2>Create New Note</h2>
        <div className="new_note_name">
          <label>Name</label>
          <input type="text" id="newNoteName" name="newNoteName" onChange={e=>this.addNewNoteName(e.target.value)}></input>
        </div>
        <div className="new_note_content">
          <label>Content</label>
          <textarea rows="10" id="newNoteContent" name="newNoteContent" onChange={e=>this.addNewNoteContent(e.target.value)}></textarea>
        </div>
        <div className="new_note_folder">
          <label>Containing Folder</label>
          <select name="newNoteFolder" id="newNoteFolder" onChange={e=>this.addNewNoteFolder(e.target.value)}>
            <option>Folder 1</option>
            <option>Folder 2</option>
            <option>Folder 3</option>
          </select>
        </div>
        <button type="submit">Submit</button>
        <button type="cancel" onClick={e=> this.props.history.goBack(e)}>Cancel</button>
      </form>
    );
  }
}

export default AddNoteForm;
