import React, {Link} from "react";
import AppContext from "../AppContext";
import Folders from "../Folders/Folders";
import BackButton from '../BackButton/BackButton';


const FilteredFolderSiderbar = (props) => {
  console.log(props)
  
  return (
    <div className="folder_sidebar">
     <ul className="filteredFolder">
      <li>
      <h3>{props.folders.name}</h3>
      </li>
    </ul>
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