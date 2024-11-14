import { useEffect, useState } from "react";
import Search from "./Search";
import ArtworkCard from './ArtworkCard';

function ArtworkList(){
    const [artworks,setArtworks]= useState([]);
    const [searchTerm, setSearchTerm]= useState('')

    useEffect(()=>{
        fetch("http://localhost:3000/artworks")
        .then((Response) => Response.json())
        .then((data) => setArtworks(data));

    }, []);
    const filteredArtworks = artworks.filter((artwork) =>
        artwork.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    
    return(
        <div>
            <Search/>
            <div className="artwork-list">
            {filteredArtworks.map((artwork) => (
          <ArtworkCard 
          key={artwork.id} 
          id = {artwork.id}
          image = {artwork.image}
          title = {artwork.title}
          artist = {artwork.artist}
          imageUrl = {artwork.imageUrl}
          price = {artwork.price}

           />
            ))}
            </div>
        </div>

    )
}

export default ArtworkList;