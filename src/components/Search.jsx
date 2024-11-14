function Search(onSearch){
    const handleChange = (e) => {
        onSearch(e.target.value);
      };
    
    return(
    <input type="text" placeholder="Search artworks...." onChange={handleChange}/>
  
    )
}

export default Search;