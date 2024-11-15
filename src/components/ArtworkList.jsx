import { useEffect, useState } from "react";
import ArtworkCard from "./ArtworkCard";
import PropTypes from 'prop-types';

function ArtworkList({ searchTerm }) {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
   fetch("https://gallery-hub.onrender.com/artworks")
      .then((Response) => Response.json())
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
ArtworkList.propTypes = {
  searchTerm: PropTypes.string.isRequired, 
};

export default ArtworkList;
