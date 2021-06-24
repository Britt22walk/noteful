import React, { Component } from "react";

import { Link, useHistory } from "react-router-dom";

const Notes = (props) => {

  function runClick(){
   // console.log(props)
   props.handleDeleteNote(props.id);
   // props.onDeleteNoteClick()
  }


  return (
    <div className="notes">
      <Link to={`/note/${props.id}`}>
        <h2>{props.name}</h2>
      </Link>
      <p>{props.modified}</p>
      <button className="delete_btn" onClick={()=> props.handleDeleteNote(props.id)}>
        Delete Note
      </button>
    </div>
  );
};

export default Notes;
