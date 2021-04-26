import React, { Component } from "react";
import Folders from "../Folders/Folders";
import "./FolderSidebar.css";

function FolderSidebar(props) {
  const { folders } = props;
  const foldersList = folders.map((folder, idx) => (
    <Folders {...folder} key={idx} />
  ));
  console.log(folders);
  return (
    <div className="folder_sidebar">
      {foldersList}

      <button className="addFolder_btn">Add Folder</button>
    </div>
  );
}

export default FolderSidebar;
