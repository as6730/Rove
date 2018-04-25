import * as ItineraryAPI from "../util/ItineraryUtil";

export const RECEIVE_ITINERARY = 'receive_itinerary';

const receiveItinerary = (payload) => ({
  type: RECEIVE_ITINERARY,
  payload
});


export const fetchItinerary = (itineraryparams) => dispatch => {
  return ItineraryAPI.fetchItinerary(itineraryparams).then(
    itinerary => dispatch(receiveItinerary(itinerary))
  );
};
