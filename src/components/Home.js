import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../images/arrowLeft.png';
import microphone from '../images/microphone.png';
import setting from '../images/settings.png';
import covid from '../images/covid.png';
import '../css/header.css';

const Home = () => (
  <div>
    <div className="header-contaier">
      <div className="home-return">
        <Link to="/" className="links">
          <img src={arrow} alt="arrow" className="arrow-icon icons" />
          <span className="year2022">2022</span>
        </Link>
      </div>
      <div className="right-header">
        <span className="microphone"><img src={microphone} alt="microphone" className="icons" /></span>
        <span className="setting"><img src={setting} alt="setting" className="icons" /></span>
      </div>
    </div>
    <div className="banner">
      <div className="covid-text">COVID-19 WORLD UPDATES</div>
      <div className="img-container"><img src={covid} alt="covid" className="covid-img" /></div>
    </div>
  </div>
);

export default Home;
