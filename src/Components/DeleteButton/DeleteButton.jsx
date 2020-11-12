import React from 'react';
import './DeleteButton.scss';

class DeleteButton extends React.Component {
  render() {
    return (
      <button className="deleteBtn">
        Delete<i className="fa fa-trash"></i>
      </button>
    );
  }
}

export default DeleteButton;
