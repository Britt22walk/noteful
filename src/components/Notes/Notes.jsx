import React, { Component } from 'react';
import AppContext from '../AppContext';
import { Link, withRouter } from "react-router-dom";

class Notes extends Component {
  static contextType=AppContext;

  handleClick(noteId){
  this.context.deleteNote(noteId)
  this.props.history.goBack()
 
  }
  render() { 
    return (
    <div className="notes">
      <Link to={`/note/${this.props.id}`}>
        <h2>{this.props.name}</h2>
      </Link>
      <p>{this.props.modified}</p>
      <button className="delete_btn"  onClick={e=>this.handleClick(this.props.id)}>
        Delete Note
      </button>
    </div>  );
  }
}
 
export default withRouter (Notes);



//()=> props.handleDeleteNote(props.id).history

