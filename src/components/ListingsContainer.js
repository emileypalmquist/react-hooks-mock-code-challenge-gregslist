import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, removeListing }) {
  const listingCards = listings.map((listing) => (
    <ListingCard
      key={listing.id}
      listing={listing}
      removeListing={removeListing}
    />
  ));

  return (
    <main>
      <ul className="cards">{listingCards}</ul>
    </main>
  );
}

export default ListingsContainer;
