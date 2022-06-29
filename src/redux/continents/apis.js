import * as actions from '../actionTypes';

const continentApi = 'https://disease.sh/v3/covid-19/continents';

const fetchContinents = () => async (dispatch) => {
  const response = await fetch(continentApi)
    .catch((error) => error.message);
  let fetchedData = await response.json();
  fetchedData = fetchedData.map((continent) => ({
    continentName: continent.continent,
    countries: continent.countries,
    activeCase: continent.active,
    criticalCases: continent.critical,
    RecoveredCases: continent.recovered,
    Death: continent.deaths,
    todayCases: continent.todayCases,
    todayDeaths: continent.todayDeaths,
  }));
  dispatch({
    type: actions.SET_CONTINENTS,
    payload: fetchedData,
  });
};

export default fetchContinents;
