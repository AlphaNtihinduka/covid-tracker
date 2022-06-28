import React from 'react';
import Home from './Home';
import '../css/country.css';

const Country = () => (
  <>
    <Home />
    <div className="search">
      <input
        type="search"
        placeholder="Search Country ..."
        className="search-country-input"
      />
      <button type="button">Search</button>
    </div>

    <div className="country-container">
      <div className="country-name">Uganda</div>
      <div className="country-cases">Cases: 200,302</div>
      <div className="country-active">Active Cases: 10</div>
      <div className="country-recovered">Recovered Cases: 10</div>
      <div className="country-deaths">Death Cases: 10</div>
      <div className="country-flag"><img  src="" alt="country flag" /></div>
    </div>
  </>
);

export default Country;
