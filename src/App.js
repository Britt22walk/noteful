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

    this.setState({ notes });
  };

  displayContentClick = (selectedNote) => {
      console.log('content will be displaye for', selectedNote);
      const notes = this.state.notes.filter((note) => note.id === selectedNote 
      );
      this.setState ({ notes })
      
    
  }

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
        <switch>
        <Route exact path="/" render={() => <NoteList notes={STORE.notes} displayContentClick={this.displayContentClick}/>} />
        <Route
          path="/folder/:folderId"
          render={() => <NoteList notes={this.state.notes} displayContentClick={this.displayContentClick}/>}
        />
        <Route
          path="/note/:noteId"
          render={() => <div><NoteList notes={this.state.notes} displayContentClick={this.displayContentClick}/>  </div>}
        />

        
      </switch>
      </main>
    );
  }
}

export default App;
