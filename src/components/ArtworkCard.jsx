import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function ArtworkCard(id,title, artist,imageUrl, price){
    return(
     <div className="artwork-card">
        <img src={imageUrl} alt={title}/>
        <h2>{title}</h2>
        <p>${artist}</p>
        <p>${price.toLocaleString()}</p>
        <Link to={`/artwork/${id}`}>View Details</Link>
        <button >Purchase</button>  
     </div>
    )
}
ArtworkCard.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  };


export default ArtworkCard;