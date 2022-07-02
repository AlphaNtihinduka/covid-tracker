import * as actions from '../actionTypes';

const countryReducer = (state = [], action = {}) => {
  switch (action.type) {
    case actions.SET_COUNTRIES:
      return action.payload;
    default:
      return state;
  }
};

export default countryReducer;
