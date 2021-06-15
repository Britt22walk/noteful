import React from "react";

<<<<<<< HEAD
const AppContext = React.createContext({
  folders: [],
  notes: [],
  filteredFolder: []
});
export default AppContext
=======

 export default React.createContext({
  notes: [],
  folders: [],
  addFolder: () => {},
  addNote: () => {},
  deleteNote: () => {},
})
>>>>>>> b5642da099e2ff127d4e5b1ae2d713dabb8738ca
