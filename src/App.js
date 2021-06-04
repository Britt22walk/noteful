import "./App.css";

import React, { Component } from "react";
import { Route } from "react-router-dom";
import FolderSidebar from "./components/FoldeSiderbar/FolderSidebar";
import NoteList from "./components/NoteList/NoteList";
import Header from "./components/Header/Header";
import STORE from "./STORE";
import NoteContent from "./components/NoteContent/NoteContent";
import BackButton from "./components/BackButton/BackButton";
import AppContext from "./components/AppContext";

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
    fetch("http://localhost:9090/folders"),
    fetch("http://localhost:9090/notes")
    ])
      .then(([foldersRes, notesRes]) => {
        if (!foldersRes.ok) 
          throw new Error("Something went wrong with notes!");
        if (!notesRes.ok) 
          throw new Error ("Something went wrong with folders!")
        
        return Promise.all([foldersRes.json(), notesRes.json()])
        })
      .then(([folders, notes]) => {
        console.log("notes loading.." + notes, "folders loading..." + folders)
        this.setState({folders, notes})
      })
  }

addFolder(){

}

addNote (){

}

deleteNote(){

}


  handleFolderClick = (selectedFolder) => {
    const folders = STORE.folders.filter(
      (folder) => folder.id === selectedFolder
    );
    const notes = STORE.notes.filter(
      (note) => note.folderId === selectedFolder
    );

    this.setState({ notes, folders });
  };

  handleNoteClick = (selectedNote) => {
    const notes = this.state.notes.filter((note) => note.id === selectedNote);
    this.setState({ notes });
  };

  render() {
    const value = {
      notes: this.state.notes,
      folders: this.state.folders,
      deleteNote: this.deleteNote,
      addNote: this.addNote,
      addFolder: this.addFolder
    }
    
    return (
      <main className="App">
        <header>
          <Header />
        </header>
      <AppContext.Provider value={value}>
          <Route
            exact
            path="/"
            component={() => (
              <div>
                <FolderSidebar
   
                  handleFolderClick={this.handleFolderClick}
                  
                />
                <NoteList
                  
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
                  
                  handleFolderClick={this.handleFolderClick}
                />
                <NoteList
                
                  handleNoteClick={this.handleNoteClick}
                />
              </div>
            )}
          />
          <Route
            path="/note/:noteId"
            render={() => (
              <div>
                <FolderSidebar
                  
                  handleFolderClick={this.handleFolderClick}
                />
                <BackButton />
                <NoteContent  />
              </div>
            )}
          />
        </AppContext.Provider>
      </main>
    );
  }
}

export default App;
