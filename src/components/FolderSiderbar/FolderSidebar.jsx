import React from "react";
import Folders from "../Folders/Folders";
import "./FolderSidebar.css";

class FolderSidebar extends Component {
  static contextType = AppContext;
  
  
  render() { 

    const { folders, handleFolderClick } = this.context;
    
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
}
 
export default FolderSidebar;
 

/*
function FolderSidebar(props) {
<<<<<<< HEAD
  const { folders, handleFolderClick } = props;
  let foldersList = folders.map((folder, idx) => (
    <Folders {...folder} key={idx} handleFolderClick={handleFolderClick} />
  ));
  console.log(props);
=======
  const context = useContext(AppContext);
  const {  folders, handleFolderClick } = props;
  const foldersList = folders.map((folder, idx) => (
    <Folders {...folder} key={idx} handleFolderClick={handleFolderClick} />
  ));
>>>>>>> c464e1363ed463ee6fc73f15f42e3ac70887164a
  return (
    
    <div className="folder_sidebar">
      {foldersList}
      <button className="addFolder_btn">Add Folder</button>
    </div>
    
  );
}

export default FolderSidebar;*/
