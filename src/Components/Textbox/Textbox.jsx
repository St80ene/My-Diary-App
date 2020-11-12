import React, { Component } from 'react';
import '../DeleteButton/DeleteButton';
import './Textbox.scss';
import DeleteButton from '../DeleteButton/DeleteButton';

class Textbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleTimeString(),
    };
  }

  //Setting interval on the clock
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 0);
  }

  componentWillMount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      date: new Date().toDateString(),
    });
  }

  render() {
    return (
      <div className="container">
        <div className="heading">
          <div className="title">
            <h4>Title</h4>
          </div>
          <div className="date">
            <p>Today is: {this.state.date}</p>
          </div>
          <div>
            <DeleteButton />
          </div>
        </div>
        <hr />
        <div className="notes">
          <p className="thoughts">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non fugiat
            magnam libero ut dolorem unde quia neque corrupti iste fuga sequi
            est, officiis iusto, optio ipsam deserunt voluptas doloribus
            expedita! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Non fugiat magnam libero ut dolorem unde quia neque corrupti iste
            fuga sequi est, officiis iusto, optio ipsam deserunt voluptas
            doloribus expedita!
          </p>
        </div>
      </div>
    );
  }
}

export default Textbox;
