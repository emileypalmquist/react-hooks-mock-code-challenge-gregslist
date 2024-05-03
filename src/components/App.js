import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [ search, setSearch ] = useState('')

  function onSearch(searchTerm) {
    setSearch(searchTerm)
  }

  return (
    <div className="app">
      <Header onSearch={onSearch} />
      <ListingsContainer search={search} />
    </div>
  );
}

export default App;
