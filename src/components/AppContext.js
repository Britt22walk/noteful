import React from "react";

const AppContext = React.createContext({
  folders: [],
  notes: [],
  filteredFolder: []
});
export default AppContext
