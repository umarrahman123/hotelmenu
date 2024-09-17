import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Menubar(props) {
  const [searchText, setSearchText] = useState('');

  // Handle search input change
  const handleInputChange = (e) => {
    setSearchText(e.target.value);
    props.handleSearch(e.target.value);  // Call the handleSearch function passed from App.js
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/" >{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">{props.AboutText}</a>
            </li>
          </ul>
          
          {/* Search bar */}
          <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchText}
              onChange={handleInputChange}  // Call input change handler
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

Menubar.propTypes = {
  title: PropTypes.string.isRequired,
  AboutText: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired  // Add prop validation for handleSearch
};

Menubar.defaultProps = {
  title: 'Set title here',
  AboutText: 'About'
};

