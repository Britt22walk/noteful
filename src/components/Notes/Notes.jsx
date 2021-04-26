import React, { Component } from "react";

export default function Notes(props) {
  return (
    <div className="notes">
      <h2>{props.name}</h2>
      <p>{props.modified}</p>
      <button className="delete_btn">Delete Note</button>
    </div>
  );
}
