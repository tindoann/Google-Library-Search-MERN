import React from "react";

function HelloBootstrap() {
return (
<div className="container">
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">
      Google Books
    </a>
    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">
            Search <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Saved
          </a>
        </li>
      </ul>
    </div>
  </nav>
  <div className="jumbotron">
    <h1>(React) Google Books Search</h1>
    <p>Search for and Save Books of Interest</p>
  </div>
  <div className="card">
    <div className="card-header">
      <h3 className="card-title">Book Search</h3>
    </div>
    <div className="card-body">
      <p className="card-text">
        Book
      </p>

  {/* Search Form  */}
      <div class="input-group mb-3">
        <div class="input-group-prepend">
        </div>
        <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
      </div>
  
  {/* Search button */}
      <button className="btn btn-outline-success my-2 my-sm-0 float-right" type="submit">
        Search
     </button> 
</div>
</div>
</div>
);
}

export default HelloBootstrap;
