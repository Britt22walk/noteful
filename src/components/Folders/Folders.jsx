import React, { Component } from "react";

export default function Folders(props) {
  return (
    <ul className="folders">
      <li>
        {props.name}
        <button onClick={(e) => props.handleFolderClick(props.id)}>
          Select
        </button>
      </li>
    </ul>
  );
}
