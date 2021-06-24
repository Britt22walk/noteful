import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'

import AddFolderForm from './components/AddFolderForm/AddFolderForm';
import AddNoteForm from './components/AddNoteForm/AddNoteForm';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
