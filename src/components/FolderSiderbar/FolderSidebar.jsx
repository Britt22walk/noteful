import React, { Component } from "react";
import { withRouter } from "react-router-dom"
import Folders from "../Folders/Folders";
import AppContext from "../AppContext";
import AddLinks from "../AddLinks/AddLinks";
import "./FolderSidebar.css";


class FolderSidebar extends Component {
  static contextType = AppContext;
  



  render() {
    
    const { folders = [] } = this.context;
    let foldersList = folders.map((folder, idx) => (
      <Folders {...folder} key={idx} />
    ));
    return (
      <div className="folder_sidebar">
        {foldersList}
        <div className="buttonsContainer">
         <AddLinks />
        </div>
      </div>
    );
  }
}
export default withRouter(FolderSidebar);
