import * as ActivityAPI from "../util/ActivityUtil";

export const RECEIVE_ACTIVITY = 'receive_activity';
export const RECEIVE_ACTIVITY_ERRORS = 'receive_activity_errors';

const receiveActivity = (payload) => ({
  type: RECEIVE_ACTIVITY,
  payload
});

const receiveActivityErrors = (error) => ({
  type: RECEIVE_ACTIVITY_ERRORS,
  error
});


export const fetchItinerary = () => dispatch => {
  return ActivityAPI.fetchActivity().then(
    activity => dispatch(receiveActivity(activity)),
    error => dispatch(receiveActivityErrors(error.responseJSON))
  );
};
