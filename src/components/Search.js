import React, { useState } from "react";

function Search({ onSearch }) {
  const [searchTerm, setSearchterm] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(searchTerm)
  }

  function handleSearchInput(event) {
    setSearchterm(event.target.value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchTerm}
        onChange={handleSearchInput}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
