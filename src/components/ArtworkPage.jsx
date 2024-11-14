import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ArtworkPage() {
  const { id } = useParams();
  const [artwork, setArtwork] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://gallery-hub.onrender.com/artworks/${id}`)
        .then((response) => response.json())
        .then((data) => setArtwork(data))
        .catch((error) => console.error("Error fetching artwork:", error));
    }
  }, [id]);

  if (!artwork) return <p>Loading...</p>;
  return (
    <div className="view-detail">
      <img src={artwork.imageUrl} alt={artwork.title} />
      <h1>{artwork.title}</h1>
      <p>ARTIST: {artwork.artist}</p>
      <p className="view-p">PRICE: ${artwork.price.toLocaleString()}</p>
    </div>
  );
}

export default ArtworkPage;
