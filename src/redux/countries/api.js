import * as actions from '../actionTypes';

const countryApi = 'https://disease.sh/v3/covid-19/countries';

const fetchCountries = () => async (dispatch) => {
  const response = await fetch(countryApi)
    .catch((error) => error.message);
  let fetchedData = await response.json();
  fetchedData = fetchedData.map((country) => {
    // console.log('country', country);
    const obj = {
      id: country.country,
      activeCase: country.active,
      criticalCases: country.critical,
      RecoveredCases: country.recovered,
      Death: country.deaths,
      todayCases: country.todayCases,
      todayDeaths: country.todayDeaths,
      flag: country.countryInfo.flag
    };
    return obj;
  });
  dispatch({
    type: actions.SET_COUNTRIES,
    payload: fetchedData,
  });
};

export default fetchCountries;
