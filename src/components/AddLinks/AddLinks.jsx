import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const AddLinks = () => {
   
    return (
        <div>
            <Link to='/add-folder'>Add New Folder</Link> <br/>
            <Link to='/add-note'>Add New Note</Link>
        </div>
      );
}
 
export default AddLinks;