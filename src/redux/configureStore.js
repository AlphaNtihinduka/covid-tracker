import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import continentReducer from './continents/continents';
import fetchContinents from './continents/apis';

const store = configureStore({
  reducer: {
    continets: continentReducer,
  },
  applyMiddleware: [thunk],
});

store.subscribe(() => { store.getState(); });
store.dispatch(fetchContinents());
// store.dispatch(fetchRockets());

export default store;
