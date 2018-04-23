import * as ItineraryAPI from "../util/ItineraryUtil";

export const RECEIVE_ITINERARY = 'receive_itinerary';
export const RECEIVE_ITINERARY_ERRORS = 'receive_itinerary_errors';

const receiveItinerary = (payload) => ({
  type: RECEIVE_ITINERARY,
  payload
});

const receiveItineraryErrors = (error) => ({
  type: RECEIVE_ITINERARY_ERRORS,
  error
});


export const fetchItinerary = () => dispatch => {
  return ItineraryAPI.fetchItinerary().then(
    itinerary => dispatch(receiveItinerary(itinerary)),
    error => dispatch(receiveItineraryErrors(error.responseJSON))
  );
};
