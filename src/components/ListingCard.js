import React, { useState } from "react";

function ListingCard({ listing, removeListing }) {
  // destructuring listing object
  const { id, description, image, location } = listing
  const [ favorited, setFavorited ] = useState(true)

  function handleFavoritedClick() {
    // setFavorited((currentFavoritedState) => !currentFavoritedState)
    setFavorited(!favorited)
  }

  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'DELETE'
    }).then((resp) => {
      if (resp.ok) {
        // filter and update state of listings to remove from the dom
        removeListing(id)
      } else {
        console.log('handle errors')
      }
    })
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorited ? (
          <button onClick={handleFavoritedClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavoritedClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span> 
        <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
