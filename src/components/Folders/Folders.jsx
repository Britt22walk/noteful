import React from "react";

import { NavLink, Link } from 'react-router-dom';

export default function Folders(props) {
  console.log(props)
  return (
    <ul className="folders">
      <li>
      <Link to={`/folder/${props.id}`} onClick={(e) => props.handleFolderClick(props.id)}> {props.name} </Link>
      </li>
    </ul>
  );
}
