import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <span>DECA Bound</span>
            </div>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/events">Events</Link>
                <a href="#">Practice</a>
                <a href="#">Dashboard</a>
                <a href="#">FAQ</a>
                <a href="#">Team</a>
            </div>
            <div className="nav-actions">
                <a href="#">Log In</a>
                <a href="#" className="get-started-button">Get Started</a>
            </div>
        </nav>
    )
}

export default Navbar;