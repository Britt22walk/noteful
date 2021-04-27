import "./App.css";

import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import FolderSidebar from "./components/FoldeSiderbar/FolderSidebar";
import NoteList from "./components/NoteList/NoteList";
import Header from "./components/Header/Header";
import STORE from "./STORE";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      folders: [],
    };
  }

  handleFolderClick = (selectedFolder) => {
    console.log("the id of the folder clicked is " + selectedFolder);
    const notes = STORE.notes.filter(
      (note) => note.folderId === selectedFolder
    );

    this.setState({ notes: notes });
  };

  handleNoteClick = () => {
    console.log("Note clicked!");
  };

  render() {
    return (
      <main className="App">
        <header>
          <Header />
        </header>
        <FolderSidebar
          folders={STORE.folders}
          handleFolderClick={this.handleFolderClick}
        />
        <NoteList notes={this.state.notes} />
      </main>
    );
  }
}

export default App;
