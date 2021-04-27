import React, { Component } from "react";
import NoteContent from "../NoteContent/NoteContent";

export default function Notes(props) {
  console.log(props);
  return (
    <div className="notes">
      <h2>{props.name}</h2>
      <p>{props.modified}</p>
      <button className="delete_btn">Delete Note</button>
      <NoteContent content={props.content} />
    </div>
  );
}
