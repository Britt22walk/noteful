import React from "react";
import { useHistory } from "react-router";

import { Link } from "react-router-dom";



const Notes = (props) => {
let history=useHistory(); 
 
function handleClick(e){
  e.preventDefault();
    console.log("click logged!")
  }


 
  return (
    <div className="notes">
      <Link to={`/note/${props.id}`}>
        <h2>{props.name}</h2>
      </Link>
      <p>{props.modified}</p>
      <button className="delete_btn" onClick={()=>this.handleClick()}>
        Delete Note
      </button>
    </div>
  );
};

export default Notes;
