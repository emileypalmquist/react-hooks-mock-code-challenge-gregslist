import React, { useState } from "react";

function ListingCard({ listing, setListings }) {
  const { description, id, image, location } = listing;
  const [favorited, setFavorited] = useState(false);

  function handleClick() {
    setFavorited((currentFavorited) => !currentFavorited);
  }

  function handleDelete() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    });

    setListings((currentListings) =>
      currentListings.filter((listing) => listing.id !== id)
    );
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorited ? (
          <button
            className="emoji-button favorite active"
            onClick={handleClick}
          >
            ★
          </button>
        ) : (
          <button className="emoji-button favorite" onClick={handleClick}>
            ☆
          </button>
        )}
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
