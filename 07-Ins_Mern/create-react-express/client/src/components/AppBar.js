import React from 'react'; 

// Taken from final project 
const AppBar = () => (

<nav className="navbar navbar-expand-lg">
    <Link className="navbar-brand" to="/">
      Google Books
    </Link>
    <div>
    <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/search"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Search
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/saved"
              className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
            >
              Saved
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );

export default AppBar; 