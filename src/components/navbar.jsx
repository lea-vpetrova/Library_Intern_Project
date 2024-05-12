
const Navbar = () => {
  return (
    <nav className="navbar custom-navbar-background" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          
          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            href="/"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="/">
              Home
            </a>
            <a className="navbar-item" href="/search">
              Search
            </a>
            <a className="navbar-item" href="/profile">
              Profile
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
