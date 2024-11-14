import { useEffect, useState } from "react";
import ArtworkCard from "./ArtworkCard";

function ArtworkList({ searchTerm }) {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    fetch("https://gallery-hub.onrender.com/artworks")
      .then((response) => response.json())
      .then((data) => setArtworks(data));
  }, []);
  const filteredArtworks = artworks.filter((artwork) =>
    artwork.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="artwork-container">
        {filteredArtworks.map((artwork) => (
          <ArtworkCard
            key={artwork.id}
            id={artwork.id}
            image={artwork.image}
            title={artwork.title}
            artist={artwork.artist}
            imageUrl={artwork.imageUrl}
            price={artwork.price}
          />
        ))}
      </div>
    </div>
  );
}

export default ArtworkList;
