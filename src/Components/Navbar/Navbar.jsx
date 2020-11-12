import React, { Component } from 'react';
import './Navbar.scss';

class Navbar extends Component {
  render() {
    return (
      <>
        <div className="nav">
          <div className="nav__logo">
            <h1 className="nav__logo--text">My Diary</h1>
          </div>
          <div className="nav__searchContainer">
            <input
              className="nav__searchInput"
              type="text"
              name="text"
              id="text"
              placeholder="search..."
            />
            <button className="nav__searchBtn">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;
