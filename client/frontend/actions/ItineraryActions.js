import * as ItineraryAPI from "../util/ItineraryUtil";

export const RECEIVE_ITINERARY = 'receive_itinerary';
export const LOAD_ITINERARY = 'load_itinerary';

const receiveItinerary = (payload) => {
  return({
    type: RECEIVE_ITINERARY,
    payload
  });
};


export const fetchItinerary = (itineraryparams) => dispatch => {
  dispatch({ type: LOAD_ITINERARY });
  return ItineraryAPI.fetchItinerary(itineraryparams).then(
    itinerary => dispatch(receiveItinerary(itinerary))
  );
};
