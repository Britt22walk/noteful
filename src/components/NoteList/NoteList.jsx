import React, { Component } from "react";
import AppContext from '../AppContext'
import Notes from "../Notes/Notes";

import "./NoteList.css";

class NoteList extends Component {
  static contextType = AppContext;
  render() {
    const { notes = [], folders=[] } = this.context;
    const { handleNoteClick } = this.props;
    console.log(notes);
    let filterNotes = notes;
  if (notes.folderId){ filterNotes = filterNotes.filter(n => n.folderId === notes.folderId)}
  if (folders.noteId) { filterNotes = filterNotes.filter(n => n.noteId === folders.noteId )}
  
  const notesList = filterNotes.map((note, idx) => <Notes {...note} key={idx} handleNoteClick={handleNoteClick} />);
    return (
      <div className="note_list">{notesList}</div>)
  }
}

export default NoteList;