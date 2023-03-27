import "./App.css";

import React from "react";

import Search from "./components/advancedSearch";

const options = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
];
function App() {
  return (
    <div className="App">
      <Search data={options} />
    </div>
  );
}

export default App;
