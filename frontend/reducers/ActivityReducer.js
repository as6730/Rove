import {
  RECEIVE_ACTIVITY,
  RECEIVE_ACTIVITY_ERRORS
} from "../actions/ActivityActions";


const INITIAL_STATE = {};


export default (state=INITIAL_STATE, action) => {
  let newState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ACTIVITY:
      newState = Object.assign(state, {},
        {activity: action.payload.activity});
      return newState;
    case RECEIVE_ACTIVITY_ERRORS:
      return state;
    default:
      return state;
  }
};
