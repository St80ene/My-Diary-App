import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Textbox from '../../Components/Textbox/Textbox';
import AddButton from '../../Components/AddButton/AddButton';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Textbox />
      <AddButton />
    </div>
  );
};

export default Home;
