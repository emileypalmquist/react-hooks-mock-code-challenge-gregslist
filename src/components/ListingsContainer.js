import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then((resp) => resp.json())
    .then((data) => setListings(data))
  }, [])

  function removeListing(listingId) {
    const filteredListings = listings.filter((listing) => listing.id !== listingId)
    setListings(filteredListings)
  }

  const listingCards = listings.map((listing) => (
    <ListingCard key={listing.id} listing={listing} removeListing={removeListing} />
  ))

  return (
    <main>
      <ul className="cards">
        { listingCards }
      </ul>
    </main>
  );
}

export default ListingsContainer;
