import "./App.css";

import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import FolderSidebar from "./components/FoldeSiderbar/FolderSidebar";
import NoteList from "./components/NoteList/NoteList";
import Header from "./components/Header/Header";
import STORE from "./STORE";
import NoteContent from './components/NoteContent/NoteContent';

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

        <Route
          path="/folder/:folderId"
          render={() => <NoteList notes={this.state.notes} />}
        />
        <Route
          path="/note/:noteId"
          render={() => <div><NoteList notes={this.state.notes}/> <NoteContent note={this.state.notes} /></div>}
        />

        <Route exact path="/" render={() => <NoteList notes={STORE.notes} />} />
      </main>
    );
  }
}

export default App;
