import "./App.css";

import React, { Component } from "react";
import { Route } from "react-router-dom";
<<<<<<< HEAD
import FolderSidebar from "./components/FolderSiderbar/FolderSidebar";
=======
import FolderSidebar from "./components/FoldeSiderbar/FolderSidebar";
>>>>>>> b5642da099e2ff127d4e5b1ae2d713dabb8738ca
import NoteList from "./components/NoteList/NoteList";
import Header from "./components/Header/Header";
import NoteContent from "./components/NoteContent/NoteContent";
import AppContext from "./components/AppContext";
<<<<<<< HEAD
import FilteredFolderSidebar from './components/FilteredFolderSidebar/FilteredFolderSidebar';

=======
>>>>>>> b5642da099e2ff127d4e5b1ae2d713dabb8738ca

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      folders: [],
<<<<<<< HEAD
      filteredFolder: []
      
=======
>>>>>>> b5642da099e2ff127d4e5b1ae2d713dabb8738ca
    };
  }
  componentDidMount() {
    Promise.all([
      fetch("http://localhost:9090/folders"),
      fetch("http://localhost:9090/notes"),
    ])
      .then(([foldersRes, notesRes]) => {
        if (!foldersRes.ok) throw new Error("Something went wrong with notes!");
        if (!notesRes.ok) throw new Error("Something went wrong with folders!");

        return Promise.all([foldersRes.json(), notesRes.json()]);
      })
      .then(([folders, notes]) => {
        console.log("notes loading.." + notes, "folders loading..." + folders);
        this.setState({ folders, notes });
      });
  }

  addFolder() {}

  addNote() {}

  deleteNote() {}

  handleFolderClick = (selectedFolder) => {
    /* const folders = this.state.folders.filter(
      (folder) => folder.id === selectedFolder
    );*/
    const notes = this.state.notes.filter(
      (note) => note.folderId === selectedFolder
    );

    this.setState({ notes });
  };

  handleNoteClick = (selectedNote) => {
    const notes = this.state.notes.filter((note) => note.id === selectedNote);
<<<<<<< HEAD
    this.setState({ notes: notes });
=======
    this.setState({ notes });
>>>>>>> b5642da099e2ff127d4e5b1ae2d713dabb8738ca
  };

  render() {
    const value = {
      notes: this.state.notes,
      folders: this.state.folders,
      deleteNote: this.deleteNote,
      addNote: this.addNote,
      addFolder: this.addFolder,
      handleFolderClick: this.handleFolderClick,
      handleNoteClick: this.handleNoteClick
    };

    return (
      <main className="App">
        <header>
          <Header />
         
        </header>
<<<<<<< HEAD
        <AppContext.Provider value={contextValue}>
          <Route
            exact
            path="/"
            render={() => (
              <div>
                <FolderSidebar
                  folders={STORE.folders}
                  handleFolderClick={this.handleFolderClick}
                  bac
                />
                <NoteList
                  notes={STORE.notes}
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
                  folders={STORE.folders}
                  handleFolderClick={this.handleFolderClick}
                />
                <NoteList
                  notes={this.state.notes}
                  handleNoteClick={this.handleNoteClick}
                />
              </div>
            )}
          />
          <Route
            path="/note/:noteId"
            render={() => (
              <div>
                <FilteredFolderSidebar
                  folders={this.state.folders}
                />
                <NoteContent notes={this.state.notes} />
              </div>
            )}
          />
=======
        <AppContext.Provider value={value}>
          <Route exact path="/">
            <FolderSidebar />
            
            <NoteList />
          </Route>
          <Route path="/folder/:folderId">
          <FolderSidebar />
            <NoteList />
          </Route>
          <Route path="/note/:noteId">
            <FolderSidebar />
            <NoteContent />
          </Route>
>>>>>>> b5642da099e2ff127d4e5b1ae2d713dabb8738ca
        </AppContext.Provider>
      </main>
    );
  }
}

export default App;
