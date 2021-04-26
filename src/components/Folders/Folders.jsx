import React, { Component } from "react";

export default function Folders(props) {
  console.log(props);
  return (
    <div className="folders">
      <h3>{props.name}</h3>
    </div>
  );
}
