import { Link } from "react-router-dom";
import "../css/Navbar.css";

function NavBar({ onHomeClick }) {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/" onClick={onHomeClick}>Movix</Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-link" onClick={onHomeClick}>Home | Kāinga</Link>
                <Link to="/favorites" className="nav-link">Favorites | Ngā Mea Pai</Link>
            </div>
        </nav>
    );
}

export default NavBar;
