function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <span>DECA Bound</span>
            </div>
            <div className="nav-links">
                <a href="#">Home</a>
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