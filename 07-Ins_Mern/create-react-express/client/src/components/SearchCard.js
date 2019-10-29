import React from 'react';

const SearchCard = () => (

  <div className="card">
    <div className="card-header">
      <h3 className="card-title">Book Search</h3>
    </div>
    <div className="card-body">
      <p className="card-text">
        Book
      </p>

      {/* Search Form */}
      <div className="input-group mb-3">
        <div className="input-group-prepend"></div>
        <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
      </div>

      {/* Search button */}
      <button className="btn btn-outline-success my-2 my-sm-0 float-right" type="submit">
        Search
      </button>
    </div>
  </div>

)

export default SearchCard; 