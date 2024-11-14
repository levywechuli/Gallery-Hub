import { useState } from "react";

function AddArtworkForm() {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newArtwork = {
      title,
      artist,
      imageUrl,
      price: parseFloat(price),
    };
    fetch("https://gallery-hub.onrender.com/artworks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newArtwork),
    })
      .then((response) => response.json())
      .then(() => {
        alert("Artwork added successfully!");
        setTitle("");
        setArtist("");
        setImageUrl("");
        setPrice("");
      });
  };

  return (
    <form onSubmit={handleSubmit} className="form-detail">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Artist"
        value={artist}
        onChange={(event) => setArtist(event.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Image URL"
        value={imageUrl}
        onChange={(event) => setImageUrl(event.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
        required
      />
      <button type="submit">Add Artwork</button>
    </form>
  );
}

export default AddArtworkForm;
