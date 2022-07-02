import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../css/continent.css';

const Continent = () => {
  const continentArray = useSelector((state) => state);

  const [continentState, setContinent] = useState(false);

  const continentsDataArray = continentArray.continents;

  const onChangeEvent = (e) => {
    const textInput = e.target.value.toLowerCase() || '';
    const newStr = textInput[0].toUpperCase().concat(textInput.slice(1, textInput.length)) || '';
    setContinent(continentsDataArray.filter(
      (continent) => continent.continentName.includes(newStr),
    ));
  };

  return (
    <div className="continent-wrapper">
      <div className="search">
        <input
          type="search"
          placeholder="Search Continent ..."
          className="search-country-input"
          onChange={onChangeEvent}
        />
      </div>
      <div className="continents-container">
        { continentState && (continentState.length !== 0) ? (

          <div className="continent-container">
            <p className="continent-title">{continentState[0].continentName}</p>
            <p className="continent-cases">
              Active Cases:

              <span className="case-value">{continentState[0].activeCase}</span>
            </p>
            <p className="continent-deaths">
              Recovered:
              <span className="case-value">{continentState[0].RecoveredCases}</span>
            </p>
            <p className="continent-deaths">
              Critical:

              <span className="case-value">{continentState[0].criticalCases}</span>
            </p>
            <p className="continent-deaths">
              Death:

              <span className="case-value">{continentState[0].Death}</span>
            </p>
            <p className="continent-deaths">
              Today Cases:

              <span className="case-value">{continentState[0].todayCases}</span>
            </p>
            <p className="continent-deaths">
              Recovered Cases:
              <span className="case-value">{continentState[0].RecoveredCases}</span>
            </p>
            <div>
              <Link to={`/countries/${continentState[0].continentName}`}><button type="button" className="button">See More</button></Link>
            </div>
          </div>

        )
          : continentsDataArray.map((continent) => (
            <div key={continent.continentName} className="continent-container">
              <p className="continent-title">{continent.continentName}</p>
              <p className="continent-cases">
                Active Cases:

                <span className="case-value">{continent.activeCase}</span>
              </p>
              <p className="continent-deaths">
                Recovered:
                <span className="case-value">{continent.RecoveredCases}</span>
              </p>
              <p className="continent-deaths">
                Critical:

                <span className="case-value">{continent.criticalCases}</span>
              </p>
              <p className="continent-deaths">
                Death:

                <span className="case-value">{continent.Death}</span>
              </p>
              <p className="continent-deaths">
                Today Cases:

                <span className="case-value">{continent.todayCases}</span>
              </p>
              <p className="continent-deaths">
                Recovered Cases:
                <span className="case-value">{continent.RecoveredCases}</span>
              </p>
              <div>
                <Link to={`/countries/${continent.continentName}`}><button type="button" className="button">See More</button></Link>
              </div>
            </div>
          ))}

      </div>
    </div>
  );
};

export default Continent;
