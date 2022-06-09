import React from "react";
import Dnd from "./Components/Dnd";
import { GlobalStorage } from "./Context/GlobalContext";

function App() {
  return (
    <GlobalStorage>
      <Dnd />
    </GlobalStorage>
  );
}

export default App;
