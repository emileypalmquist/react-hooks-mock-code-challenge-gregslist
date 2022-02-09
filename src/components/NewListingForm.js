import { useState } from "react";

const initialNewListing = {
  description: "",
  image: "",
  location: "",
};

function NewListingForm({ setListings }) {
  const [newListing, setNewListing] = useState(initialNewListing);

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;

    setNewListing((currentNewListing) => ({
      ...currentNewListing,
      [key]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:6001/listings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newListing),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setListings((currentListings) => [...currentListings, data]);
        setNewListing(initialNewListing);
      });
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="description"
        name="description"
        placeholder="description"
        value={newListing.description}
        onChange={handleChange}
      />
      <input
        type="text"
        id="image"
        name="image"
        placeholder="image"
        value={newListing.image}
        onChange={handleChange}
      />
      <input
        type="text"
        id="location"
        name="location"
        placeholder="location"
        value={newListing.location}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default NewListingForm;
