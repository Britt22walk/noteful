import React, { Component } from "react";
import NoteContent from "../NoteContent/NoteContent";
import {Link} from 'react-router-dom';

export default function Notes(props) {

  const { handleNoteClick } = props;
  
  return (
    <div className="notes">
      <Link to={`/note/${props.id}`} onClick={(e) => handleNoteClick(props.id)}><h2>{props.name}</h2></Link>
      <p>{props.modified}</p>
      <button className="delete_btn">Delete Note</button>
    </div>
  );
}
