import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ArtworkCard({ id, title, artist, imageUrl, price }) {
  const handlePurchase = () => {
    alert(`Thank you for purchasing ${title}!`);
  };
  return (
    <div className="artwork-card">
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <p>{artist}</p>
      <p>${price.toLocaleString()}</p>
      <Link to={`/artwork/${id}`}>View Details</Link>
      <button onClick={handlePurchase}>Purchase</button>
    </div>
  );
}

ArtworkCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onSearch: PropTypes.func,
};

export default ArtworkCard;
