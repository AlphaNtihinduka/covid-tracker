import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Home from './Home';
import '../css/country.css';

const Country = ({ continentName }) => {
  const countriesData = useSelector((state) => state.countries);

  const countriesArray = countriesData;

  const continentArray = useSelector((state) => state.continents);
  const continentCountries = continentArray
    .filter((continent) => continent.continentName === continentName)[0].countries || [];

  const countryData = countriesArray
    .filter((country) => continentCountries.includes(country.countryName));
  console.log('countryData', countryData);

  // console.log('continentCountries', continentCountries);

  const [countrySearched, setCountry] = useState(false);
  console.log('countrySearched', countrySearched);
  // console.log('setcontinent', setContinent);

  // console.log(continentsDataArray);

  const onChangeEvent = (e) => {
    const textInput = e.target.value.toLowerCase() || '';
    console.log('textinput', textInput);
    const newStr = textInput[0].toUpperCase().concat(textInput.slice(1, textInput.length)) || '';
    console.log('newstr', newStr);
    setCountry(countryData.filter(
      (continent) => continent.countryName.includes(newStr),
    ));
  };

  return (
    <>
      <Home />
      <div className="search">
        <input
          type="search"
          placeholder="Search Country ..."
          className="search-country-input"
          onChange={onChangeEvent}
        />
      </div>
      {countrySearched && (countrySearched.length !== 0) ? (
        <div className="country-container" key={countrySearched[0].countryName}>
          <div className="country-flag-container">
            <div className="country-name">{countrySearched[0].countryName}</div>
            <span className="country-flag"><img src={countrySearched[0].flag} alt={`${countrySearched[0].countryName} flag`} /></span>
          </div>

          <div className="country-cases">
            Critical:
            {countrySearched[0].criticalCases}
          </div>
          <div className="country-active">
            Active:
            {countrySearched[0].activeCase}
          </div>
          <div className="country-deaths">
            Deaths:
            {countrySearched[0].Death}
          </div>
          <div className="country-recovered">
            Today Cases:
            {countrySearched[0].todayCases}
          </div>
        </div>
      )
        : countryData.map((country) => (
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
