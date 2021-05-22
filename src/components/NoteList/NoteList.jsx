import React, { Component } from "react";
import Notes from "../Notes/Notes";

import "./NoteList.css";


export default function NoteList(props) {
  const { notes, folderId, noteId, handleNoteClick } = props;
  let filterNotes = notes;
  if (folderId){ filterNotes = filterNotes.filter(n => n.folderId === folderId)}
  if (noteId) { filterNotes = filterNotes.filter(n => n.noteId === noteId )}
  
  const notesList = filterNotes.map((note, idx) => <Notes {...note} key={idx} handleNoteClick={handleNoteClick} />);


  return (
    <div className="note_list">
      {notesList}
      

    </div>
  );
}
