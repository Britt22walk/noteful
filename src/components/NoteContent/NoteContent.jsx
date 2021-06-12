import React from "react";
import AppContext from '../AppContext'
import "./NoteContent.css"


export default function NoteContent() {
 
  
 
  
  return (
    <AppContext.Consumer>
      {(value) => { 
        console.log(value.notes)
        return (
      <div className="note-content">
        <h2>{value.notes.name}</h2>
        <p>notes.modified</p>
        
      <p>notes.content</p>
        <button className="delete_btn">Delete Note</button>
        
      </div>)}}
    </AppContext.Consumer>
  );
}
