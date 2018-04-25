import {
  RECEIVE_ITINERARY,
} from "../actions/ItineraryActions";


const INITIAL_STATE = {};


export default (state=INITIAL_STATE, action) => {
  let newState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ITINERARY:
      newState = Object.assign(state, {},
        {itinerary: action.payload.itinerary});
      return newState;
    default:
      return state;
  }
};
