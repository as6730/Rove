import {
  RECEIVE_ITINERARY,
} from "../actions/ItineraryActions";


const INITIAL_STATE = [];


export default (state=INITIAL_STATE, action) => {
  let newState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ITINERARY:
      return action.payload;
    default:
      return state;
  }
};
