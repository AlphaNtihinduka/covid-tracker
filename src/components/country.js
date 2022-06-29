import React from 'react';
import { useSelector } from 'react-redux';
import Home from './Home';
import '../css/country.css';

const Country = () => {
  const countriesData = useSelector((state) => state.countries);

  const countriesArray = countriesData;
  console.log('countriesData', countriesData);
  return (
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
      {countriesArray.map((country) => (
        <div className="country-container" key={country.id}>
          <div className="country-flag-container">
            <div className="country-name">{country.id}</div>
            <span className="country-flag"><img src={country.flag} alt={`${country.id} flag`} /></span>
          </div>

          <div className="country-cases">
            Critical:
            {country.criticalCases}
          </div>
          <div className="country-active">
            Active:
            {country.activeCase}
          </div>
          <div className="country-deaths">
            Deaths:
            {country.Death}
          </div>
          <div className="country-recovered">
            Today Cases:
            {country.todayCases}
          </div>
        </div>
      ))}

    </>
  );
};

export default Country;
