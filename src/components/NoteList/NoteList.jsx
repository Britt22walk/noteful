import React, { Component } from "react";
import Notes from "../Notes/Notes";
import AddFolderForm from "../AddFolderForm/AddFolderForm";
import AddNoteForm from "../AddNoteForm/AddNoteForm";
import "./NoteList.css";

export default function NoteList(props) {
  
  const notesList = props.notes.map((note, idx) => (
    <Notes {...note} key={idx} handleNoteClick={props.handleNoteClick} handleDeleteNote={props.handleDeleteNote}  />
  ));
  console.log(props);

  return <div className="note_list"><AddFolderForm/><AddNoteForm folders={props.folders}/>{notesList}</div>;
}
