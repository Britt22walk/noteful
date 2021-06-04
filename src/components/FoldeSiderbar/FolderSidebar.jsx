import React, {Component } from "react";
import AppContext from "../AppContext";
import Folders from "../Folders/Folders";
import "./FolderSidebar.css";

class FolderSidebar extends Component {
  static contextType = AppContext;
  
  
  render() { 
    
    const { folders=[] } = this.context;
    console.log(folders)
    const foldersList = folders.map((folder, idx) => (
      <Folders {...folder} key={idx}  />
    ));
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
  const context = useContext(AppContext);
  const {  folders, handleFolderClick } = props;
  const foldersList = folders.map((folder, idx) => (
    <Folders {...folder} key={idx} handleFolderClick={handleFolderClick} />
  ));
  return (
    
    <div className="folder_sidebar">
      {foldersList}
      <button className="addFolder_btn">Add Folder</button>
    </div>
    
  );
}

export default FolderSidebar;*/
