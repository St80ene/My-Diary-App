import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
// import TextField from '../../Components/TextField/TextField';
import './Notes.scss';
import { Link } from 'react-router-dom';

class Notes extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleFormSubmit = this.handleFormSubmit.bind(this);
  //   this.state = {
  //     text: '',
  //     title: '',
  //   };
  // }

  // handleChange = (e) => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  //on form submit
  // handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   localStorage.setItem('document', JSON.stringify(this.state));
  // };

  //React life cycle
  // componentDidMount() {
  //   this.dataStored = JSON.parse(localStorage.getItem('document'));

  //   if (localStorage.getItem('document')) {
  //     this.setState({ text: this.dataStored.text });
  //   } else {
  //     this.setState({
  //       text: '',
  //       title: '',
  //     });
  //   }
  // }

  render() {
    return (
      <div className="note">
        <Navbar />
        <div className="back-icon">
          <Link to="/Home">
            <i className="fas fa-angle-double-left"></i>
          </Link>
          <p className="back">Back</p>
        </div>
        <div className="note__noteBook">
          <form
            action=""
            className="note__form"
            // onSubmit={this.handleFormSubmit}
          >
            <input
              className="note__textBox box"
              type="text"
              name=""
              placeholder="Title..."
              // value={this.state.title}
              // onChange={this.handleChange}
              required
            />
            <textarea
              className="textArea box"
              name=""
              id=""
              placeholder="Pen down your thoughts..."
              // value={this.state.text}
              // onChange={this.handleChange}
            ></textarea>
            <button className="savebtn" type="submit">
              Save
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Notes;
