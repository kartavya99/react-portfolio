import React from "react";
import "./App.css";
import ParentContainer from "./components/ParentContainer/ParentContainer";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLaptopCode,
  faServer,
  faToolbox,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

library.add(faLaptopCode, faServer, faToolbox, faLightbulb);

function App() {
  return (
    <div className="App">
      <ParentContainer />
    </div>
  );
}

export default App;
