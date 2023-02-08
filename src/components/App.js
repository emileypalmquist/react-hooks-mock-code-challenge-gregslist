import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // console.log("hello from the callback function for the useEffect");
    fetch("http://localhost:6001/listings")
      .then((resp) => resp.json())
      .then((data) => setListings(data));
  }, []);

  function removeListing(id) {
    console.log("removeListing", id);
    const newListingsArry = listings.filter((listing) => listing.id !== id);
    setListings(newListingsArry);
  }

  function updateSearch(searchValue) {
    setSearchTerm(searchValue);
  }

  const filteredListings = listings.filter((listing) => {
    const lowerCaseDescription = listing.description.toLowerCase();
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return lowerCaseDescription.includes(lowerCaseSearchTerm);
  });

  return (
    <div className="app">
      <Header searchTerm={searchTerm} updateSearch={updateSearch} />
      <ListingsContainer
        listings={filteredListings}
        removeListing={removeListing}
      />
    </div>
  );
}

export default App;
