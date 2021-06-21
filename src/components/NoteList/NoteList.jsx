import React, { Component } from "react";
import Notes from "../Notes/Notes";

import "./NoteList.css";


export default function NoteList(props) {
  
  const notesList = props.notes.map((note, idx) => <Notes {...note} key={idx} handleNoteClick={props.handleNoteClick} />);
console.log(props)

  return (
    <div className="note_list">
      {notesList}
      

    </div>
  );
}
