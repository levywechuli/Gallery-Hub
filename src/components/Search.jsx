function Search({ onSearch }) {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search artworks...."
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
