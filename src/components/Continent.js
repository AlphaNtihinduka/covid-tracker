import React from 'react';
// import { Link } from 'react-router-dom';
import '../css/continent.css';

const Continent = () => (
  <div className="continent-wrapper">
    <div className="search">
      <input type="search" placeholder="Search Country ..." className="search-input" />
    </div>
    <div className="continents-container">
      <div className="continent-container">
        <p className="continent-title">Africa</p>
        <p className="continent-cases">Cases: 10,203,809</p>
        <p className="continent-deaths">Deaths: 10,203,809</p>
        <div>
          {/* <Link to="/Countries">See More</Link> */}
        </div>
      </div>
      <div className="continent-container">
        <p className="continent-title">Africa</p>
        <p className="continent-cases">Cases: 10,203,809</p>
        <p className="continent-deaths">Deaths: 10,203,809</p>
        <div>
          <button type="button" className="button">See More</button>
        </div>
      </div>
      <div className="continent-container">
        <p className="continent-title">Africa</p>
        <p className="continent-cases">Cases: 10,203,809</p>
        <p className="continent-deaths">Deaths: 10,203,809</p>
        <div>
          <button type="button" className="button">See More</button>
        </div>
      </div>
      <div className="continent-container">
        <p className="continent-title">Africa</p>
        <p className="continent-cases">Cases: 10,203,809</p>
        <p className="continent-deaths">Deaths: 10,203,809</p>
        <div>
          <button type="button" className="button">See More</button>
        </div>
      </div>
    </div>
  </div>
);

export default Continent;
