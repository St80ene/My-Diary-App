import React from 'react';
import './AddButton.scss';
import { Link } from 'react-router-dom';

export default class AddButton extends React.Component {
  render() {
    return (
      <>
        <div className="main">
          <Link to="/Home/Notes">
            <button className="addBtn">
              <i className="fas fa-pen-fancy"></i>
            </button>
          </Link>
        </div>
      </>
    );
  }
}
