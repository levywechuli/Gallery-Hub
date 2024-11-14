function AddArtworkForm (){
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