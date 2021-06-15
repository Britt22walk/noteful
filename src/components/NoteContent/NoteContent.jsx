import React from "react";
import "./NoteContent.css"


export default function NoteContent(props) {
const { notes } = props 
  
  console.log(notes[0].name)
  
  return (
    <div className="note-content">
      <h2>{notes[0].name}</h2>
      <p>{notes[0].modified}</p>
      
     <p>{notes[0].content}</p>
      <button className="delete_btn">Delete Note</button>
      
    </div>
  );
}
