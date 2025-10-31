import React from 'react';
import ReactDom from 'react-dom';
import profileImage from './assets/profile.jpg'; // adjust the path as needed

function Home(){
  return (
    <div className="home-container">
      <div className="text-section">
        <h1>Hi, I'm Devendra </h1>
        <p>I’m a React Developer passionate about clean and interactive UIs..</p>
      </div>
      <div className="image-section">
        <img src={profileImage} alt="Profile" />
      </div>
    </div>
  );
};

export default Home;