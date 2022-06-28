import * as actions from '../actionTypes';

const continentReducer = (state = [], action = {}) => {
  switch (action.type) {
    case actions.SET_CONTINENTS:
      return action.payload;
    default:
      return state;
  }
};

export default continentReducer;
