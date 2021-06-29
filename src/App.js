import "./App.css";
import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import FolderSidebar from "./components/FolderSiderbar/FolderSidebar";
import NoteList from "./components/NoteList/NoteList";
import NoteContent from "./components/NoteContent/NoteContent";
import AppContext from "./components/AppContext";
import FilteredFolderSidebar from "./components/FilteredFolderSidebar/FilteredFolderSidebar";
import AddFolderForm from "./components/AddFolderForm/AddFolderForm";
import AddNoteForm from './components/AddNoteForm/AddNoteForm';

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

  handleDeleteNote = (noteToDelete) => {
    fetch(`http://localhost:9090/notes/` + noteToDelete, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
        return res.json();
      })
      .then((res) => {
        this.handleDeleteNoteClick();
      })
      .catch((error) => {
        console.log({ error });
      });
    console.log("handleDeleteNoteClick registered on " + noteToDelete);
  };

  handleDeleteNoteClick = (notesToDelete) => {
    const notes = this.state.notes.filter((note) => note.id !== notesToDelete);
    this.setState({ notes });
  };

  handleAddNewFolder=(newFolder)=>{
    console.log("handleAddNewfolder triggered")
    const newFolders= [...this.state.folders, newFolder]
    this.setState({folders: newFolders})
  }

  handleAddNewNote=()=>{
    console.log('handleAddnewNote trigged!')
  }

  renderNavRoutes() {
    return (
      <div>
        {["/", "/folder/:folderId"].map((path) => (
          <Route exact key={path} path={path} component={FolderSidebar} />
        ))}
        <Route path="/note/:noteId" component={FilteredFolderSidebar} />
        <Route path="/add-folder" component={FolderSidebar} />
        <Route path="/add-note" component={FolderSidebar} />
      </div>
    );
  }

  renderMainRoutes() {
    return (
      <div>
        {["/", "/folder/:folderId"].map((path) => (
          <Route exact key={path} path={path} component={NoteList} />
        ))}
        <Route path="/note/:noteId" component={NoteContent} />
        <Route path="/add-folder" component={AddFolderForm} />
        <Route path="/add-note" component={AddNoteForm} />
      </div>
    );
  }
  render() {
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      deleteNote: this.handleDeleteNote,
      addFolder: this.handleAddNewFolder,
      addNote: this.handleAddNewNote
    };
    return (
      <AppContext.Provider value={contextValue}>
        <div className="App">
          <nav className="App__nav">{this.renderNavRoutes()}</nav>
          <header className="App__header">
            <h1>
              <Link to="/">Noteful</Link>
            </h1>
          </header>
          <main className="App__main">{this.renderMainRoutes()}</main>
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
