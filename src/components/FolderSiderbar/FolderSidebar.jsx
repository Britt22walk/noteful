import React from "react";
import Folders from "../Folders/Folders";
import "./FolderSidebar.css";

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

export default FolderSidebar;
