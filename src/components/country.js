import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './Home';
import '../css/country.css';

const Country = ({ continentName }) => {
  const countriesData = useSelector((state) => state.countries);

  const countriesArray = countriesData;

  // const { selectedContinent } = useParams();
  // console.log('selectedContinent', selectedContinent);

  const continentArray = useSelector((state) => state.continents);
  const continentCountries = continentArray.filter((continent) => continent.continentName === continentName)[0].countries;

  const continentData = countriesArray.filter((country) => continentCountries.includes(country.countryName));

  console.log('continentCountries', continentCountries);
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
      {continentData.map((country) => (
        <div className="country-container" key={country.countryName}>
          <div className="country-flag-container">
            <div className="country-name">{country.countryName}</div>
            <span className="country-flag"><img src={country.flag} alt={`${country.countryName} flag`} /></span>
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

Country.propTypes = {
  continentName: PropTypes.string.isRequired,
};

export default Country;
