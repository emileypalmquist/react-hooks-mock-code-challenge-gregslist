import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ search }) {
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

  const filteredListings = listings.filter((listing) => {
    const lowercaseSearch = search.toLowerCase()
    const lowercaseDescription = listing.description.toLowerCase()
    return lowercaseDescription.includes(lowercaseSearch)
  })

  const listingCards = filteredListings.map((listing) => (
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
