import React, { Component } from "react";
import Notes from "../Notes/Notes";
import "./NoteList.css";

export default function NoteList(props) {
  const { notes } = props;
  const notesList = notes.map((note, idx) => <Notes {...note} key={idx} />);
  console.log(notes);
  return (
    <div className="note_list">
      {notesList}

      <button className="addNote_btn">Add Note</button>
    </div>
  );
}
