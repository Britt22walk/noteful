import React, { Component } from "react";
import Notes from "../Notes/Notes";
import AddNoteButton from "../AddNoteButton/AddNoteButton"
import "./NoteList.css";
import NoteContent from "../NoteContent/NoteContent";

export default function NoteList(props) {
  const { notes, folderId, noteId, displayContentClick, content } = props;
  let filterNotes = notes;
  if (folderId){ filterNotes = filterNotes.filter(n => n.folderId === folderId)}
  if (noteId) { filterNotes = filterNotes.filter(n => n.noteId === noteId )}
  
  const notesList = filterNotes.map((note, idx) => <Notes {...note} key={idx} displayContentClick={displayContentClick} />);


  return (
    <div className="note_list">
      {notesList}
      

    </div>
  );
}
