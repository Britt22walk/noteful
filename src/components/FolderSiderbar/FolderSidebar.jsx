import React, { Component } from 'react';
import Folders from "../Folders/Folders";
import AppContext from "../AppContext"
import "./FolderSidebar.css";

class FolderSidebar extends Component {
  static contextType = AppContext;
  render() { 
    const {folders =[], notes=[] } = this.context; 
    let foldersList = folders.map((folder, idx) => (
      <Folders {...folder} key={idx} />))
    return (
      <div className="folder_sidebar">
      {foldersList}
      <button className="addFolder_btn">Add Folder</button>
    </div>
      );
  }
}
 
export default FolderSidebar;


/*
function FolderSidebar(props) {
  const { folders, handleFolderClick } = props;
  let foldersList = folders.map((folder, idx) => (
    <Folders {...folder} key={idx} handleFolderClick={handleFolderClick} />
  ));
  console.log(props);
  return (
    <div className="folder_sidebar">
      {foldersList}
      <button className="addFolder_btn">Add Folder</button>
    </div>
  );
}

export default FolderSidebar;*/
