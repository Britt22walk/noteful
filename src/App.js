import "./App.css";

import React, { Component } from "react";
import { Route } from "react-router-dom";
import FolderSidebar from "./components/FoldeSiderbar/FolderSidebar";
import NoteList from "./components/NoteList/NoteList";
import STORE from "./STORE";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: STORE.notes,
      folders: STORE.folders,
    };
  }

  render() {
    console.log(this.state.folders);
    return (
      <main className="App">
        <header>
          <h1>Noteful</h1>
        </header>
        <FolderSidebar folders={this.state.folders} />
        <NoteList notes={this.state.notes} />
      </main>
    );
  }
}

export default App;
