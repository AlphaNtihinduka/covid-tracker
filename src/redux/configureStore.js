import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import continentReducer from './continents/continents';
import fetchContinents from './continents/apis';
import fetchCountries from './countries/api';
import countryReducer from './countries/country';

const store = configureStore({
  reducer: {
    continents: continentReducer,
    countries: countryReducer,
  },
  applyMiddleware: [thunk],
});

store.subscribe(() => { store.getState(); });
store.dispatch(fetchContinents());
store.dispatch(fetchCountries());

export default store;
