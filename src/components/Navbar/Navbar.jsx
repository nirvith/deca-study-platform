import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <span>DECA BOUND</span>
            </div>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/events">Events</Link>
                <Link to="/practice">Practice</Link>
            </div>
        </nav>
    )
}

export default Navbar;