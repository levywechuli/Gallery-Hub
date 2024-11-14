import { Link } from "react-router-dom";
import Search from "./Search";

function Navbar({ onSearch }) {
  return (
    <div className="navbar">
      <nav>
        <Link className="logo">GALLERY HUB</Link>
        <Link to="/" className="nav-link home-link">
          Home
        </Link>
        <Link to="/add-artwork" className="nav-link add-artwork-link">
          Add Artwork
        </Link>
      </nav>
      <Search onSearch={onSearch} />
    </div>
  );
}

export default Navbar;

