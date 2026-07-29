function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <span>DECA Bound</span>
            </div>
            <div className="nav-links">
                <a href="#">Explore</a>
                <a href="#">Log In</a>
                <a href="#" className="get-started-button">Get Started</a>
            </div>
        </nav>
    )
}

export default Navbar;