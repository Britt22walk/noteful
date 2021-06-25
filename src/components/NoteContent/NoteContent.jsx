import React, { Component } from 'react';
import AppContext from "../AppContext";
import "./NoteContent.css";
import { findNote } from "../../noteful-helpers";

class NoteContent extends Component {
  static contextType = AppContext;

  render() {
    const { noteId } = this.props.match.params;
    const { notes } = this.context;
    const selectedNote = findNote(notes, noteId);
    return (
      <div className="note-content">
        <h2>{selectedNote.name}</h2>
        <p>{selectedNote.modified}</p>
        <p>{selectedNote.content}</p>
        <button className="delete_btn" onClick={() => this.props.handleDeleteNote}>
          Delete Note
        </button>
      </div>
    );
  }
}

export default NoteContent;
