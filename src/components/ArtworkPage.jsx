import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ArtworkPage(){
    const { id } = useParams();
    const [artwork, setArtwork] = useState(null);


  useEffect(() => {
    if (id){
    fetch(`http://localhost:3001/artworks/${id}`)
      .then((response) => response.json())
      .then((data) => setArtwork(data))
      .catch((error) => console.error("Error fetching artwork:", error));
  } 
},[id]);

    if (!artwork) return <p>Loading...</p>;
    return(
        <div>
            <img src={artwork.imageUrl} alt={artwork.title} />
            <h1>{artwork.title}</h1>
            <p>{artwork.artist}</p>
            <p>${artwork.price.toLocaleString()}</p>            

        </div>
    );
}

export default ArtworkPage;