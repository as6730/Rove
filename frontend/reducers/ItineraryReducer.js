import {
  RECEIVE_ITINERARY,
  RECEIVE_ITINERARY_ERRORS
} from "../actions/ItineraryActions";


const INITIAL_STATE = {error:''};


export default (state=INITIAL_STATE, action) => {
  let newState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ITINERARY:
      newState = Object.assign(state, {},
        {itinerary: action.payload.itinerary});
      return newState;
    case RECEIVE_ITINERARY_ERRORS:
    newState = Object.assign(state, {},
      { error: action.error});
      return state;
    default:
      return state;
  }
};
