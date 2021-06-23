import React from "react";
import "./NoteContent.css"


export default function NoteContent(props) {
const { note } = props 
  
  console.log(note)
  
  return (
   
    <div className="note-content">
      <h2>{note.name}</h2>
      <p>{note.modified}</p>
      
     <p>{note.content}</p>
      <button className="delete_btn">Delete Note</button>
      
    </div>
  );
}
