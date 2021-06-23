import React, { Component } from "react";
import {Link} from 'react-router-dom';

export default function Notes(props) {

  
  console.log(props);
  return (
    <div className="notes">
      <Link to={`/note/${props.id}`} ><h2>{props.name}</h2></Link>
      <p>{props.modified}</p>
      <button className="delete_btn">Delete Note</button>
    </div>
  );
}
