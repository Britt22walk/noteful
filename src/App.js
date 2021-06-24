import "./App.css";
import React, { Component } from "react";
import { Route, Link, useLocation, useHistory } from "react-router-dom";
import FolderSidebar from "./components/FolderSiderbar/FolderSidebar";
import NoteList from "./components/NoteList/NoteList";
import NoteContent from "./components/NoteContent/NoteContent";
import AppContext from "./components/AppContext";
import FilteredFolderSidebar from "./components/FilteredFolderSidebar/FilteredFolderSidebar";
import AddNoteForm from "./components/AddNoteForm/AddNoteForm";
import {getNotesForFolder, findNote, findFolder} from './noteful-helpers'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      folders: [],
    };
  }

  componentDidMount() {
    Promise.all([
      fetch(`http://localhost:9090/notes`),
      fetch(`http://localhost:9090/folders`),
    ])
      .then(([notesRes, foldersRes]) => {
        if (!notesRes.ok) return notesRes.json().then((e) => Promise.reject(e));
        if (!foldersRes.ok)
          return foldersRes.json().then((e) => Promise.reject(e));

        return Promise.all([notesRes.json(), foldersRes.json()]);
      })
      .then(([notes, folders]) => {
        this.setState({
          notes,
          folders,
        });
      })
      .catch((error) => {
        this.setError(error);
      });
  }
 

  handleFolderClick = (selectedFolder) => {
    console.log("the id of the folder clicked is " + selectedFolder);
    const filteredFolder = this.state.folders.filter(
      (folder) => folder.id === selectedFolder
    );
    const filteredNotes = this.state.notes.filter(
      (note) => note.folderId === selectedFolder
    );

    this.setState({ filteredNotes, filteredFolder });
  };

handleDeleteNote = (noteToDelete) =>{
  fetch (`http://localhost:9090/notes/`+ noteToDelete, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json'
    },
  })
  .then(res=>{
    if (!res.ok)
     return res.json().then(e => Promise.reject(e))
    return res.json()
  })
  .then(res => {
    this.handleDeleteNoteClick()
    console.log(res)})
    .catch (error => {
      console.log ({error})
    })
  console.log("handleDeleteNoteClick registered on " + noteToDelete)
}

handleDeleteNoteClick=(notesToDelete)=>{
  const notes =  this.state.notes.filter(note=> note.id !== notesToDelete)
  this.setState({ notes })
}
  renderNavRoutes() {
    const { notes } = this.state;
    return (
      <div>
        {["/", "/folder/:folderId"].map((path) => (
          <Route
            exact
            key={path}
            path={path}
            render={(routeProps) => (
              <FolderSidebar folders={this.state.folders} notes={notes} {...routeProps} handleFolderClick={this.handleFolderClick} />
            )}
          />
        ))}
        <Route
          path="/note/:noteId"
          render={(routeProps) => {
            const { noteId } = routeProps.match.params;
            const note = findNote(notes, noteId) || {};
            const foldersFiltered = findFolder(this.state.folders, note.folderId);
            return <FilteredFolderSidebar {...routeProps} folders={foldersFiltered} />;
          }}
        />
      </div>
    );
  }

  renderMainRoutes() {
    const { notes, folders } = this.state;
    console.log(notes)
    return (
      <div>
        {["/", "/folder/:folderId"].map((path) => (
          <Route
            exact
            key={path}
            path={path}
            render={(routeProps) => {
              const { folderId } = routeProps.match.params;
              const notesForFolder = getNotesForFolder(notes, folderId);
              return <NoteList {...routeProps} notes={notesForFolder} folders={folders} handleNoteClick={this.handleNoteClick} handleDeleteNote={this.handleDeleteNote} />;
            }}
          />
        ))}
        <Route
          path="/note/:noteId"
          render={(routeProps) => {
            const { noteId } = routeProps.match.params;
            const note = findNote(notes, noteId);
            return <NoteContent {...routeProps} note={note} handleDeleteNote={this.handleDeleteNote}/>;
          }}
        />
      </div>
    );
  }
  render() {
    return (
      <div className="App">
        <nav className="App__nav">{this.renderNavRoutes()}</nav>
        <header className="App__header">
          <h1>
            <Link to="/">Noteful</Link> 
          </h1>
        </header>
        <main className="App__main">{this.renderMainRoutes()}</main>
      </div>
    );
  }
}

export default App;
