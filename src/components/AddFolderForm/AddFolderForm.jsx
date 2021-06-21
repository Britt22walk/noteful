import React, { Component } from 'react';

class AddFolderForm extends Component {
    state = {  }
    render() { 
        return (
            <form className="addFolderForm">
                <div className="new_folder_name">
                <label>Enter Folder Name</label>
                <input type="text" name="newFolderName" id="newFolderName" />
                </div>
                <button type="submit">Submit</button>
            </form>
          );
    }
}
 
export default AddFolderForm;