import React from "react";

export default function NoteContent(props) {
  console.log(props);
  return (
    <div className="noteContent">
      <p>{props.content}</p>
    </div>
  );
}
