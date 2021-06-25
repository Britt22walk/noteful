import React, { Component } from 'react';
import AppContext from "../AppContext";
import BackButton from '../BackButton/BackButton';
import { findNote, findFolder } from '../../noteful-helpers'


class FilteredFolderSidebar extends Component {
  static contextType = AppContext;
  
  render() {
    const { notes, folders } = this.context; 
    const { noteId } = this.props.match.params;
            const note = findNote(notes, noteId) || {};
            const folder = findFolder(folders, note.folderId); 
    return (
      <div className="folder_sidebar">
     <ul className="filteredFolder">
      <li>
      <h3>{folder.name}</h3>
      </li>
    </ul>
    <BackButton />
  </div>
      );
  }
}
 
export default FilteredFolderSidebar;


  

 


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