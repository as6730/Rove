import {
  RECEIVE_ITINERARY,
  LOAD_ITINERARY
} from "../actions/ItineraryActions";


const INITIAL_STATE = {loading: true};


export default (state=INITIAL_STATE, action) => {
  let newState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ITINERARY:
      console.log(action.type);
      return { loading: false };
    case LOAD_ITINERARY:
    console.log(action.type);
      return { loading: true };
    default:
      return state;
  }
};
