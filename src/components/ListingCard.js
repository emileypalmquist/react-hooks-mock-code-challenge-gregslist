import React, { useState } from "react";

// remove that listing from the listings state in App
// - listing state is passed down as a prop to our listingContainer
// - listingContainer maps through the listings prop and renders a listingCard for each one

function ListingCard({ listing, removeListing }) {
  const { description, id, image, location } = listing;
  const [favorited, setFavorited] = useState(false);

  function handleClick() {
    setFavorited((currentFavorited) => !currentFavorited);
    // setFavorited(!favorited)
  }

  const favoriteButton = favorited ? (
    <button className="emoji-button favorite active" onClick={handleClick}>
      ★
    </button>
  ) : (
    <button className="emoji-button favorite" onClick={handleClick}>
      ☆
    </button>
  );

  function handleDelete() {
    removeListing(id);
    // delete request to remove listing from db
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favoriteButton}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
