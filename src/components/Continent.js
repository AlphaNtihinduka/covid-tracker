import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../css/continent.css';

const Continent = () => {
  const continentArray = useSelector((state) => state);

  const continentsDataArray = continentArray.continents;

  console.log('continentsSataArray', continentsDataArray);

  const [continent, setContinent] = useState(false);
  console.log('continent', continent);
  console.log('setcontinent', setContinent);

  console.log(continentsDataArray);

  return (
    <div className="continent-wrapper">
      <div className="search">
        <input type="search" placeholder="Search Continent..." className="search-input" />
      </div>
      <div className="continents-container">
        {continentsDataArray.map((continent) => (
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
              {continent.todayDeaths}
              <span className="case-value">{continent.todayDeaths}</span>
            </p>
            <div>
              <Link to={`/countries/${continent.continentName}`}><button type="button" className="button">See More</button></Link>
              {/* {`/country/${continent.id}`} */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Continent;
