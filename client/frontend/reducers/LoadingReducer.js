import {
  RECEIVE_ITINERARY,
  LOAD_ITINERARY
} from "../actions/ItineraryActions";


const INITIAL_STATE = {loading: false};


export default (state=INITIAL_STATE, action) => {
  let newState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ITINERARY:
      return { loading: false };
    case LOAD_ITINERARY:
      return { loading: true };
    default:
      return state;
  }
};
