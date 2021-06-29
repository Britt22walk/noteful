import React, { Component } from "react";
import AppContext from "../AppContext";
import Notes from "../Notes/Notes";
import AddFolderForm from "../AddFolderForm/AddFolderForm";
import AddNoteForm from "../AddNoteForm/AddNoteForm";
import { getNotesForFolder } from "../../noteful-helpers";
import "./NoteList.css";


class NoteList extends Component {
static contextType=AppContext; 
  render() { 
    const {notes, folders, handleDeleteNote } = this.context;
    const { folderId } = this.props.match.params;
    const notesForFolder = getNotesForFolder(notes, folderId);
    const notesList = notesForFolder.map((note, idx) => (
      <Notes
        {...note}
        key={idx}
        handleDeleteNote={handleDeleteNote}
      />
    ));
    return (
      <div className="note_list">
      {notesList}
    </div>
      );
  }
}
 
export default NoteList;

