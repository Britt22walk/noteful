import "./App.css";

import React, { Component } from "react";
import { Route } from "react-router-dom";
import FolderSidebar from "./components/FolderSiderbar/FolderSidebar";
import NoteList from "./components/NoteList/NoteList";
import Header from "./components/Header/Header";
import STORE from "./STORE";
import NoteContent from "./components/NoteContent/NoteContent";
import AppContext from "./components/AppContext";
import FilteredFolderSidebar from './components/FilteredFolderSidebar/FilteredFolderSidebar';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      folders: [],
      filteredFolder: []
      
    };
  }

  handleFolderClick = (selectedFolder) => {
    console.log("the id of the folder clicked is " + selectedFolder);
    const folders = STORE.folders.filter(
      (folder) => folder.id === selectedFolder
    );
    const notes = STORE.notes.filter(
      (note) => note.folderId === selectedFolder
    );

    this.setState({ notes, folders });
  };

  handleNoteClick = (selectedNote) => {
    console.log("content will be displaye for", selectedNote);
    const notes = this.state.notes.filter((note) => note.id === selectedNote);
    this.setState({ notes: notes });
  };

  render() {
    const contextValue = {
      allFolders: this.Folders,
      activeFolder: this.state.folders,

    }
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
        </AppContext.Provider>
      </main>
    );
  }
}

export default App;
