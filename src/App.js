import "./App.css";
import React, { Component } from "react";
import { Route, Link, useLocation, useHistory } from "react-router-dom";
import FolderSidebar from "./components/FolderSiderbar/FolderSidebar";
import NoteList from "./components/NoteList/NoteList";
import Header from "./components/Header/Header";
import NoteContent from "./components/NoteContent/NoteContent";
import AppContext from "./components/AppContext";
import FilteredFolderSidebar from "./components/FilteredFolderSidebar/FilteredFolderSidebar";
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
  /*findFolder = (folders = [], folderId) => {
    folders.find((folder) => folder.id === folderId)}

  findNote = (notes = [], noteId) => {notes.find((note) => note.id === noteId)}

  getNotesForFolder = (notes = [], folderId) => {
    notes.filter((note) => note.folderId === folderId)}*/

  

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

 /* handleNoteClick = (selectedNote) => {
    console.log("content will be displaye for", selectedNote);
    const notes = this.state.notes.filter((note) => note.id === selectedNote);
    this.setState({ notes: notes });
  };*/

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
              return <NoteList {...routeProps} notes={notesForFolder} handleNoteClick={this.handleNoteClick} />;
            }}
          />
        ))}
        <Route
          path="/note/:noteId"
          render={(routeProps) => {
            const { noteId } = routeProps.match.params;
            const note = findNote(notes, noteId);
            return <NoteContent {...routeProps} note={note} />;
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

/*
  render() {
    const contextValue = {
      allFolders: this.Folders,
      activeFolder: this.state.folders,
    };
    return (
      <main className="App">
        <header>
          <Header />
        </header>
        <AppContext.Provider value={contextValue}>
          <Route
            exact
            path="/"
            render={() => (
              <div>
                <FolderSidebar
                  folders={this.state.folders}
                  handleFolderClick={this.handleFolderClick}
                  addClickHandler={() => {
                    console.log("Add button clicked");
                  }}
                />
                <NoteList
                  notes={this.state.notes}
                  handleNoteClick={this.handleNoteClick}
                />
              </div>
            )}
          />

          <Route
            path="/folder/:folderId"
            render={() => (
              <div>
                <FolderSidebar
                  folders={this.state.folders}
                  handleFolderClick={this.handleFolderClick}
                />
                <NoteList
                  notes={this.state.filteredNotes}
                  handleNoteClick={this.handleNoteClick}
                />
              </div>
            )}
          />
          <Route
            path="/note/:noteId"
            render={({ history }) => {
              console.log(history);
              return (
                <div>
                  <FilteredFolderSidebar folders={this.state.filteredFolder} />
                  <NoteContent notes={this.state.notes} />
                </div>
              );
            }}
          />
        </AppContext.Provider>
      </main>
    );
  }
}
*/
export default App;
