import React, {Component } from "react";
import AppContext from "../AppContext";
import Folders from "../Folders/Folders";
import BackButton from '../BackButton/BackButton';


const FilteredFolderSiderbar = (props) => {
  const { folders, handleFolderClick} =props;
  const foldersList = folders.map((folder, idx) => (
    <Folders {...folder} key={idx} handleFolderClick={handleFolderClick} />
    
  ));
  return (
    <div className="folder_sidebar">
    {foldersList}
    <BackButton />
  </div>
    );
}
 
export default FilteredFolderSiderbar;

/*class FilteredFolderSidebar extends Component {
  
  
  
  render() { 
   
    
    const foldersList = folders.map((folder, idx) => (
      <Folders {...folder} key={idx} handleFolderClick={handleFolderClick} />
    ));
    return (
      <div className="folder_sidebar">
      {foldersList}
      <BackButton />
    </div>
      );
  }
}
 
export default FilteredFolderSidebar;*/