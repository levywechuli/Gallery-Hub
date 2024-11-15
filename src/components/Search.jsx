import PropTypes from 'prop-types';
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
Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Search;
