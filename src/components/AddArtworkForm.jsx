import { useState } from "react";

function AddArtworkForm (){
     const[title, setTitle]=useState('');
     const[artist, setArtist]=useState('');
     const[imageUrl, setImageUrl]=useState('');
     const[price, setPrice]=useState('');

     const handleSubmit = (event)=>{
        event.preventDefault();

        const newArtwork = {
            title,
            artist,
            imageUrl,
            price: parseFloat(price),
        };
        fetch("http://localhost:3001/artworks", {
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(newArtwork),
        })
        .then((Response) => Response.json())
        .then(() =>{
            alert('Artwork added sucessfully!');
            setTitle('');
            setArtist('')
            setImageUrl('');
            setPrice('');

        });
     }


    return(
        <form>
         <input type="text" placeholder="title" />  
         <input type="text" placeholder="Artist" />  
         <input type="text" placeholder="Image URL" />  
         <input type="number" placeholder="Price" /> 
         <button type="submit">Add Artwork</button> 
        </form>
    )
}

export default AddArtworkForm;